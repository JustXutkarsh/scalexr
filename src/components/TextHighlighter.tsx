import React from 'react';

interface TextHighlighterProps {
  children: React.ReactNode;
  className?: string;
}

const TextHighlighter: React.FC<TextHighlighterProps> = ({ children, className = '' }) => {
  return (
    <span 
      className={`relative inline-block ${className}`}
      style={{
        background: 'linear-gradient(104deg, rgba(130, 180, 255, 0) 0.9%, rgba(130, 180, 255, 0.35) 2.4%, rgba(130, 180, 255, 0.3) 5.8%, rgba(130, 180, 255, 0.25) 93%, rgba(130, 180, 255, 0.35) 96%, rgba(130, 180, 255, 0) 98%)',
        padding: '0.1em 0.3em',
        marginLeft: '-0.2em',
        marginRight: '-0.2em',
        borderRadius: '0.2em',
        boxDecorationBreak: 'clone',
        WebkitBoxDecorationBreak: 'clone',
      }}
    >
      {children}
    </span>
  );
};

export default TextHighlighter;
