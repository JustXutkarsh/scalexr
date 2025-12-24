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
        className="absolute -inset-x-2 -inset-y-1 w-[calc(100%+16px)] h-[calc(100%+8px)] pointer-events-none"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="100"
          cy="30"
          rx="95"
          ry="25"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="2 4"
          fill="none"
          className="animate-[draw_1.5s_ease-out_forwards]"
          style={{
            strokeDashoffset: 0,
            transform: 'rotate(-2deg)',
            transformOrigin: 'center',
          }}
        />
      </svg>
    </span>
  );
};

export default CircleHighlight;
