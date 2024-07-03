// src/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home">Logo</a>
      </div>
      <ul className="navbar-menu">
        <li><a href="#image">Image</a></li>
        <li><a href="#video">Video</a></li>
        <li><a href="#text-or-audio">Text or Audio</a></li>
        <li><a href="#login" className="navbar-login-button">Login</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
