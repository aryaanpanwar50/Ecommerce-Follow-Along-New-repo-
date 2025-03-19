import { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";

function MyOrder() {
  const [orderItems, setOrderItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('token');
        const orderResponse = await axios.get('http://localhost:5050/api/orders/getOrders', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setOrderItems(orderResponse.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching orders:', error);
        toast.error('Failed to load order information');
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <>
      {loading ? (
        <div className="text-center p-4">Loading...</div>
      ) : orderItems.length === 0 ? (
        <div className="text-center p-4">No items in order</div>
      ) : (
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold flex items-center">
                <ShoppingBag className="mr-2 text-indigo-600" size={20} />
                Order Summary ({orderItems.length} {orderItems.length === 1 ? 'item' : 'items'})
              </h2>
            </div>
            <div className="divide-y">
              {orderItems.map((item) => (
                <div key={item._id} className="flex items-center p-4 hover:bg-gray-50">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={item.imageUrl}
                      alt={item.productName}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>{item.productName}</h3>
                        <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <p className="text-gray-500">Price: ${item.price.toFixed(2)} each</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MyOrder;