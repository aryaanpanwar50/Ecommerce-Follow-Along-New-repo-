import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from 'axios';
import GoogleAuth from './GoogleAuth';

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('You need to fill in the credentials');
      return;
    }
    setError('');

    try {
      // Call the API to sign up
      const response = await axios.post('http://localhost:5050/api/signup', {
        email,
        password
      });

      console.log('API response:', response.data);

      // If the API call is successful, navigate to the home page
      if (response.data) {
        alert("Signup successful");
        navigate('/home');
      } else {
        setError('Signup failed');
      }
    } catch (error) {
      console.log(error);
      setError('An error occurred while signing up');
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 font-['SF_Pro_Display',-apple-system,BlinkMacSystemFont,system-ui,sans-serif]">
      <div className="max-w-lg w-full">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white tracking-tight bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Sign Up
          </h2>
          <p className="mt-3 text-sm text-gray-500 font-medium">
            Enter your credentials to sign up
          </p>
        </div>
        <form className="space-y-8 bg-zinc-950 p-10 rounded-2xl border border-zinc-800 shadow-xl" onSubmit={handleSignUp}>
          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium text-gray-400 block mb-2" htmlFor="email">
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 text-gray-100 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                placeholder="name@company.com"
              />
            </div>
            <div className="relative">
              <label className="text-sm font-medium text-gray-400 block mb-2" htmlFor="password">
                Password
              </label>
              <input
                type={visible ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 text-gray-100 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your password"
              />
              {visible ? (
                <AiOutlineEye
                  className="absolute right-3 top-3 cursor-pointer text-white"
                  size={25}
                  onClick={() => setVisible(false)}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className="absolute right-3 top-3 cursor-pointer text-white"
                  size={25}
                  onClick={() => setVisible(true)}
                />
              )}
            </div>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 px-4 text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black transform transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-purple-500/20"
          >
            Sign Up
          </button>
          <div className="text-center mt-4">
            <span className="text-gray-500 text-sm">
              Or sign up with
            </span>
          </div>
          <div className="flex justify-center mt-4">
            <GoogleAuth />
          </div>
        </form>
      </div>
    </div>
  );
}