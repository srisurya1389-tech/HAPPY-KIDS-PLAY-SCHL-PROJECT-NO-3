import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import outdoorPlay from '../assets/gallery_2_1779636620471.png';
import artTime from '../assets/gallery_3_1779636635738.png';
import classroomFun from '../assets/gallery_1_1779636589238.png';
import sensoryPlay from '../assets/gallery_4_1779636651525.png';
import happyGroup from '../assets/hero_kids_1779636545144.png';
import splashKids from '../assets/splash_kids.png';
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

  const leftReel = [
    { img: happyGroup, caption: 'Happy Friends 🧸', rotation: '-2deg' },
    { img: outdoorPlay, caption: 'Outdoor Play 🏃‍♂️', rotation: '3deg' },
    { img: splashKids, caption: 'Water Fun 💦', rotation: '-1deg' },
  ];

  const rightReel = [
    { img: artTime, caption: 'Art & Crafts 🎨', rotation: '2deg' },
    { img: classroomFun, caption: 'Class Fun 🌈', rotation: '-3deg' },
    { img: sensoryPlay, caption: 'Sensory Games 🧩', rotation: '1deg' },
  ];

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

          <div className="hero-reel-container">
            <div className="hero-reel-track">
              {/* Left Column (scrolls up) */}
              <div className="reel-column column-left">
                {leftReel.map((card, i) => (
                  <div key={`left-1-${i}`} className="polaroid-card" style={{ '--card-rotation': card.rotation }}>
                    <div className="washi-tape"></div>
                    <div className="polaroid-pin"></div>
                    <img src={card.img} alt={card.caption} className="polaroid-img" />
                    <span className="polaroid-caption">{card.caption}</span>
                  </div>
                ))}
                {leftReel.map((card, i) => (
                  <div key={`left-2-${i}`} className="polaroid-card" style={{ '--card-rotation': card.rotation }}>
                    <div className="washi-tape"></div>
                    <div className="polaroid-pin"></div>
                    <img src={card.img} alt={card.caption} className="polaroid-img" />
                    <span className="polaroid-caption">{card.caption}</span>
                  </div>
                ))}
              </div>

              {/* Right Column (scrolls down) */}
              <div className="reel-column column-right">
                {rightReel.map((card, i) => (
                  <div key={`right-1-${i}`} className="polaroid-card" style={{ '--card-rotation': card.rotation }}>
                    <div className="washi-tape"></div>
                    <div className="polaroid-pin"></div>
                    <img src={card.img} alt={card.caption} className="polaroid-img" />
                    <span className="polaroid-caption">{card.caption}</span>
                  </div>
                ))}
                {rightReel.map((card, i) => (
                  <div key={`right-2-${i}`} className="polaroid-card" style={{ '--card-rotation': card.rotation }}>
                    <div className="washi-tape"></div>
                    <div className="polaroid-pin"></div>
                    <img src={card.img} alt={card.caption} className="polaroid-img" />
                    <span className="polaroid-caption">{card.caption}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="reel-fade-top"></div>
            <div className="reel-fade-bottom"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
