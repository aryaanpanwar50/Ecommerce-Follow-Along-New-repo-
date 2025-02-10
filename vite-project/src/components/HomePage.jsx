
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
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 font-['SF_Pro_Display',-apple-system,BlinkMacSystemFont,system-ui,sans-serif]">
      <div className="max-w-7xl w-full">
        <div className="space-y-8 bg-zinc-950 p-10 rounded-2xl border border-zinc-800 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
