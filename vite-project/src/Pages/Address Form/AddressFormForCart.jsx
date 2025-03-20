import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Building, User, Phone, Save } from 'lucide-react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';

const AddressForm = () => {
  const navigate = useNavigate(); 
  const [addressData, setAddressData] = useState({
    type: 'Work',
    name: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddressData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND}/api/addresses`, 
        addressData,
        {
          headers: {
            'Content-Type': 'application/json'
          },
        }
      );

      if (response.data) {
        toast.success("Address added successfully");
        navigate("/choose-address"); // Changed navigation path
      }
    } catch (error) {
      console.error('Error details:', error.response?.data,error.message);
      toast.error(error.response?.data?.message || "Error adding address");
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg"
    >
      <motion.h2 
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="text-2xl font-bold mb-6 text-center flex items-center justify-center"
      >
        <MapPin className="mr-2 text-blue-500" /> Address Details
      </motion.h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Address Type</label>
          <select 
            value={addressData.type} 
            onChange={(e) => setAddressData(prev => ({...prev, type: e.target.value}))}
            className="w-full p-2 border rounded-md"
          >
            <option value="Work">
              Work
            </option>
            <option value="Home">
              Home
            </option>
          </select>
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
          <div className="flex items-center">
            <User className="mr-2 text-gray-400" />
            <input 
              type="text" 
              id="name"
              name="name"
              value={addressData.name}
              onChange={handleInputChange}
              placeholder="Full Name"
              required 
              className="flex-1 p-2 border rounded-md"
            />
          </div>
        </div>

        <div>
          <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
          <div className="flex items-center">
            <MapPin className="mr-2 text-gray-400" />
            <input 
              type="text" 
              id="street"
              name="street"
              value={addressData.street}
              onChange={handleInputChange}
              placeholder="Street Address"
              required 
              className="flex-1 p-2 border rounded-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">City</label>
            <input 
              type="text" 
              id="city"
              name="city"
              value={addressData.city}
              onChange={handleInputChange}
              placeholder="City"
              required 
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">State</label>
            <input 
              type="text" 
              id="state"
              name="state"
              value={addressData.state}
              onChange={handleInputChange}
              placeholder="State"
              required 
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">Zip Code</label>
            <input 
              type="text" 
              id="zipCode"
              name="zipCode"
              value={addressData.zipCode}
              onChange={handleInputChange}
              placeholder="Zip Code"
              required 
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
            <div className="flex items-center">
              <Phone className="mr-2 text-gray-400" />
              <input 
                type="tel" 
                id="phone"
                name="phone"
                value={addressData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                required 
                className="flex-1 p-2 border rounded-md"
              />
            </div>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          type="submit" 
          onClick={handleSubmit}
          className="w-full mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center justify-center"
        >
          <Save className="mr-2" /> Save Address
        </motion.button>
      </form>
    </motion.div>
  );
};

export default AddressForm;