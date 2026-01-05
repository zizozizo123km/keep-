
import React from 'react';

export const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center p-10">
    <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);
