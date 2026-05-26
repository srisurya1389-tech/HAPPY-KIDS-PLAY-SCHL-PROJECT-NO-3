import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="logo" onClick={() => navigate('/')}>
          <span className="logo-icon">🧸</span>
          <span className="logo-text">HAPPY KIDS</span>
        </div>
        
        {isHomePage && (
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#admissions">Admissions</a></li>
            <li><a href="#calendar">Calendar</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        )}

        <div className="nav-actions">
          <button className="btn-primary" onClick={() => navigate('/apply')}>Apply Now</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
