import React from 'react';
import './Header.scss'; // Continue using the existing CSS/SCSS file for styling

const Header = ({ onRandomizeClick }) => {
  return (
    <div className="header">
      <div className="profile-name-title">
        <img src="/images/icon.jpeg" alt="Profile Icon" />
        <div className="name-title">
          <div>
            <span className="name">DFO</span>
          </div>
          <div>
            <span className="title">Designer & Programmer.</span>
          </div>
        </div>
      </div>

      <a href="mailto:dfoshidero@outlook.com" className="contact-button">
        Contact
      </a>
    </div>
  );
};

export default Header;
