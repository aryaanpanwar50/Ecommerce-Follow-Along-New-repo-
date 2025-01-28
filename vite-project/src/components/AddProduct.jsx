import { useState } from 'react';

export default function AddProduct() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-xl w-full max-w-4xl border border-gray-800">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-100 text-center">Add New Product</h2>
          <p className="text-center text-gray-400 mt-2">Fill in the details below to add a new product</p>
        </div>

        <form>
          <div className="grid gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Product Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                placeholder="Enter product name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Product Description
              </label>
              <textarea
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                placeholder="Enter product description"
                rows="4"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Product Category
              </label>
              <select
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
              >
                <option value="">Select category</option>
                <option value="clothing">Clothing</option>
                <option value="electronics">Electronics</option>
                <option value="furniture">Furniture</option>
                <option value="toys">Toys</option>
                <option value="books">Books</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Product Image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-700 border-dashed rounded-lg bg-gray-800">
                <div className="space-y-2 text-center">
                  <div className="text-gray-300">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="relative cursor-pointer"
                    />
                  </div>
                  <p className="text-xs text-gray-400">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
              {image && (
                <div className="mt-4">
                  <img
                    src={image}
                    alt="Product preview"
                    className="w-full h-64 object-cover rounded-lg border border-gray-700"
                  />
                </div>
              )}
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                className="w-full py-3 px-4 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors duration-200 border border-gray-700"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 font-medium"
              >
                Add Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}