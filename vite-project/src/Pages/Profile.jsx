import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { User, Mail, MapPin, Plus, Palette } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const themes = {
  emerald: {
    primary: 'bg-emerald-500',
    light: 'bg-emerald-100',
    text: 'text-emerald-600',
    hover: 'hover:bg-emerald-600',
    border: 'border-emerald-100'
  },
  purple: {
    primary: 'bg-purple-500',
    light: 'bg-purple-100',
    text: 'text-purple-600',
    hover: 'hover:bg-purple-600',
    border: 'border-purple-100'
  },
  amber: {
    primary: 'bg-amber-500',
    light: 'bg-amber-100',
    text: 'text-amber-600',
    hover: 'hover:bg-amber-600',
    border: 'border-amber-100'
  },
  rose: {
    primary: 'bg-rose-500',
    light: 'bg-rose-100',
    text: 'text-rose-600',
    hover: 'hover:bg-rose-600',
    border: 'border-rose-100'
  }
};

const ProfileDisplay = () => {
  const navigate = useNavigate();
  const [currentTheme, setCurrentTheme] = useState('emerald');
  const [profile, setProfile] = useState({});
  const [newAddress, setNewAddress] = useState('');
  const userEmail = useSelector((state) => state.user.email);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
          return;
        }


        const response = await axios.get('http://localhost:5050/api/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        setProfile(response.data);
      } catch (error) {
        console.error(error.message);
        toast.error('Error loading profile');
      }
    };
    fetchData();
  }, []); // This will run once when component mounts

  const handleAddAddress = () => {
    navigate('/add-address');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto space-y-6"
      >
        {/* Theme Selector */}
        <div className="flex justify-center space-x-2 mb-6">
          {Object.keys(themes).map((theme) => (
            <motion.button
              key={theme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentTheme(theme)}
              className={`w-8 h-8 rounded-full ${themes[theme].primary} ${
                currentTheme === theme ? 'ring-2 ring-offset-2 ring-gray-400' : ''
              }`}
            />
          ))}
        </div>

        {/* Profile Photo Section */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-xl shadow-lg p-6 text-center"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="relative mx-auto"
          >
            <img
              src={profile.photoUrl}
              alt="Profile"
              className={`w-32 h-32 rounded-full mx-auto border-4 ${themes[currentTheme].border}`}
            />
            <motion.div 
              className={`absolute bottom-0 right-0 ${themes[currentTheme].primary} rounded-full p-2`}
              whileHover={{ scale: 1.1 }}
            >
              <Plus className="w-4 h-4 text-white" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Profile Info Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-6 space-y-4">
            <motion.div 
              whileHover={{ x: 10 }}
              className="flex items-center space-x-4"
            >
              <div className={`p-2 ${themes[currentTheme].light} rounded-lg`}>
                <User className={`w-5 h-5 ${themes[currentTheme].text}`} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="font-medium">{profile.username}</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ x: 10 }}
              className="flex items-center space-x-4"
            >
              <div className={`p-2 ${themes[currentTheme].light} rounded-lg`}>
                <Mail className={`w-5 h-5 ${themes[currentTheme].text}`} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{userEmail || profile.email}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Address Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg"
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className={`p-2 ${themes[currentTheme].light} rounded-lg`}>
                  <MapPin className={`w-5 h-5 ${themes[currentTheme].text}`} />
                </div>
                <h3 className="font-medium">Address</h3>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAddAddress}
                className={`px-4 py-2 ${themes[currentTheme].primary} text-white rounded-lg flex items-center space-x-2 text-sm ${themes[currentTheme].hover} transition-colors`}
              >
                <Plus className="w-4 h-4" />
                <span>Add Address</span>
              </motion.button>
            </div>
            <motion.div 
              whileHover={{ x: 10 }}
              className="bg-gray-50 p-4 rounded-lg"
            >
              <p className="text-gray-600">{profile.address || "No address found"}</p>
            </motion.div>
            
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProfileDisplay;