import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import PasswordReveal from '../PasswordReveal ';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:5050/api/signup', {
        username,
        email,
        password
      });

      console.log('API response:', response.data);

      if (response.data) {
        toast.success('Signup successful!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        // Delay navigation to allow toast to be visible
        setTimeout(() => {
          navigate('/login');
        }, 1000); // Adjust the delay as needed
      }
    } catch (err) {
      console.error('Signup error:', err); // Log the error for debugging
      if (err.response && err.response.status === 400) {
        setError(err.response.data.message);
        toast.error(err.response.data.message);
      } else {
        setError(err.response?.data?.message || 'Something went wrong');
        toast.error(err.response?.data?.message || 'Something went wrong');
      }
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 font-['SF_Pro_Display',-apple-system,BlinkMacSystemFont,system-ui,sans-serif]">
      <div className="max-w-lg w-full">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white tracking-tight bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
             Signup
          </h2>
          <p className="mt-3 text-sm text-gray-500 font-medium">
            Create your account
          </p>
        </div>
        <form onSubmit={handleSignup} className="space-y-8 bg-zinc-950 p-10 rounded-2xl border border-zinc-800 shadow-xl">
          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium text-gray-400 block mb-2" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 text-gray-100 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your username"
              />
            </div>
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
            <PasswordReveal password={password} setPassword={setPassword} />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 px-4 text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black transform transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-purple-500/20"
          >
            Signup
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}