import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import GoogleAuth from './GoogleAuth';
import image1 from "../assets/image6.webp"

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:5050/api/login', {
        email,
        password
      });

      console.log('API response:', response.data);

      if (response.data) {
        await new Promise((resolve) => {
          toast.success('Login Successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            // transition: Bounce,
            onClose: resolve
            });
        });

        navigate('/home'); // Navigate after the toast is closed
      }
    } catch (err) {
      console.error('Login error:', err); // Log the error for debugging
      if (err.response && err.response.status === 400) {
        if (err.response.data.message === "User not found") {
          // setError("User not found");
          toast.error("User not found", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            // transition: Bounce,
          });
        } else if (err.response.data.message === "Invalid email or password") {
          // setError("Invalid email or password");
          toast.error("Invalid email or password", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            // transition: Bounce,
          });
        } else {
          // setError(err.response.data.message);
          toast.error(err.response.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            // transition: Bounce,
          });
        }
      } else {
        // setError(err.response?.data?.message || 'Something went wrong');
        toast.error(err.response?.data?.message || 'Something went wrong', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          // transition: Bounce,
        });
      }
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Left Side - Illustration */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-b from-purple-900 to-indigo-900 p-8 justify-center items-center">
        <img
          src={image1}
          alt="Illustration"
          className="w-full h-full object-contain max-h-full"
        />
      </div>
      
      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
        <h2 className="text-2xl font-semibold mb-4">Login to your account</h2>
        <p className="text-gray-400 mb-6">Don't have an account? <a href="/signup" className="text-purple-400">Sign up</a></p>
        
        <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-gray-800 p-3 rounded-lg"
          />
          
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-gray-800 p-3 rounded-lg pr-10"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
          
          {error && <p className="text-red-500 text-sm">{error}</p>}
          
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-500 p-3 rounded-lg"
          >
            Login
          </button>
          
          <div className="flex items-center space-x-3 mt-4">
            <div className="h-px w-[150px] bg-gray-700"></div>
            <span className="text-gray-400 text-sm ">Or login with </span>
            <div className="h-px w-[150px] bg-gray-700"></div>
          </div>
          
          <div className="flex justify-center space-x-4 mt-4">
            <GoogleAuth />
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}