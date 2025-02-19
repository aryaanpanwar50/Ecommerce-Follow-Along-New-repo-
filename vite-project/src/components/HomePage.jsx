import ProductCard from "./ProductCard";
import { useEffect, useState } from 'react';
import axios from 'axios';

const Homepage = () => {
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5050/api/products/get');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Header Section */}
      <div className="w-full bg-gradient-to-r from-purple-600 to-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Featured Products
          </h1>
          <p className="text-white/80 text-center text-lg max-w-2xl mx-auto">
            Discover our curated collection of premium products
          </p>
        </div>
      </div>

      {/* Products Grid Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-black/40 backdrop-blur-sm rounded-3xl border border-gray-800 shadow-2xl p-8">
          {products.length === 0 ? (
            <div className="text-center py-20">
              <div className="animate-pulse space-y-4">
                <div className="h-6 w-48 bg-gray-800 rounded mx-auto"></div>
                <div className="h-4 w-32 bg-gray-800 rounded mx-auto"></div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
