import React from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">E-Commerce</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">Shop</a></li>
            <li><a href="#" className="hover:text-gray-400">About</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-gray-400 flex items-center">
            <FaUser size={20} className="mr-1" /> Login
          </a>
          <a href="#" className="hover:text-gray-400 flex items-center">
            <FaShoppingCart size={20} className="mr-1" /> Cart
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;