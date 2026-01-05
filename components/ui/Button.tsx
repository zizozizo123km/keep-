
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', size = 'md', icon, className, ...props }) => {
  const baseStyles = "flex items-center justify-center gap-2 font-bold rounded transition duration-200 disabled:opacity-50";
  const variants = {
    primary: "bg-white text-black hover:bg-white/80",
    secondary: "bg-gray-500/50 text-white hover:bg-gray-500/30 backdrop-blur-md",
    ghost: "bg-transparent text-white hover:bg-white/10"
  };
  const sizes = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-10 py-3 text-lg"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {icon}
      {children}
    </button>
  );
};
