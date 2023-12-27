// SeeMore.jsx

import React from 'react';
import './SeeMore.scss';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const SeeMore = ({ url, text }) => {
  const openUrl = () => {
    window.open(url, '_blank');
  };

  return (
    <button onClick={openUrl} className="see-more-button">
      {text} <ArrowOutwardIcon fontSize="inherit" className="button-icon" />
    </button>
  );
};

export default SeeMore;
