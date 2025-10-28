import React from 'react';

const GlobalLoader = ({ loading = false, label = 'Loading' }) => {
  if (!loading) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-white/60 backdrop-blur-md">
      <div className="flex flex-col items-center gap-3">
        <svg className="animate-spin h-10 w-10 text-blue-600" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
        </svg>
        <p className="text-sm font-medium text-gray-700">{label}…</p>
      </div>
    </div>
  );
};

export default GlobalLoader;
