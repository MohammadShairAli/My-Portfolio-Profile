import React from 'react';

const cn = (...classes: (string | undefined | null | false)[]) =>
  classes.filter(Boolean).join(' ');

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "p-5 w-full rounded-lg bg-white transition-all duration-300 shadow-2xl",
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