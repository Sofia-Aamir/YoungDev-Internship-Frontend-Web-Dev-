// src/LandingPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import LandingPageFooter from './LandingPageFooter';

const LandingPage = () => {
  const [isNavbarActive] = useState(false);
  const navigate = useNavigate();
  const backgroundImage = `${process.env.PUBLIC_URL}/images/background.png`;

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div>
      <div className="landing-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className={`navbar ${isNavbarActive ? 'active' : ''}`}>
          <div className="logo-container">
            <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo" className="logo-image" />
            <div className="logo-text">
              <div>Pastries</div>
              <div>& Bread</div>
            </div>
          </div>
          <ul className="nav-links">
            <li>Home</li>
            <li>Product</li>
            <li>Location</li>
            <li>About</li>
          </ul>
          <button className="register-button" onClick={handleContactClick}>Contact Info</button>
        </div>
        <div className="content">
          <img src={`${process.env.PUBLIC_URL}/images/criossont.png`} alt="Pastries" className="main-image" />
          <div className="text-content">
            <div className="heading-container">
              <h1 className='one-treat'>
                One <br />
                Treat <br />
                at a Time
              </h1>
            </div>
            <div className="buttons">
              <button className="buy-now">Buy Now</button>
              <button className="read-more">Read More</button>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
      <LandingPageFooter style={{ borderTop: 'none', marginTop: '0' }} />
    </div>
  );
};

export default LandingPage;
