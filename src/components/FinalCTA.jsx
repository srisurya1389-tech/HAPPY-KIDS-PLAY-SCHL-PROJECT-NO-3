import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FinalCTA.css';

const FinalCTA = () => {
  const navigate = useNavigate();

  return (
    <section id="book-tour" className="final-cta section-padding">
      <div className="container">
        <h2>Come see a class in action</h2>
        <p>Book a free tour — no commitment, just come say hi.</p>
        <button className="final-cta-btn" onClick={() => navigate('/apply')}>Book a Tour</button>
      </div>
    </section>
  );
};

export default FinalCTA;
