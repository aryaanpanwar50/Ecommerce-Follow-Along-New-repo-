import { useState, useEffect, useRef } from 'react';

const PasswordReveal = ({ password, setPassword }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const eyeRef = useRef(null);

  useEffect(() => {
    const moveEye = (e) => {
      const eye = eyeRef.current;
      const rect = eye.getBoundingClientRect();
      const eyeX = rect.left + rect.width / 2;
      const eyeY = rect.top + rect.height / 2;
      const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);
      const x = Math.cos(angle) * 5;
      const y = Math.sin(angle) * 5;
      setEyePosition({ x, y });
    };

    window.addEventListener("mousemove", moveEye);
    return () => window.removeEventListener("mousemove", moveEye);
  }, [isRevealed]);

  return (
    <div className="relative flex items-center">
      <input
        type={isRevealed ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-72 px-4 py-2 text-lg text-black bg-gray-200 border-2 border-gray-400 rounded-md focus:outline-none"
        placeholder="Type your password..."
      />

      <div
        className="absolute right-3 flex items-center justify-center cursor-pointer"
        onClick={() => setIsRevealed(!isRevealed)}
        ref={eyeRef}
      >
        <div className="relative w-12 h-6 flex items-center justify-center">
          {!isRevealed ? (
            <div className="relative w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-white flex items-center justify-center">
              <div
                className="absolute w-3 h-3 bg-white rounded-full"
                style={{ transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)` }}
              ></div>
            </div>
          ) : (
            <div className="relative w-full h-full bg-gray-500 rounded-full border-2 border-white flex items-center justify-center">
              <div className="absolute w-3 h-3 bg-white rounded-full"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PasswordReveal;