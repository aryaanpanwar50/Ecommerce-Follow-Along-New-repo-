import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = (props) => {
  // destructuring both id and _id from props in case the backend sends _id
  const { id, _id, name, productName, productDescription, price, image, imageUrl } = props;
  const navigate = useNavigate();
  const productId = id || _id; // fallback to _id if id prop is undefined

  const handleEdit = () => {
    // Navigate to the update page using the product's ObjectId
    navigate(`/update/${productId}`);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5050/api/products/delete/${productId}`);
      
      await new Promise((resolve) => {
        toast.success('Product deleted successfully', {
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

      // Reload the page after the toast is closed
      window.location.reload();
    } catch (error) {
      toast.error("Failed to delete the product", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.error("Failed to delete the product:", error);
    }
  };

  const handleAddToCart = async() => {
    try{
      const cartItem = {
        productName,
        price,
        image,
        imageUrl,
        quantity: 1
      }
      await axios.post(`http://localhost:5050/api/cart/addCart`,cartItem);

      toast.success('Product added to cart', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

    }catch(error){
      console.error('Error adding product to cart:', error);
    toast.error('Failed to add product to cart', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    }
  };

  return (
    <div className="group bg-gradient-to-b from-gray-900 to-black rounded-2xl border border-gray-800 overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image || imageUrl}
          alt={name || productName}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        <h2 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-200">
          {name || productName}
        </h2>
        <p className="text-gray-400 text-sm line-clamp-2">
          {productDescription}
        </p>
        <div className="flex items-center justify-between pt-4">
          <span className="text-2xl font-bold text-white">
            ${price.toFixed(2)}
          </span>
          <button
            onClick={handleAddToCart}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
          >
            Add to Cart
          </button>
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={handleEdit}
            className="bg-[#A158F7] hover:bg-[#355CEB] focus:bg-[#417FF6] text-[#111827] px-4 py-2 rounded"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-700 focus:bg-red-800 text-white px-4 py-2 rounded ml-2"
          >
            Delete
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductCard;