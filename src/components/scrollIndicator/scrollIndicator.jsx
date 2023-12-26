import React, { useState, useEffect } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './scrollIndicator.scss'; // Path to your ScrollIndicator.scss

const ScrollIndicator = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => setVisible(false), 1000);

    const handleScroll = () => setVisible(false);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return visible ? (
    <div className="scroll-indicator">
      <ArrowDownwardIcon className="scroll-indicator-icon" />
    </div>
  ) : null;
};

export default ScrollIndicator;
