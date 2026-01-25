import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-16 h-16" }) => {
  return (
    <img 
      src="/logo.png" 
      alt="Joaquim & Fernandes" 
      className={`${className} object-contain`}
    />
  );
};

export default Logo;