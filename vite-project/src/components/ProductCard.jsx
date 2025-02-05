import React from 'react';

const ProductCard = ({ name, productName, productDescription, price, image, imageUrl }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <img src={image || imageUrl} alt={name || productName} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-lg font-semibold mt-2">{name || productName}</h2>
      <p className="text-gray-400 mt-1">{productDescription}</p>
      <p className="text-gray-400 mt-1">${price}</p>
    </div>
  );
};

export default ProductCard;