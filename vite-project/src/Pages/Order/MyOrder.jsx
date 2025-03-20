import { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from 'universal-cookie';
import {useNavigate } from 'react-router-dom'
 
function MyOrder() {
  const [orderItems, setOrderItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [disabledButtons, setDisabledButtons] = useState(new Set());
  const [cancelingOrders, setCancelingOrders] = useState(new Set());
  const cookies = new Cookies();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = cookies.get('token');
        if (!token) {
          toast.error('Please login to view my cart',{
            autoClose: 2000,
          });
          navigate('/login');
        }
        const orderResponse = await axios.get(`${import.meta.env.VITE_BACKEND}/api/orders/getOrders`, {
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

  const handleCancelOrder = async (orderId) => {
    try {
      setDisabledButtons(prev => new Set([...prev, orderId]));
      setCancelingOrders(prev => new Set([...prev, orderId]));
      const token = cookies.get('token');
      const response = await axios.put(`${import.meta.env.VITE_BACKEND}/api/orders/cancel/${orderId}`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      if (response.data.success) {
        setTimeout(() => {
          setOrderItems(orderItems.map(item => 
            item._id === orderId ? { ...item, status: 'canceled' } : item
          ));
          setCancelingOrders(prev => {
            const newSet = new Set(prev);
            newSet.delete(orderId);
            return newSet;
          });
          setDisabledButtons(prev => {
            const newSet = new Set(prev);
            newSet.delete(orderId);
            return newSet;
          });
          toast.success('Order canceled successfully');
        }, 2000);
      }
    } catch (error) {
      console.error('Error canceling order:', error);
      toast.error('Failed to cancel order');
      setCancelingOrders(prev => {
        const newSet = new Set(prev);
        newSet.delete(orderId);
        return newSet;
      });
      setDisabledButtons(prev => {
        const newSet = new Set(prev);
        newSet.delete(orderId);
        return newSet;
      });
    }
  };

  const handleDeleteOrder = async (orderId) => {
    try {
      setDisabledButtons(prev => new Set([...prev, orderId]));
      const token = cookies.get('token');
      const response = await axios.delete(`${import.meta.env.VITE_BACKEND}/api/orders/delete/${orderId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      if (response.data.success) {
        setOrderItems(orderItems.filter(item => item._id !== orderId));
        toast.success('Order deleted successfully');
      }
    } catch (error) {
      console.error('Error deleting order:', error);
      toast.error('Failed to delete order');
      setDisabledButtons(prev => {
        const newSet = new Set(prev);
        newSet.delete(orderId);
        return newSet;
      });
    }
  };

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
                      <p className="mt-1 text-sm text-gray-500">Status: {item.status}</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <p className="text-gray-500">Price: ${item.price.toFixed(2)} each</p>
                      {item.status === 'canceled' ? (
                        <div className="flex gap-2">
                          <span className="text-red-600">Canceled</span>
                          <button
                            onClick={() => handleDeleteOrder(item._id)}
                            disabled={disabledButtons.has(item._id)}
                            className={`px-4 py-2 rounded ${
                              disabledButtons.has(item._id)
                                ? 'bg-gray-400 cursor-not-allowed text-gray-100'
                                : 'bg-red-800 hover:bg-red-900 text-white'
                            }`}
                          >
                            {disabledButtons.has(item._id) ? 'Deleting...' : 'Delete Order'}
                          </button>
                        </div>
                      ) : cancelingOrders.has(item._id) ? (
                        <div className="flex items-center gap-2">
                          <span className="text-yellow-600">Canceling...</span>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleCancelOrder(item._id)}
                          disabled={disabledButtons.has(item._id)}
                          className={`px-4 py-2 rounded ${
                            disabledButtons.has(item._id)
                              ? 'bg-gray-400 cursor-not-allowed text-gray-100'
                              : 'bg-red-600 hover:bg-red-700 text-white'
                          }`}
                        >
                          {disabledButtons.has(item._id) ? 'Canceling...' : 'Cancel Order'}
                        </button>
                      )}
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