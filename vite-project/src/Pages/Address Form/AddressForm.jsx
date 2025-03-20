import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const AddressForm = () => {
  const navigate = useNavigate();
  const [addressData, setAddressData] = useState({
    country: "",
    city: "",
    address1: "",
    address2: "",
    zipCode: "",
    addressType: "home", // default value
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const formattedAddress = `${addressData.address1}, ${
        addressData.address2 ? addressData.address2 + ", " : ""
      }${addressData.city}, ${addressData.country}, ${addressData.zipCode} (${
        addressData.addressType
      })`;

      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND}/api/profile/address`,
        { address: formattedAddress },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.user) {
        toast.success("Address updated successfully");
        navigate("/profile");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error updating address");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Add New Address
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Country
            </label>
            <input
              type="text"
              name="country"
              value={addressData.country}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              name="city"
              value={addressData.city}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address Line 1
            </label>
            <input
              type="text"
              name="address1"
              value={addressData.address1}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address Line 2 (Optional)
            </label>
            <input
              type="text"
              name="address2"
              value={addressData.address2}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ZIP Code
            </label>
            <input
              type="text"
              name="zipCode"
              value={addressData.zipCode}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address Type
            </label>
            <select
              name="addressType"
              value={addressData.addressType}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-500"
            >
              <option value="home">Home</option>
              <option value="work">Work</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              className="flex-1 bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors"
            >
              Save Address
            </button>
            <button
              type="button"
              onClick={() => navigate("/profile")}
              className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressForm;
