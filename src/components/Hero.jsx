import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import outdoorPlay from '../assets/gallery_2_1779636620471.png';
import artTime from '../assets/gallery_3_1779636635738.png';
import classroomFun from '../assets/gallery_1_1779636589238.png';
import './Hero.css';

// Counts up from 0 to `end` once, starting after `delay` ms so it lands in sync
// with the stats row's CSS entrance animation instead of finishing before it's visible.
const CountUp = ({ end, suffix = '', duration = 1200, delay = 0 }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let rafId;
    let startTime;

    const tick = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * end));
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };

    const timeoutId = setTimeout(() => {
      rafId = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(rafId);
    };
  }, [end, duration, delay]);

  return <>{value}{suffix}</>;
};

const Hero = () => {
  const navigate = useNavigate();

  const handleProgramsClick = (e) => {
    e.preventDefault();
    document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-shape shape-circle" aria-hidden="true"></div>
      <div className="hero-shape shape-square" aria-hidden="true"></div>
      <div className="hero-shape shape-triangle" aria-hidden="true"></div>
      <div className="hero-shape shape-dot" aria-hidden="true"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">🎈</span>
            <span className="badge-text">NOW ENROLLING · AGES 2-6</span>
          </div>

          <h1 className="hero-title">
            Where little dreamers <span className="highlight-text">grow big</span> at Happy Kids
          </h1>

          <p className="hero-description">
            A joyful, safe play school for ages 2–6 — hands-on learning, caring teachers,
            and a whole lot of giggles every single day.
          </p>

          <div className="hero-actions">
            <button className="hero-btn btn-filled" onClick={() => navigate('/apply')}>
              Enroll Now
            </button>
            <a href="#programs" className="hero-watch-link" onClick={handleProgramsClick}>
              <span className="hero-watch-icon">▶</span>
              See our programs
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number"><CountUp end={12} suffix="+" delay={600} /></span>
              <span className="stat-label">Years of care</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number"><CountUp end={500} suffix="+" duration={1500} delay={600} /></span>
              <span className="stat-label">Happy families</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">1:6</span>
              <span className="stat-label">Teacher ratio</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-certified-badge">
            <span className="hero-certified-icon">✔</span>
            <div>
              <div className="hero-certified-title">Certified & Safe</div>
              <div className="hero-certified-sub">CPR trained staff</div>
            </div>
          </div>

          <div className="hero-collage">
            <img src={outdoorPlay} alt="Kids playing outdoors" className="collage-img collage-main" />
            <div className="collage-stack">
              <img src={artTime} alt="Classroom art time" className="collage-img collage-small" />
              <img src={classroomFun} alt="A colorful Happy Kids classroom" className="collage-img collage-small" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
