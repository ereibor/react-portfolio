
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;     
  variant?: 'primary' | 'secondary' | 'outline';  
  size?: 'sm' | 'md' | 'lg';     
  onClick?: () => void;    
  className?: string;     
}

const Button = ({ 
  children,          
  variant = 'primary', 
  size = 'md',        
  onClick,            
  className = ''      
}: ButtonProps) => {  
  

  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    
    
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'

  };
  

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',  
    md: 'px-4 py-2 text-base',   
    lg: 'px-6 py-3 text-lg'      
  };

  
  return (
    <button
      onClick={onClick}  
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}

    >
      {children} 
    </button>
  );
};

export default Button;