import React from 'react';
import './Contact.scss';

export default function ContactCard() {
  const pdfUrl = "Oshidero_Daniel Favour_CV.pdf";

  return (
    <div className="contact-container">
      <a href="https://www.linkedin.com/in/favourdo/" className="connect-button linkedin" target="_blank" rel="noreferrer">LinkedIn</a>
      <a href="https://github.com/dfoshidero" className="connect-button github" target="_blank" rel="noreferrer">GitHub</a>

      <a
        href={pdfUrl}
        download="Oshidero_Daniel_Favour_CV.pdf"
        className="connect-button download-cv">
        Download CV
      </a>
    </div>
  );
}
