import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { ShoppingBag, MapPin, CreditCard, ChevronRight, ArrowLeft, Truck, Smartphone, QrCode } from 'lucide-react';
import { loadRazorpayScript, initializeRazorpayPayment } from '../../utils/razorpay';
import QRCodeModal from '../../components/QRCodeModal';
import Cookies from 'js-cookie';

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [checkoutStep, setCheckoutStep] = useState('review');
  const [showQRModal, setShowQRModal] = useState(false);

  useEffect(() => {
    const fetchCartAndAddress = async () => {
      try {
        const token = Cookies.get('token');
        const cartResponse = await axios.get(`${import.meta.env.VITE_BACKEND}/api/cart/getCart`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setCartItems(cartResponse.data);

        // Get selected address from location state
        if (location.state?.selectedAddress) {
          setSelectedAddress(location.state.selectedAddress);
        } else {
          navigate('/select-address');
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        toast.error('Failed to load checkout information');
        setLoading(false);
      }
    };

    fetchCartAndAddress();
  }, [location, navigate]);

  // Calculate order totals
  const calculateTotals = () => {
    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shipping = 8.99;
    const tax = subtotal * 0.1;
    return {
      subtotal,
      shipping,
      tax,
      total: subtotal + shipping + tax
    };
  };

  const initiateRazorpayPayment = async () => {
    try {
      const token = Cookies.get("token");
      const total = calculateTotals().total;

      setLoading(true);
      const paymentResponse = await axios.post(
        `${import.meta.env.VITE_BACKEND}/api/payments/checkout`, // Updated endpoint
        { total: Math.round(total * 100) },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // Check for ad blocker
      const testScript = document.createElement('script');
      testScript.src = 'https://checkout.razorpay.com/v1/checkout.js';
      testScript.onerror = () => {
        toast.error('Please disable ad blocker to proceed with payment');
        setLoading(false);
        return;
      };

      if (!paymentResponse.data.success) {
        throw new Error(paymentResponse.data.message || 'Failed to create payment');
      }

      const isLoaded = await loadRazorpayScript();
      if (!isLoaded) {
        toast.error('Unable to load payment system. Please disable ad blocker.');
        setLoading(false);
        return;
      }

      initializeRazorpayPayment({
        amount: paymentResponse.data.amount,
        orderId: paymentResponse.data.orderId,
        name: selectedAddress?.name || '',
        email: Cookies.get('userEmail') || '',
        contact: selectedAddress?.phone || ''
      }, 
      async (response) => {
        try {
          const verifyResponse = await axios.post(
            `${import.meta.env.VITE_BACKEND}/api/payments/verify`,
            {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature
            }
          );

          if (verifyResponse.data.success) {
            // Create order and clear cart
            await axios.post(
              `${import.meta.env.VITE_BACKEND}/api/orders/create`,
              {
                products: cartItems,
                address: selectedAddress._id,
                paymentDetails: response
              },
              { headers: { Authorization: `Bearer ${token}` } }
            );

            await axios.delete(`${import.meta.env.VITE_BACKEND}/api/cart/clear`, {
              headers: { Authorization: `Bearer ${token}` }
            });

            toast.success("Payment successful!");
            navigate('/home'); // Added replace: true to prevent going back to checkout
          }
        } catch (error) {
          toast.error("Payment verification failed");
          console.error("Payment verification failed:", error);
          setLoading(false);
        }
      },
      () => {
        setLoading(false);
        toast.error("Payment cancelled");
        setCheckoutStep('payment');
      });

    } catch (error) {
      setLoading(false);
      toast.error(error.message || "Payment failed");
      console.error("Payment error:", error);
      setCheckoutStep('payment');
    }
  };

  const handlePlaceOrder = () => {
    if (!selectedAddress) {
      toast.error("Please select a shipping address");
      return;
    }

    if (paymentMethod === 'razorpay') {
      initiateRazorpayPayment();
    } else if (paymentMethod === 'cod') {
      // Handle COD order
      // ... existing COD handling code ...
    }
  };

  const handleQRPayment = () => {
    setPaymentMethod('qr');
    setShowQRModal(true);
  };

  const PaymentMethodSelector = () => (
    <div className="mt-6 bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <CreditCard className="mr-2 text-indigo-600" size={20} />
        Payment Method
      </h2>
      <div className="space-y-3">
        <label 
          className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-indigo-50 transition-colors"
          onClick={() => {
            setPaymentMethod('razorpay');
            if (selectedAddress) {
              initiateRazorpayPayment();
            } else {
              toast.error("Please select a shipping address first");
            }
          }}
        >
          <input 
            type="radio" 
            name="payment" 
            value="razorpay" 
            checked={paymentMethod === 'razorpay'} 
            className="h-5 w-5 text-indigo-600"
            onChange={() => {}}
          />
          <div className="ml-3">
            <p className="font-medium">Card/sNetbanking</p>
            <p className="text-sm text-gray-500">Pay securely with Razorpay</p>
          </div>
        </label>

        <label 
          className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-indigo-50 transition-colors"
          onClick={() => {
            setPaymentMethod('upi');
            if (selectedAddress) {
              initiateRazorpayPayment();
            } else {
              toast.error("Please select a shipping address first");
            }
          }}
        >
          <input 
            type="radio" 
            name="payment" 
            value="upi" 
            checked={paymentMethod === 'upi'} 
            className="h-5 w-5 text-indigo-600"
            onChange={() => {}}
          />
          <div className="ml-3 flex items-center">
            <Smartphone className="mr-2 text-indigo-600" size={20} />
            <div>
              <p className="font-medium">UPI Payment</p>
              <p className="text-sm text-gray-500">Pay using any UPI app</p>
            </div>
          </div>
        </label>
        
        <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-indigo-50 transition-colors">
          <input 
            type="radio" 
            name="payment" 
            value="cod" 
            checked={paymentMethod === 'cod'} 
            onChange={() => setPaymentMethod('cod')}
            className="h-5 w-5 text-indigo-600"
          />
          <div className="ml-3">
            <p className="font-medium">Cash on Delivery</p>
            <p className="text-sm text-gray-500">Pay when you receive</p>
          </div>
        </label>

        <label 
          className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-indigo-50 transition-colors"
          onClick={handleQRPayment}
        >
          <input 
            type="radio" 
            name="payment" 
            value="qr" 
            checked={paymentMethod === 'qr'} 
            className="h-5 w-5 text-indigo-600"
            onChange={() => {}}
          />
          <div className="ml-3 flex items-center">
            <QrCode className="mr-2 text-indigo-600" size={20} />
            <div>
              <p className="font-medium">Scan QR Code</p>
              <p className="text-sm text-gray-500">Pay using QR code</p>
            </div>
          </div>
        </label>
      </div>

      <QRCodeModal 
        isOpen={showQRModal}
        onClose={() => setShowQRModal(false)}
        amount={calculateTotals().total}
      />
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600"></div>
        <p className="mt-4 text-gray-600">Preparing your checkout...</p>
      </div>
    );
  }

  const totals = calculateTotals();

  // Progress tracker
  const CheckoutProgress = () => (
    <div className="mb-8">
      <div className="flex justify-between items-center max-w-2xl mx-auto">
        <div className="flex flex-col items-center">
          <div className={`h-10 w-10 rounded-full flex items-center justify-center ${checkoutStep === 'review' || checkoutStep === 'payment' || checkoutStep === 'confirmation' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}>
            <ShoppingBag size={18} />
          </div>
          <span className="text-sm mt-1 font-medium">Review</span>
        </div>
        
        <div className="flex-1 h-1 mx-2 bg-gray-200">
          <div className={`h-full ${checkoutStep === 'payment' || checkoutStep === 'confirmation' ? 'bg-indigo-600' : 'bg-gray-200'}`} style={{ width: '100%' }}></div>
        </div>
        
        <div className="flex flex-col items-center">
          <div className={`h-10 w-10 rounded-full flex items-center justify-center ${checkoutStep === 'payment' || checkoutStep === 'confirmation' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}>
            <CreditCard size={18} />
          </div>
          <span className="text-sm mt-1 font-medium">Payment</span>
        </div>
        
        <div className="flex-1 h-1 mx-2 bg-gray-200">
          <div className={`h-full ${checkoutStep === 'confirmation' ? 'bg-indigo-600' : 'bg-gray-200'}`} style={{ width: '100%' }}></div>
        </div>
        
        <div className="flex flex-col items-center">
          <div className={`h-10 w-10 rounded-full flex items-center justify-center ${checkoutStep === 'confirmation' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}>
            <Truck size={18} />
          </div>
          <span className="text-sm mt-1 font-medium">Confirmation</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        <button 
          onClick={() => navigate('/home')} 
          className="flex items-center text-indigo-600 mb-6 transition-colors hover:text-indigo-800"
        >
          <ArrowLeft size={16} className="mr-1" />
          Back to shopping
        </button>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Checkout</h1>
        <CheckoutProgress />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cart Items Section */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-6 border-b">
                <h2 className="text-xl font-bold flex items-center">
                  <ShoppingBag className="mr-2 text-indigo-600" size={20} />
                  Order Summary ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})
                </h2>
              </div>
              <div className="divide-y">
                {cartItems.map((item) => (
                  <div key={item._id} className="flex items-center p-4 hover:bg-gray-50">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img 
                        src={item.imageUrl} 
                        alt={item.productName}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>{item.productName}</h3>
                          <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">Quantity: {item.quantity}</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">Price: ${item.price.toFixed(2)} each</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Address Section */}
            <div className="bg-white rounded-lg shadow overflow-hidden mt-6">
              <div className="p-6 border-b">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold flex items-center">
                    <MapPin className="mr-2 text-indigo-600" size={20} />
                    Delivery Address
                  </h2>
                  <button
                    onClick={() => navigate('/select-address')}
                    className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center"
                  >
                    Change
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
              {selectedAddress ? (
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-medium">
                      {selectedAddress.type || 'Home'}
                    </span>
                    {selectedAddress.isDefault && (
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                        Default
                      </span>
                    )}
                  </div>
                  <div className="border-l-4 border-indigo-500 pl-4">
                    <p className="font-medium text-lg text-gray-900">{selectedAddress.name}</p>
                    <p className="text-gray-700 mt-1">{selectedAddress.street}</p>
                    <p className="text-gray-700">
                      {selectedAddress.city}, {selectedAddress.state} {selectedAddress.zipCode}
                    </p>
                    <p className="text-gray-700">{selectedAddress.country}</p>
                    <p className="mt-2 text-gray-700 flex items-center">
                      <span className="inline-block w-4 h-4 bg-indigo-100 text-indigo-800 rounded-full mr-2 text-center text-xs">
                        ✓
                      </span>
                      Phone: {selectedAddress.phone}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center p-10 border-2 border-dashed border-gray-300 rounded-lg m-6">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500 mb-2">No delivery address selected</p>
                  <button
                    onClick={() => navigate('/select-address')}
                    className="mt-2 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Select an Address
                  </button>
                </div>
              )}
            </div>

            {/* Payment Method Section */}
            {checkoutStep === 'payment' && <PaymentMethodSelector />}
          </div>

          {/* Order Total Section */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow overflow-hidden sticky top-6">
              <div className="p-6 border-b">
                <h2 className="text-xl font-bold">Order Total</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${totals.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>${totals.shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax (10%)</span>
                    <span>${totals.tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between font-bold text-lg text-gray-900">
                      <span>Total</span>
                      <span>${totals.total.toFixed(2)}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Including VAT</p>
                  </div>
                </div>
                
                {checkoutStep === 'review' && (
                  <button
                    onClick={() => setCheckoutStep('payment')}
                    disabled={!selectedAddress}
                    className={`w-full py-3 px-4 rounded-lg mt-6 transition-colors flex items-center justify-center ${
                      !selectedAddress
                        ? 'bg-gray-300 cursor-not-allowed'
                        : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    }`}
                  >
                    Continue to Payment
                    <ChevronRight size={18} className="ml-1" />
                  </button>
                )}
                
                {checkoutStep === 'payment' && (
                  <button
                    onClick={handlePlaceOrder}
                    disabled={!selectedAddress}
                    className="w-full py-3 px-4 rounded-lg mt-6 bg-indigo-600 hover:bg-indigo-700 text-white transition-colors flex items-center justify-center"
                  >
                    Place Order
                    <ChevronRight size={18} className="ml-1" />
                  </button>
                )}
                
                <div className="mt-6">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-8 h-5 bg-gray-200 rounded"></div>
                    <div className="w-8 h-5 bg-gray-200 rounded"></div>
                    <div className="w-8 h-5 bg-gray-200 rounded"></div>
                    <div className="w-8 h-5 bg-gray-200 rounded"></div>
                  </div>
                  <p className="text-xs text-center text-gray-500 mt-2">Secure payment processing</p>
                </div>
              </div>
            </div>
            
            {/* Order Benefits */}
            <div className="bg-white rounded-lg shadow mt-6 p-4">
              <h3 className="font-medium text-gray-900 mb-2">Why Shop With Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 text-green-600">✓</span>
                  Free shipping on orders over $50
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 text-green-600">✓</span>
                  30-day money-back guarantee
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 text-green-600">✓</span>
                  Secure payment processing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;