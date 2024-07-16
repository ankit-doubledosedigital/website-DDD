// src/Navbar.js
import React from 'react';
import './style/Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import logo from '../assets/Reward.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* <img className='logo' src={logo} alt='logo'/> */}
        <Link to='/home'>DDD</Link>
      </div>
      <ul className="navbar-menu">
        <li><Link to='/Image'>Image</Link></li>
        <li><Link to='/Text'>Text</Link></li>
        <li><Link to='/Video'>Video</Link></li>
        <li><Link to='/Audio'>Audio</Link></li>
        <li><FontAwesomeIcon icon="fa-solid fa-award" style={{ color: "#fcfcfc", }} /></li>
        <li>
          <button>
            <Link to="/AccountInfo">Go to Account Info</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
