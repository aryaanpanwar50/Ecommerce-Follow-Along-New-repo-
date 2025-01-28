import React from "react";

const ProductCard = ({ name, price, image }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={image} alt={name} className="w-full h-100 object-cover rounded-md" />
      <h2 className="text-lg font-semibold mt-2">{name}</h2>
      <p className="text-gray-700">Price: ${price}</p>
      <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">Buy Now</button>
    </div>
  );
};

export default ProductCard;
