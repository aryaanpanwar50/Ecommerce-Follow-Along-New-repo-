// import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-semibold mb-4 text-white">Shop</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Sale</a></li>
            <li><a href="#" className="hover:text-white">New Arrivals</a></li>
            <li><a href="#" className="hover:text-white">Best Sellers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white">Customer Service</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">Shipping</a></li>
            <li><a href="#" className="hover:text-white">Returns</a></li>
            <li><a href="#" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white">Socials</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook size={22} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram size={22} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter size={22} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
        © 2025 Your Company. All rights reserved.
      </div>
    </footer>
  );
}