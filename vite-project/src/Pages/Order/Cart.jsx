import { useEffect, useState } from "react";
import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Cookies from 'js-cookie';

const Cart = (props) => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const {
    id,
    _id,
    name,
    productName,
    productDescription,
    price,
    image,
    imageUrl,
  } = props;

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const token = Cookies.get('token');
      if (!token) {
        toast.error('Please login to view cart',{
          autoClose: 2000,
        });
        navigate('/login');
        return;
      }
      
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND}/api/cart/getCart`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      setCartItems(response.data);
    } catch (error) {
      toast.error("Failed to fetch cart items");
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const token = Cookies.get('token');
      await axios.delete(
        `${import.meta.env.VITE_BACKEND}/api/cart/deleteCart/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      const updatedCart = cartItems.filter((item) => item._id !== productId);
      setCartItems(updatedCart);
    } catch (error) {
      toast.error("Failed to remove the product from cart", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.error("Failed to remove the product from cart:", error);
    }
  };

  const updateQuantity = async (productId, change) => {
    try {
      const token = Cookies.get('token');
      const updatedCart = cartItems.map((item) => {
        if (item._id === productId) {
          const newQuantity = item.quantity + change;
          if (newQuantity > 0) {
            return { ...item, quantity: newQuantity };
          }
        }
        return item;
      }).filter((item) => item.quantity > 0);

      // Find the item being updated
      const updatedItem = updatedCart.find(item => item._id === productId);
      
      if (updatedItem) {
        // Make API call to update quantity in backend
        await axios.put(
          `${import.meta.env.VITE_BACKEND}/api/cart/updateQuantity/${productId}`,
          { quantity: updatedItem.quantity },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        setCartItems(updatedCart);
      } else {
        // If quantity would be 0, remove item from cart
        await removeFromCart(productId);
      }
    } catch (error) {
      toast.error("Failed to update quantity", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.error("Error updating quantity:", error);
    }
  };

  const handlePlaceOrder = async () => {
    try {
      const token = Cookies.get('token');
      if (!token) {
        toast.error('Please login to place order');
        return;
      }

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND}/api/orders/create`,
        {
          products: cartItems.map(item => ({
            productId: item._id,
            quantity: item.quantity,
            productName: item.productName,
            price: item.price,
            imageUrl: item.imageUrl
          }))
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (response.status === 201) {
        // Clear cart in the database
        // await axios.delete('http://localhost:5050/api/cart/clearCart', {
        //   headers: {
        //     Authorization: `Bearer ${token}`
        //   }
        // });
        toast.success('Order placed successfully!',{
          onClose:()=>{
            navigate('/select-address')
          }
        });
        setCartItems([]);
      }
    } catch (error) {
      toast.error('Failed to place order')
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                <ShoppingCart className="w-8 h-8" />
                Shopping Cart
              </h2>
              <span className="text-white bg-white/20 px-4 py-2 rounded-lg">
                {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
              </span>
            </div>
          </div>

          {/* Cart Content */}
          <div className="p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 px-4">
                <div className="bg-gray-50 rounded-2xl p-8 max-w-md mx-auto">
                  <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-xl text-gray-600 font-medium">
                    Your cart is empty
                  </p>
                  <p className="text-gray-400 mt-2">
                    Add some items to get started!
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item._id}
                    className="group bg-white rounded-xl border border-gray-100 p-4 hover:shadow-lg transition-all duration-300 ease-in-out"
                  >
                    <div className="flex items-center gap-6">
                      <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                        <img
                          src={item.imageUrl || "/api/placeholder/96/96"}
                          alt={item.productName}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-200">
                            {item.productName}
                          </h3>
                          <button
                            onClick={() => removeFromCart(item._id)}
                            className="text-gray-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-lg transition-all duration-200"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>

                        <p className="text-purple-600 font-medium text-lg">
                          ${item.price.toFixed(2)}
                        </p>

                        <div className="flex items-center mt-4">
                          <div className="inline-flex items-center bg-gray-50 rounded-xl border border-gray-200">
                            <button
                              onClick={() => updateQuantity(item._id, -1)}
                              className="p-2 hover:bg-gray-100 rounded-l-xl transition-colors duration-200"
                            >
                              <Minus className="w-4 h-4 text-gray-600" />
                            </button>
                            <span className="w-12 text-center font-medium text-gray-700">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item._id, 1)}
                              className="p-2 hover:bg-gray-100 rounded-r-xl transition-colors duration-200"
                            >
                              <Plus className="w-4 h-4 text-gray-600" />
                            </button>
                          </div>

                          <div className="ml-auto text-right">
                            <p className="text-sm text-gray-500">Subtotal</p>
                            <p className="text-lg font-semibold text-gray-800">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Total Section */}
                <div className="mt-8 border-t border-gray-100 pt-8">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-gray-400">Total Amount</p>
                        <p className="text-3xl font-bold text-white mt-1">
                          ${calculateTotal().toFixed(2)}
                        </p>
                      </div>
                      <button 
                        onClick={handlePlaceOrder}
                        className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Cart;
