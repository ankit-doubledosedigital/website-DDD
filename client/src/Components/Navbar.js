// src/Navbar.js
import React from 'react';
import './style/Navbar.css';
import { Link } from 'react-router-dom';
// import logo from '../assets/ddd.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* <img className='logo' src={logo} alt='logo'/> */}
        <Link to='/'>DDD</Link>
      </div>
      <ul className="navbar-menu">
        <li><Link to='/Image'>Image</Link></li>
        <li><Link to='/Text'>Text</Link></li>
        <li><Link to='/Video'>Video</Link></li>
        <li><Link to='/Audio'>Audio</Link></li>
        <li><Link className='navbar-login-button' to='/login'>Login</Link></li>
        {/* <li><a href="#login" className="navbar-login-button">Login</a></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
