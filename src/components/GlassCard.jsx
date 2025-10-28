import React from 'react';

const GlassCard = ({ className = '', children }) => {
  return (
    <div
      className={
        `rounded-xl border border-white/10 bg-white/5 backdrop-blur-md ` +
        `shadow-[0_8px_30px_rgb(0,0,0,0.35)] ${className}`
      }
    >
      {children}
    </div>
  );
};

export default GlassCard;
