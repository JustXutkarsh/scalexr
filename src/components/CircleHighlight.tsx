import React from 'react';

interface CircleHighlightProps {
  children: React.ReactNode;
  className?: string;
}

const CircleHighlight: React.FC<CircleHighlightProps> = ({ children, className = '' }) => {
  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <svg
        className="absolute -inset-x-4 -inset-y-1 top-1 w-[calc(100%+32px)] h-[calc(100%+16px)] pointer-events-none"
        viewBox="0 0 220 80"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Rough hand-drawn ellipse with trailing stroke */}
        <path
          d="M 180 18 
             C 200 22, 210 32, 208 42 
             C 206 55, 185 65, 150 68 
             C 110 72, 60 70, 30 62 
             C 10 56, 2 45, 5 35 
             C 8 24, 25 15, 55 11 
             C 90 6, 140 6, 175 12
             C 190 14, 200 18, 210 12
             C 215 8, 218 3, 220 0"
          stroke="hsl(var(--primary))"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </span>
  );
};

export default CircleHighlight;
