import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="section-title">
          <span className="section-subtitle">ABOUT US</span>
          <h2>A second home filled with giggles <br/> 🏡</h2>
          <p className="about-intro">
            At HAPPY KIDS, we believe early childhood is magical. Our caring teachers, vibrant classrooms and play-based curriculum nurture curiosity, kindness and confidence in every little learner.
          </p>
          <button className="btn-primary btn-small">Learn More ✈️</button>
        </div>

        <div className="about-cards">
          <div className="about-card mission-card">
            <div className="card-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>To create a safe, joyful space where children discover the love of learning through play, exploration and imagination.</p>
          </div>
          <div className="about-card vision-card">
            <div className="card-icon">🌱</div>
            <h3>Our Vision</h3>
            <p>To raise confident, kind and curious children who carry happy memories of learning wherever they go.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
