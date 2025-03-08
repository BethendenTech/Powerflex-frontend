import theme from '@/theme/theme';
import { useMediaQuery } from '@mui/material';
import { useState } from 'react';

interface Props {
    children: React.ReactNode;
    content: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
    isAlwaysOpen?: boolean;
    showOn?: 'hover' | 'click';
    left: string;
}

const Tooltip = (props: Props) => {
  const { children, content, position = 'bottom', isAlwaysOpen = false, showOn = 'hover', left } = props;
  const [showTooltip, setShowTooltip] = useState(isAlwaysOpen);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  const handleMouseEnter = () => {
    if (!isAlwaysOpen && showOn === 'hover' && !isMobile) {
      setShowTooltip(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isAlwaysOpen && showOn === 'hover' && !isMobile) {
      setShowTooltip(false);
    }
  };

  const handleClick = () => {
    if (!isAlwaysOpen) {
      if (isMobile) {
        setShowTooltip(true);
        // Hide tooltip after 3 seconds on mobile
        setTimeout(() => {
          setShowTooltip(false);
        }, 3000);
      } else if (showOn === 'click') {
        setShowTooltip((prev) => !prev);
      }
    }
  };

  const getTooltipPosition = () => {
    switch (position) {
      case 'top':
        return 'bottom-full left-1/2 transform -translate-x-1/2 mb-2';
      case 'bottom':
        return 'top-full left-1/2 transform -translate-x-1/2 mt-2';
      case 'left':
        return 'right-full top-1/2 transform -translate-y-1/2 mr-2';
      case 'right':
        return 'left-full top-1/2 transform -translate-y-1/2 ml-2';
      default:
        return 'bottom-full left-1/2 transform -translate-x-1/2 mb-2';
    }
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      onChange={handleClick}
    >
      {/* The element to which tooltip is attached */}
      {children}

      {/* Tooltip */}
      {showTooltip && (
        <div className={`absolute z-10 ${getTooltipPosition()} flex flex-col items-center`} style={{ left }}>
          <div className="relative bg-blue-500 text-white text-xs font-medium py-1 px-3 rounded shadow-lg">
            {content}
            {/* Tooltip arrow */}
        </div>
        <div className={`absolute ${position === 'top' ? 'top-full -translate-y-1/2' : 'bottom-full translate-y-1/2'} w-2 h-2 bg-blue-500 rotate-45 transform origin-center`}></div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
