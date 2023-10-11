import React from 'react';
import './FloatingPage.scss'

export default function FloatingPage() {
    return (
        <div className="floating-page">
          <div className="floating-page-header">
            {/* <button onClick={onClose}>Close</button> */}
          </div>
          <div className="floating-page-content"></div>
        </div>
      );
};