import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>🌟 Ages 2 – 6 years</span>
          </div>
          <h1 className="hero-title">
            <span className="title-dark">Welcome to</span>
            <br />
            <span className="title-gradient">HAPPY KIDS</span>
          </h1>
          <h2 className="hero-subtitle">
            ✨ Learning with Joy ✨
          </h2>
          <p className="hero-description">
            A warm, colourful playschool where little hearts grow big imaginations. Songs, stories, art and play — every single day.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => navigate('/apply')}>Apply Now 🎒</button>
            <a href="#programs" className="btn-secondary" style={{display: 'inline-block', lineHeight: 'normal'}}>See Programs</a>
          </div>
          <div className="hero-decoration">
             🌈
          </div>
        </div>
        
        <div className="hero-image-wrapper">
          <div className="hero-image-bg"></div>
          <img src="https://i.pinimg.com/736x/23/f5/35/23f53532a32fd65bc86b0b023c389c65.jpg" alt="Happy kids playing" className="hero-image" />
          <div className="hero-floating-card">
            <div className="floating-card-icon">🤩</div>
            <div className="floating-card-text">
              <strong>500+ Happy Kids</strong>
              <span>and counting!</span>
            </div>
          </div>
          <div className="floating-star">⭐</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
