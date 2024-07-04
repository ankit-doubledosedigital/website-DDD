// src/Footer.js
import React from 'react';
import './style/Footer.css';
import {Link} from 'react-router-dom';

 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link to='/About'>About</Link>
          <Link to='/Contact'>Contact</Link>
          <Link to='/Privacy'>Privacy Policy</Link>
        </div>
        <p className="footer-text">© 2024 Double Dose Digital. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
