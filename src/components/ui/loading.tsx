
import React from 'react';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <div className={cn(
      'animate-spin rounded-full border-2 border-gray-300 border-t-primary',
      sizeClasses[size],
      className
    )} />
  );
};

interface LoadingProps {
  text?: string;
  className?: string;
}

const Loading: React.FC<LoadingProps> = ({ 
  text = 'Loading...', 
  className 
}) => {
  return (
    <div className={cn('flex items-center justify-center p-4', className)}>
      <LoadingSpinner className="mr-2" />
      <span className="text-muted-foreground">{text}</span>
    </div>
  );
};

export { LoadingSpinner, Loading };
