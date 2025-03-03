import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { CircleUserRound } from 'lucide-react';;

const Header = () => {
  return (
    <header className="bg-zinc-950 text-white py-4 shadow-md border-b border-zinc-800">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          E-Commerce
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-purple-500">Home</Link></li>
            <li><Link to="#" className="hover:text-purple-500">My-products</Link></li>
            <li><Link to="/add-product" className="hover:text-purple-500">Add Product</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Link to="/profile" className="hover:text-purple-500 flex items-center">
          <CircleUserRound /> Profile 
          </Link>
          <Link to="/cart" className="hover:text-purple-500 flex items-center">
            <FaShoppingCart size={20} className="mr-1" /> Cart
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;