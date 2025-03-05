import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const CheckoutConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems, selectedAddress } = location.state || {};
  
  const calculateTotal = () => {
    return cartItems?.reduce((total, item) => total + (item.price * item.quantity), 0) || 0;
  };

  const handlePlaceOrder = async () => {
    try {
      // Here you can add API call to place the order
      toast.success('Order placed successfully!');
      navigate('/home');
    } catch (error) {
      console.error('Error placing order:', error);
      toast.error('Failed to place order');
    }
  };

  if (!cartItems || !selectedAddress) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">No order details found</h1>
        <button
          onClick={() => navigate('/cart')}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Return to Cart
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Confirm Your Order</h1>
      
      {/* Order Items */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Order Items</h2>
        {cartItems.map((item) => (
          <div key={item._id} className="flex items-center border-b py-4">
            <img 
              src={item.imageUrl} 
              alt={item.productName} 
              className="w-20 h-20 object-cover rounded"
            />
            <div className="ml-4 flex-grow">
              <h3 className="font-medium">{item.productName}</h3>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
              <p className="text-gray-800">₹{item.price} per item</p>
            </div>
            <div className="text-right">
              <p className="font-bold">₹{item.price * item.quantity}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Delivery Address */}
      <div className="mb-8 bg-gray-50 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>
        <div className="border p-4 rounded bg-white">
          <p className="font-medium">{selectedAddress.name}</p>
          <p>{selectedAddress.street}</p>
          <p>{selectedAddress.city}, {selectedAddress.state} {selectedAddress.zipCode}</p>
          <p className="text-gray-600">{selectedAddress.phone}</p>
        </div>
      </div>

      {/* Order Summary */}
      <div className="mb-8 bg-gray-50 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>₹{calculateTotal()}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between border-t pt-2 font-bold">
            <span>Total:</span>
            <span>₹{calculateTotal()}</span>
          </div>
        </div>
      </div>

      {/* Place Order Button */}
      <button
        onClick={handlePlaceOrder}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
      >
        Place Order
      </button>
    </div>
  );
};

export default CheckoutConfirmation;
