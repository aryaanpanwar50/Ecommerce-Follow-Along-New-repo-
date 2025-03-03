import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function EnterMethod() {
  const navigate = useNavigate();

  useEffect(() => {
    const background = document.querySelector('.background');
    const blockCount = 256; // 16x16 grid
    if (background) {
      for (let i = 0; i < blockCount; i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        background.appendChild(block);
      }
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white overflow-hidden font-['SF_Pro_Display',-apple-system,BlinkMacSystemFont,system-ui,sans-serif]">
      {/* Background blocks */}
      <div className="background fixed top-0 left-0 w-full h-full flex flex-wrap gap-[2px] z-0"></div>

      {/* Content */}
      <div className="max-w-lg w-full relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white tracking-tight bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Choose Method
          </h2>
          <p className="mt-3 text-sm text-gray-400 font-medium">
            Select a method to proceed
          </p>
        </div>
        <div className="space-y-8 bg-zinc-950 p-10 rounded-2xl border border-zinc-800 shadow-xl">
          <button
            onClick={() => navigate('/login')}
            className="w-full py-3 px-4 text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black transform transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-purple-500/20"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="w-full py-3 px-4 text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black transform transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-purple-500/20"
          >
            Signup
          </button>
        </div>
      </div>

      <style>
        {`
          .block {
            position: relative;
            display: block;
            width: calc(6.25vw - 2px);
            height: calc(6.25vw - 2px);
            background: #531F86;
            opacity: 0.15;
            transition: 1s;
            pointer-events: auto;
          }
          .block:hover {
            background: #B026FF ;
            opacity: 0.2;
            transition: 0s;
          }
        `}
      </style>
    </div>
  );
}