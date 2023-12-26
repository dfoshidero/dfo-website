import React from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './scrollIndicator.scss';

const ScrollIndicator = ({ visible }) => {
  return (
    <div className={`scroll-indicator ${visible ? 'visible' : ''}`}>
      <ArrowDownwardIcon className="indicator"/>
    </div>
  );
};

export default ScrollIndicator;
