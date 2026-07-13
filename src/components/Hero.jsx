import React from 'react';
import './Hero.css';

const Hero = () => {
  const activities = [
    { id: 1, icon: '🎨', label: 'Art', bgColor: '#ffd5c8', className: 'card-art' },
    { id: 2, icon: '📚', label: 'Story time', bgColor: '#c2f0db', className: 'card-story' },
    { id: 3, icon: '🎵', label: 'Music', bgColor: '#ffe79a', className: 'card-music' },
    { id: 4, icon: '🌲', label: 'Nature', bgColor: '#bfe3fc', className: 'card-nature' }
  ];

  const handleEnquireClick = (e) => {
    e.preventDefault();
    const enquirySection = document.getElementById('enquiry');
    if (enquirySection) {
      enquirySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProgramsClick = (e) => {
    e.preventDefault();
    const programsSection = document.getElementById('programs');
    if (programsSection) {
      programsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-decor-blob blob-1"></div>
      <div className="hero-decor-blob blob-2"></div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">🎨</span>
            <span className="badge-text">NOW ENROLLING · AGES 2-6</span>
          </div>
          
          <h1 className="hero-title">
            A joyful place <br />
            where <span className="highlight-text">happy kids</span> <br />
            grow.
          </h1>
          
          <p className="hero-description">
            A warm, play-based preschool that nurtures curiosity, kindness and confidence — 
            one giggle, story and finger-painting at a time.
          </p>
          
          <div className="hero-actions">
            <a href="#enquiry" className="hero-btn btn-filled" onClick={handleEnquireClick}>
              Enquire now
            </a>
            <a href="#programs" className="hero-btn btn-outlined" onClick={handleProgramsClick}>
              Explore programs
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">12+</span>
              <span className="stat-label">Years nurturing</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1:6</span>
              <span className="stat-label">Teacher ratio</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">300+</span>
              <span className="stat-label">Happy families</span>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="floating-card-wrapper">
            <div className="activities-grid-card">
              {activities.map((act) => (
                <div 
                  key={act.id} 
                  className={`activity-card ${act.className}`} 
                  style={{ backgroundColor: act.bgColor }}
                >
                  <span className="activity-icon">{act.icon}</span>
                  <span className="activity-label">{act.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
