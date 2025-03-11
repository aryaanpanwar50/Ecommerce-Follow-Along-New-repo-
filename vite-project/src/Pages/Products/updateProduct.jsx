
import  { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const UpdatePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [initialData, setInitialData] = useState({});

  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productType, setProductType] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch product details to pre-fill the form
  useEffect(() => {
    axios
      .get(`/api/products/${id}`)
      .then((response) => {
        const data = response.data;
        setInitialData(data);

        setProductName(data.productName || "");
        setProductDescription(data.productDescription || "");
        setProductType(data.productType || "");
        setPrice(data.price || "");
        setImageUrl(data.imageUrl || "");
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  // Handle file drag over event
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Handle file drop event and set image preview
  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setImage(URL.createObjectURL(file));
    }
  };

  // Handle file input change
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(URL.createObjectURL(file));
    }
  };

  // Handle manual image URL change
  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  // Handle form submit to update the product
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      productName: productName || initialData.productName,
      productDescription: productDescription || initialData.productDescription,
      productType: productType || initialData.productType,
      price: price || initialData.price,
      imageUrl: imageUrl || image || initialData.imageUrl,
    };

    axios
      .put(`http://localhost:5050/api/products/update/${id}`, updatedProduct)
      .then((response) => {
        new Promise((resolve) => {


          toast.success("Product updated successfully", {

            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            onClose: resolve,
          });
        }).then(() => {
          navigate("/home");
        });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500 text-sm mt-4">{error}</p>;

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <ToastContainer />
      <div className="bg-gray-900 p-8 rounded-2xl shadow-xl w-full max-w-4xl border border-gray-800">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-100 text-center">
            Update Product
          </h2>

          <p className="text-center text-gray-400 mt-2">
            Update the details below to modify your product
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Product Name
              </label>
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                placeholder="Enter product name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Product Description
              </label>
              <textarea
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
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
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
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
                Price
              </label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                placeholder="Enter product price"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Upload Image
              </label>
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className="w-full px-4 py-6 rounded-lg bg-gray-800 border border-dashed border-gray-700 text-gray-100 text-center cursor-pointer"
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="fileInput"
                />
                <label htmlFor="fileInput" className="cursor-pointer">
                  Drag & Drop or Click to Upload
                </label>
              </div>
              <input
                type="text"
                value={imageUrl}
                onChange={handleImageUrlChange}
                className="w-full mt-4 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                placeholder="Or paste image URL"
              />
              {(image || imageUrl) && (
                <img
                  src={image || imageUrl}
                  alt="Product"
                  className="mt-4 w-full h-80 object-cover rounded-lg"
                />
              )}
            </div>
          </div>
          {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 px-4 mt-6 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePage;

