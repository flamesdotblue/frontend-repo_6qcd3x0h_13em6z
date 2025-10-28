import React from 'react';

const GlassCard = ({ title, children, accent = 'from-blue-400/30 to-blue-200/10' }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
      <div className={`absolute inset-0 bg-gradient-to-br ${accent}`} aria-hidden />
      <div className="relative p-4 sm:p-5 md:p-6">
        {title && (
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800/90">
              {title}
            </h3>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default GlassCard;
