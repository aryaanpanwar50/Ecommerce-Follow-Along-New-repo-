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

  const handleAddToCart = () => {
    const product = { id: productId,  productName, productDescription, price, image, imageUrl, quantity: 1 };
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
      cart = cart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      cart.push(product);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
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
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <img
        src={image || imageUrl}
        alt={name || productName}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-2">{name || productName}</h2>
      <p className="text-gray-400 mt-1">{productDescription}</p>
      <p className="text-gray-400 mt-1">${price}</p>
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
      <button
        onClick={handleAddToCart}
        className="bg-green-600 hover:bg-green-700 focus:bg-green-800 text-white px-4 py-2 rounded ml-2"
      >
        Add to Cart
      </button>
      <ToastContainer />
    </div>
  );
};

export default ProductCard;