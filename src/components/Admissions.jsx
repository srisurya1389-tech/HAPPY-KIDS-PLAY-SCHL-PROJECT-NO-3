import React from 'react';
import './Admissions.css';

const Admissions = () => {
  return (
    <section id="admissions" className="admissions section-padding">
      <div className="container">
        <div className="admissions-card">
          <div className="admissions-decor top-left">🎉</div>
          <div className="admissions-decor top-right">🎈</div>
          
          <div className="admissions-badge">Admissions Open 2026 – 2027</div>
          
          <h2>Join our happy family!</h2>
          <p className="admissions-desc">
            Our admission process is simple and friendly. Visit us for a tour, fill out the application form, meet our teachers, and your little one is ready to start their magical journey.
          </p>

          <div className="steps-container">
            <div className="step-card">
              <div className="step-number">1</div>
              <h4>Visit & Tour</h4>
              <p>Come see our happy classrooms.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h4>Apply</h4>
              <p>Fill out our simple application form.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h4>Welcome!</h4>
              <p>Meet teachers and start learning.</p>
            </div>
          </div>

          <button className="btn-primary admissions-btn">Apply Now 🎒</button>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
