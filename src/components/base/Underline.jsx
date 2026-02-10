import React from 'react';

function Underline({ color = 'bg-accent', className = '' }) {
  return (
    <span className={`block w-24 h-1 ${color} ${className}`}></span>
  );
}

export default Underline;