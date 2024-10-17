import React from 'react';
import '../styles/eclipx.css';

const Header = () => {
    const toggleGoldTheme = () => {
        document.body.classList.toggle('gold');
    };

    return (
        <div className="header">
            <h2><a href="#" target="_blank" rel="noopener noreferrer">RAFA</a></h2>
            <div className="mid-spot" onClick={toggleGoldTheme}></div>
            <button className="contact-btn">
                <span className="glow"></span>
                <span className="contact-btn-content">Contact Us</span>
            </button>
            <div className="spotlight">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Header;