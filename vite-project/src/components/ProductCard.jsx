import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = (props) => {
  // destructuring both id and _id from props in case the backend sends _id
  const { id, _id, name, productName, productDescription, price, image, imageUrl } = props;
  const navigate = useNavigate();
  const productId = id || _id; // fallback to _id if id prop is undefined

  const handleEdit = () => {
    // Navigate to the update page using the product's ObjectId
    navigate(`/update/${productId}`);
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
    </div>
  );
};

export default ProductCard;