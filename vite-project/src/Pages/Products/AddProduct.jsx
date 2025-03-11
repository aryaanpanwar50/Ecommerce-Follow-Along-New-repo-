import { useEffect, useState } from 'react';
import { ShoppingCart, Plus, Minus, Trash2, Upload, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function AddProduct() {
  const navigate = useNavigate();
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productType, setProductType] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setImageUrl('');
    }
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
    setImage(e.target.value);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setImageUrl('');
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!productName || !productDescription || !productType || !price || (!image && !imageUrl)) {
      setError('All fields are required');
      return;
    }
    setError('');

    try {
      const response = await axios.post('http://localhost:5050/api/products/add', {
        productName,
        productDescription,
        productType,
        price, 
        imageUrl: imageUrl || image
      });
      console.log('Product added:', response.data);
      // Reset form fields
      setProductName('');
      setProductDescription('');
      setProductType('');
      setPrice('');
      setImage(null);
      setImageUrl('');

      setSuccessMessage('Product added successfully!');
      setError('');

      await new Promise((resolve) => {
        toast.success('Product added successfully', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          onClose: resolve
        });
      });

      // Navigate to /home after the toast is closed
      navigate('/home');

      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (error) {
      console.error('Error adding product:', error);
      setError('An error occurred while adding the product');
      toast.error('Failed to add the product', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-8">
      <motion.div 
        initial="initial"
        animate="animate"
        variants={fadeIn}
        className="w-full max-w-4xl"
      >
        <div className="backdrop-blur-xl bg-gray-900/70 p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-800/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Add New Product
            </h2>
            <p className="text-gray-400 mt-4 text-lg">Fill in the details below to add a new product</p>
          </motion.div>
          <form onSubmit={handleSubmit} className="space-y-8">
            <motion.div 
              variants={{
                initial: { opacity: 0 },
                animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
              className="grid gap-8"
            >
              <motion.div variants={fadeIn} className="group">
                <label className="block text-sm font-medium text-gray-300 mb-2 transition-colors group-focus-within:text-purple-400">
                  Product Name
                </label>
                <input
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="w-full px-5 py-4 rounded-xl bg-gray-800/50 border border-gray-700/50 text-gray-100 placeholder-gray-500 
                    focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300
                    backdrop-blur-xl shadow-lg"
                  placeholder="Enter product name"
                  required
                />
              </motion.div>
              <motion.div variants={fadeIn} className="group">
                <label className="block text-sm font-medium text-gray-300 mb-2 transition-colors group-focus-within:text-purple-400">
                  Product Description
                </label>
                <textarea
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                  className="w-full px-5 py-4 rounded-xl bg-gray-800/50 border border-gray-700/50 text-gray-100 
                    placeholder-gray-500 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 
                    transition-all duration-300 backdrop-blur-xl shadow-lg"
                  placeholder="Enter product description"
                  rows="4"
                  required
                ></textarea>
              </motion.div>
              <motion.div variants={fadeIn} className="group">
                <label className="block text-sm font-medium text-gray-300 mb-2 transition-colors group-focus-within:text-purple-400">
                  Product Category
                </label>
                <select
                  value={productType}
                  onChange={(e) => setProductType(e.target.value)}
                  className="w-full px-5 py-4 rounded-xl bg-gray-800/50 border border-gray-700/50 text-gray-100 
                    focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300
                    backdrop-blur-xl shadow-lg appearance-none"
                  required
                >
                  <option value="">Select category</option>
                  <option value="clothing">Clothing</option>
                  <option value="electronics">Electronics</option>
                  <option value="furniture">Furniture</option>
                  <option value="toys">Toys</option>
                  <option value="books">Books</option>
                </select>
              </motion.div>
              <motion.div variants={fadeIn} className="group">
                <label className="block text-sm font-medium text-gray-300 mb-2 transition-colors group-focus-within:text-purple-400">
                  Price
                </label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full px-5 py-4 rounded-xl bg-gray-800/50 border border-gray-700/50 text-gray-100 
                    placeholder-gray-500 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 
                    transition-all duration-300 backdrop-blur-xl shadow-lg"
                  placeholder="Enter product price"
                  required
                />
              </motion.div>
              <motion.div variants={fadeIn} className="space-y-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Upload Image
                </label>
                <motion.div
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  whileHover={{ scale: 1.01 }}
                  className={`relative w-full px-6 py-10 rounded-xl border-2 border-dashed 
                    ${isDragging ? 'border-purple-500 bg-purple-500/10' : 'border-gray-700 bg-gray-800/50'} 
                    transition-all duration-300 group cursor-pointer backdrop-blur-xl`}
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    id="fileInput"
                  />
                  <label htmlFor="fileInput" className="flex flex-col items-center cursor-pointer">
                    <Upload className="w-12 h-12 text-gray-400 group-hover:text-purple-400 transition-colors mb-4" />
                    <span className="text-gray-300 group-hover:text-purple-400 transition-colors">
                      Drag & Drop or Click to Upload
                    </span>
                  </label>
                </motion.div>
                <input
                  type="text"
                  value={imageUrl}
                  onChange={handleImageUrlChange}
                  className="w-full px-5 py-4 rounded-xl bg-gray-800/50 border border-gray-700/50 text-gray-100 
                    placeholder-gray-500 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 
                    transition-all duration-300 backdrop-blur-xl shadow-lg"
                  placeholder="Or paste image URL"
                />
                {image && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative rounded-xl overflow-hidden"
                  >
                    <img src={image} alt="Product" className="w-full h-80 object-cover rounded-xl" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2 text-red-400 text-sm mt-4 bg-red-500/10 p-4 rounded-lg border border-red-500/20"
              >
                <AlertCircle className="w-5 h-5" />
                <p>{error}</p>
              </motion.div>
            )}
            {successMessage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2 text-green-400 text-sm mt-4 bg-green-500/10 p-4 rounded-lg border border-green-500/20"
              >
                <p>{successMessage}</p>
              </motion.div>
            )}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full py-4 px-6 mt-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl
                hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform
                shadow-lg shadow-purple-500/25 font-medium text-lg"
            >
              Add Product
            </motion.button>
          </form>
        </div>
      </motion.div>
      <ToastContainer />
    </div>
  );
}