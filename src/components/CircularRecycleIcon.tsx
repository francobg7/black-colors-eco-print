import React from 'react';

const CircularRecycleIcon = ({ size = 80, color = "#16a34a" }) => {
  return (
    <div className="flex items-center justify-center">
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className="animate-pulse"
      >
        {/* Círculo exterior */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke={color}
          strokeWidth="2"
          opacity="0.3"
        />
        
        {/* Flecha circular 1 */}
        <path
          d="M 30 20 A 25 25 0 0 1 70 30 L 65 25 M 70 30 L 65 35"
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Flecha circular 2 */}
        <path
          d="M 80 50 A 25 25 0 0 1 50 80 L 55 75 M 50 80 L 45 75"
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Flecha circular 3 */}
        <path
          d="M 20 50 A 25 25 0 0 1 50 20 L 45 25 M 50 20 L 55 25"
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Círculo central */}
        <circle
          cx="50"
          cy="50"
          r="8"
          fill={color}
          opacity="0.8"
        />
      </svg>
    </div>
  );
};

export default CircularRecycleIcon;