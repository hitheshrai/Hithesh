// src/components/Button.tsx
import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative px-6 py-3 text-lg font-medium text-white bg-futuristic-green rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-futuristic-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      {children}
    </button>
  );
};

export default Button;
