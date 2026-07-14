import React from 'react';
import './Testimonials.css';

const Testimonials = () => (
  <section id="testimonials" className="testimonials section-padding">
    <div className="container">
      <div className="testimonial-block">
        <div className="testimonial-quote-col">
          <div className="testimonial-mark">"</div>
          <p className="testimonial-quote-text">
            My daughter runs to the door every morning now. The teachers actually notice what she needs.
          </p>
          <div className="testimonial-author">— Meera, parent of a 4-year-old</div>
        </div>
        <div className="testimonial-stats-col">
          <div className="testimonial-stat">
            <div className="testimonial-stat-badge">98%</div>
            <div className="testimonial-stat-label">of parents would recommend us</div>
          </div>
          <div className="testimonial-stat">
            <div className="testimonial-stat-badge is--blue">12+</div>
            <div className="testimonial-stat-label">years serving local families</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
