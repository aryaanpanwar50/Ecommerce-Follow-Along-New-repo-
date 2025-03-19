import React from 'react';
import { X } from 'lucide-react';

const QRCodeModal = ({ isOpen, onClose, amount }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>
        
        <h3 className="text-lg font-semibold mb-4">Scan QR Code to Pay</h3>
        <div className="flex flex-col items-center">
          <img 
            src="/qr.jpg" 
            alt="Payment QR Code" 
            className="w-64 h-64 object-contain mb-4"
          />
          <p className="text-sm text-gray-600 mb-2">Amount: ₹{amount}</p>
          <p className="text-xs text-gray-500 text-center">
            Scan this QR code with any UPI app to make payment
          </p>
        </div>
      </div>
    </div>
  );
};

export default QRCodeModal;
