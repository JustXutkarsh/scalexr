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
        className="absolute -inset-x-3 -inset-y-2 w-[calc(100%+24px)] h-[calc(100%+16px)] pointer-events-none"
        viewBox="0 0 200 70"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hand-drawn imperfect ellipse path */}
        <path
          d="M 15 38 
             C 8 28, 12 18, 35 12 
             C 60 5, 95 3, 140 6 
             C 175 9, 195 18, 193 32 
             C 191 48, 170 58, 135 62 
             C 100 66, 55 65, 30 58 
             C 12 52, 6 45, 10 38
             C 12 34, 18 42, 15 38"
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
