import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Plus, Edit, Trash2, Check } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'; // Fix import
import axios from 'axios';
import { toast } from 'react-hot-toast'; // Add toast for notifications
import Cookies from 'js-cookie';

// Add cookie helper function
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

const SelectAddress = () => {
  const navigate = useNavigate();
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  // Update axios configuration to use cookie
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, []);

  // Fetch addresses when component mounts
  useEffect(() => {
    fetchAddresses();
  }, []);

  const fetchAddresses = async () => {
    try {
      setLoading(true);
      const token = Cookies.get('token');
      if (!token) {
        throw new Error('No auth token found');
      }

      const response = await axios.get(`${import.meta.env.VITE_BACKEND}/api/addresses/my-addresses`);
      setAddresses(response.data);
      setError(null);
    } catch (err) {
      if (err.response?.status === 401) {
        toast.error('Please login to view addresses');
        navigate('/login'); // Redirect to login if unauthorized
      } else {
        setError('Failed to fetch addresses');
        toast.error('Failed to fetch addresses');
      }
      console.error('Error fetching addresses:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch cart items when component mounts
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://localhost:5050/api/cart/getCart');
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart:', error);
        toast.error('Failed to fetch cart items');
      }
    };
    fetchCartItems();
  }, []);

  const handleDeleteAddress = async (addressId) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND}/api/addresses/${addressId}`);
      await fetchAddresses(); // Refresh the list after deletion
      toast.success('Address deleted successfully');
    } catch (err) {
      if (err.response?.status === 401) {
        toast.error('Please login again');
        navigate('/login');
      } else {
        toast.error('Failed to delete address');
      }
      console.error('Error deleting address:', err);
    }
  };

  const handleConfirmAddress = () => {
    const selectedAddressData = addresses.find(addr => addr._id === selectedAddress);
    if (selectedAddressData) {
      navigate('/checkout-page', {
        state: {
          selectedAddress: selectedAddressData
        }
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-pink-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-600 text-xl">{error}</div>
      </div>
    );
  }

  // Replace color scheme to match the theme
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center p-6"
    >
      <motion.div 
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-full max-w-3xl"
      >
        {/* Header Section */}
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4 flex items-center justify-center">
            <MapPin className="mr-4 text-pink-600" size={40} />
            Select Delivery Address
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Choose the address where you want your package to be delivered. You can manage and edit your addresses below.
          </p>
        </motion.div>

        {/* Address List */}
        <AnimatePresence>
          <motion.div 
            layout 
            className="space-y-6"
          >
            {addresses.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                No addresses found. Please add an address.
              </div>
            ) : (
              addresses.map((address) => (
                <motion.div 
                  key={address._id}
                  layout
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 30 
                  }}
                  className={`
                    transform transition-all duration-300 ease-in-out
                    border-2 rounded-2xl p-6 flex items-center space-x-6
                    hover:shadow-2xl hover:scale-[1.02]
                    ${selectedAddress === address._id 
                      ? 'border-pink-500 bg-pink-50/50 shadow-xl' 
                      : 'border-gray-200 bg-white hover:border-pink-300'}
                  `}
                  onClick={() => setSelectedAddress(address._id)}
                >
                  {/* Selection Indicator */}
                  <motion.div 
                    animate={{
                      scale: selectedAddress === address._id ? [1, 1.2, 1] : 1,
                      rotate: selectedAddress === address._id ? [0, 10, -10, 0] : 0
                    }}
                    className={`
                      w-8 h-8 rounded-full border-2 flex items-center justify-center
                      ${selectedAddress === address._id 
                        ? 'bg-pink-600 border-pink-600' 
                        : 'border-gray-300'}
                    `}
                  >
                    {selectedAddress === address._id && (
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Check className="text-white" size={16} />
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Address Details */}
                  <div className="flex-grow">
                    <div className="flex items-center mb-2">
                      <motion.span 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className={`
                          px-2 py-1 rounded-full text-xs mr-3
                          ${address.type === 'Home' 
                            ? 'bg-pink-100 text-pink-800'
                            : address.type === 'Work'
                            ? 'bg-purple-100 text-purple-800'
                            : 'bg-gray-100 text-gray-800'}
                        `}
                      >
                        {address.type}
                      </motion.span>
                      {address.isDefault && (
                        <motion.span 
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full"
                        >
                          Default
                        </motion.span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{address.name}</h3>
                    <p className="text-gray-600">
                      {address.street}, {address.city}, {address.state} {address.zipCode}
                    </p>
                    <p className="text-gray-500 text-sm">{address.phone}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-full hover:bg-pink-100 text-pink-600 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Edit address logic
                      }}
                    >
                      <Edit size={20} />
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-full hover:bg-red-100 text-red-600 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteAddress(address._id);
                      }}
                    >
                      <Trash2 size={20} />
                    </motion.button>
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>
        </AnimatePresence>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex justify-between items-center"
        >
          <Link to="/add-address-cart">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-6 py-3 bg-white border-2 border-pink-500 text-pink-600 rounded-full font-semibold hover:bg-pink-50 transition-colors"
            >
              <Plus className="mr-2" size={20} />
              Add Address
            </motion.button>
          </Link>
          <motion.button 
            whileHover={{ scale: selectedAddress ? 1.05 : 1 }}
            whileTap={{ scale: selectedAddress ? 0.95 : 1 }}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300
              ${selectedAddress 
                ? 'bg-pink-600 text-white hover:bg-pink-700 shadow-lg hover:shadow-xl' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
            disabled={!selectedAddress}
            onClick={handleConfirmAddress}
          >
            Confirm Delivery Address
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SelectAddress;