import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  icon: Icon,
  iconPosition = 'right',
  className = '',
  ...props
}) => {
  const baseStyles = 'px-8 py-3 rounded-lg text-lg font-medium transition-colors inline-flex items-center justify-center';
  const variants = {
    primary: 'bg-sky-600 text-white hover:bg-sky-700',
    outline: 'border-2 border-sky-600 text-sky-600 hover:bg-sky-50',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="mr-2 h-5 w-5" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="ml-2 h-5 w-5" />}
    </button>
  );
};

export default Button;