import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-16 h-16" }) => {
  return (
    <svg 
      viewBox="0 0 200 200" 
      className={className} 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Logótipo Joaquim & Fernandes"
    >
      {/* Background Circle - Dark Blue Slate (Accent Color) */}
      <circle cx="100" cy="100" r="100" fill="#3A445C" />
      
      {/* Stylized JF Monogram - Mimicking the blocky style */}
      <g fill="#A7D1EC">
        {/* J Shape */}
        <path d="M55 60 H 85 V 105 C 85 125 75 125 55 115 V 90 H 70 V 105 H 65 C 70 110 70 110 70 105 V 75 H 55 Z" />
        <path d="M45 55 L90 55 L90 100 C90 135 70 140 45 125 Z" /> 
        
        {/* Stronger Block J */}
        <path d="M50 50 H90 V110 C90 130 70 130 50 120 V50 Z" opacity="0" /> {/* Guide */}

        {/* Abstract Geometric J */}
        <path d="M60 55 H 95 V 110 H 60 V 95 H 80 V 70 H 60 V 55" />
        
        {/* Abstract Geometric F */}
        <path d="M105 55 H 145 V 70 H 120 V 85 H 140 V 100 H 120 V 135 H 105 V 55" />
      </g>

      {/* Since drawing custom paths without a grid is tricky, let's use the Project Font 'Anton' 
          which closely resembles the blocky nature of the logo provided. */}
      
      {/* Resetting content to use Text for perfect alignment with project fonts */}
      <circle cx="100" cy="100" r="100" fill="#3A445C" />
      
      {/* Large JF Monogram */}
      <text 
        x="100" 
        y="125" 
        fontFamily="Anton, sans-serif" 
        fontSize="110" 
        fill="#A7D1EC" 
        textAnchor="middle" 
        dominantBaseline="middle"
        letterSpacing="-5"
      >
        JF
      </text>

      {/* Company Name */}
      <text 
        x="100" 
        y="165" 
        fontFamily="Montserrat, sans-serif" 
        fontSize="11" 
        fontWeight="600"
        fill="#A7D1EC" 
        textAnchor="middle" 
        letterSpacing="0.5"
      >
        JOAQUIM & FERNANDES, Lda
      </text>
    </svg>
  );
};

export default Logo;