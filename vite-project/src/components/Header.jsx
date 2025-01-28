
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">E-Commerce</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link to="#" className="hover:text-gray-400">Shop</Link></li>
            <li><Link to="#" className="hover:text-gray-400">About</Link></li>
            <li><Link to="#" className="hover:text-gray-400">Contact</Link></li>
            <li><Link to="/add-product" className="hover:text-gray-400">Add Product</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Link to="/login" className="hover:text-gray-400 flex items-center">
            <FaUser size={20} className="mr-1" /> Login
          </Link>
          <Link to="/cart" className="hover:text-gray-400 flex items-center">
            <FaShoppingCart size={20} className="mr-1" /> Cart
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;