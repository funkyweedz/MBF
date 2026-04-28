import React from 'react';

interface ZelligePatternProps {
  className?: string;
  colors?: string[];
}

const ZelligePattern: React.FC<ZelligePatternProps> = ({ 
  className = "", 
  colors = ['#f5f5dc', '#e8d4b0', '#d4a574', '#faf8f3'] 
}) => {
  const patternColors = colors;

  return (
    <svg 
      className={className}
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="zellige" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <polygon points="0,10 10,0 20,10 10,20" fill={patternColors[0]} />
          <polygon points="10,0 20,10 10,20 0,10" fill={patternColors[1]} />
          <circle cx="10" cy="10" r="3" fill={patternColors[2]} />
          <rect x="8" y="8" width="4" height="4" fill={patternColors[3]} transform="rotate(45 10 10)" />
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#zellige)" />
    </svg>
  );
};

export default ZelligePattern;
