// src/Footer.js
import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';
 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link to='/About'>About</Link>
          <Link to='/About'>Contact</Link>
          <Link to='/About'>Privacy Policy</Link>
        </div>
        <p className="footer-text">© 2024 Double Dose Digital. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
