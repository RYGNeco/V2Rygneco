import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'green' | 'blue' | 'gray';
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  color = 'green', 
  text = 'Loading...' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const colorClasses = {
    green: 'border-green-600',
    blue: 'border-blue-600',
    gray: 'border-gray-600'
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className={`
        ${sizeClasses[size]} 
        ${colorClasses[color]} 
        border-4 border-t-transparent 
        rounded-full 
        animate-spin
      `}></div>
      {text && (
        <p className="mt-4 text-gray-600 text-sm font-medium">
          {text}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;