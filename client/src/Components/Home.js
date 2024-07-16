import React from 'react';
import './style/Home.css';
import hero from '../assets/Home.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <section id="home" className="hero-section">
        <img src={hero} alt='home' className="hero-image"/>
        <div className="hero-text">
          <h1>Welcome to Double Dose Digital</h1>
          <p>Transforming your digital presence with innovative solutions.</p>
          {/* <a href="#contact" className="hero-button">Get Started</a> */}
          <Link to='/Contact' className="hero-button">Get Started</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
