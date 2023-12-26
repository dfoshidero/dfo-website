import React from 'react';
import './Status.scss';

const StatusCard = () => {
  return (
    <div className="status-card">
      <div className="status-text" style={{ backgroundColor: "white" }}>
      Pursuing a Master's degree at the University of Bath.
      </div>
      <div className="status-text" style={{ backgroundColor: "white" }}>
        Currently looking for work.
      </div>
    </div>
  );
};

export default StatusCard;
