import React from 'react';

const cn = (...classes) => classes.filter(Boolean).join(' ');

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "p-5 w-full bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};


export const CardContent: React.FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "p-6 flex flex-col gap-3",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};