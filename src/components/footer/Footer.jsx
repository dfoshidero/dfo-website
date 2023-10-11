import React from 'react';
import './Footer.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function handleLinkClick(e) {
    if (e.target.id === "linkedin-link") {
        e.preventDefault();
      window.open("https://www.linkedin.com/in/favourdo/", "_blank")
    } else if (e.target.id === "instagram-link") {
        e.preventDefault();
        window.open("https://www.instagram.com/untitled.fvr/", "_blank")
    };
    };


export default function Footer() {
    return (
        <div>
            <p className="footerMessage">Website Build In Progress.</p>

            <div className="links">

                <LinkedInIcon 
                id="linkedin-link"
                className="linkItem"
                onClick={handleLinkClick}/>

                <InstagramIcon 
                id="instagram-link"
                className="linkItem"
                onClick={handleLinkClick}/>

            </div>
        </div>
    );
};