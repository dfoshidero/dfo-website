import React from 'react';
import './Contact.scss';

export default function ContactCard() {
  return (
    <div className="contact-container">
      <a href="https://www.linkedin.com/in/favourdo/" className="connect-button linkedin">LinkedIn</a>
      <a href="https://github.com/dfoshidero" className="connect-button github">GitHub</a>
      <a href="../../assets/cv/Oshidero_Daniel Favour_CV.pdf" className="connect-button download-cv">Download CV</a>
    </div>
  );
}
