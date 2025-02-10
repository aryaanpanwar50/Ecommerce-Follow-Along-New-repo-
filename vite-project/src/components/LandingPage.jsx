import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Premium Headphones",
    price: 199.99,
    description: "High-quality wireless headphones with noise cancellation",
    image: "/api/placeholder/280/200"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 299.99,
    description: "Feature-rich smartwatch with health tracking",
    image: "/api/placeholder/280/200"
  },
  {
    id: 3,
    name: "Wireless Speaker",
    price: 149.99,
    description: "Portable speaker with premium sound quality",
    image: "/api/placeholder/280/200"
  }
];

const EcommerceLanding = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Your Store</h1>
          <div className="flex items-center space-x-6">
            <div className="relative">
              <ShoppingCart className="text-white cursor-pointer" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 to-blue-600 py-20">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-5xl font-bold mb-6">Welcome to Our Store</h2>
          <p className="text-xl mb-8">Discover the best products with exclusive deals</p>
          <button 
            className="bg-white text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            onClick={() => window.scrollTo({ top: document.getElementById('products').offsetTop, behavior: 'smooth' })}
          >
            <Link to="/choice" className="hover:text-purple-500">Shop Now</Link>

          </button>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src={product.image} alt={product.name} className="w-full object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <Heart className="text-gray-400 hover:text-red-500 cursor-pointer transition-colors" size={24} />
                </div>
                <p className="text-gray-400 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">${product.price}</span>
                  <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    onClick={addToCart}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; 2025 Your Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default EcommerceLanding;