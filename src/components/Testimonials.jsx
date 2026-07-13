import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonialsList = [
    {
      id: 1,
      quote: '“Happy Kids has been an absolute blessing for our family. Our daughter goes in with a smile every morning and comes home chatting about all the new things she learned. The teachers are incredibly warm and nurturing!”',
      author: 'Sophia Vance',
      child: 'Parent of Mia (Age 3)',
      rating: 5,
      avatar: '👩‍👦'
    },
    {
      id: 2,
      quote: '“The play-based curriculum is brilliant. I can see a massive improvement in my son\'s social skills and reading abilities. The school maintains a clean, secure, and highly stimulating environment that we love.”',
      author: 'David Miller',
      child: 'Parent of Noah (Age 4)',
      rating: 5,
      avatar: '👨‍👦'
    },
    {
      id: 3,
      quote: '“From creative arts and clay play to yoga and dance, my kids have found their true creative outlets here. The low teacher-to-child ratio gives me total peace of mind that my children get individual care.”',
      author: 'Aria Thompson',
      child: 'Parent of Ella & Leo (Ages 3 & 5)',
      rating: 5,
      avatar: '👩‍👧‍👦'
    }
  ];

  const handlePrev = () => {
    setActiveIndex(prev => (prev === 0 ? testimonialsList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev === testimonialsList.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="testimonials section-padding">
      <div className="container">
        <div className="section-title">
          <span className="section-subtitle">TESTIMONIALS</span>
          <h2>What our happy parents say</h2>
        </div>

        <div className="testimonial-slider-container">
          <button className="slider-arrow arrow-prev" onClick={handlePrev} aria-label="Previous testimonial">
            ‹
          </button>

          <div className="testimonial-slider">
            {testimonialsList.map((t, idx) => (
              <div 
                key={t.id} 
                className={`testimonial-slide ${idx === activeIndex ? 'active' : ''}`}
              >
                <div className="testimonial-rating">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="star-icon">⭐</span>
                  ))}
                </div>
                <p className="testimonial-quote-text">{t.quote}</p>
                <div className="testimonial-user-profile">
                  <div className="testimonial-avatar">{t.avatar}</div>
                  <div className="testimonial-user-info">
                    <h4 className="testimonial-author">{t.author}</h4>
                    <span className="testimonial-child-desc">{t.child}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="slider-arrow arrow-next" onClick={handleNext} aria-label="Next testimonial">
            ›
          </button>
        </div>

        <div className="slider-dots">
          {testimonialsList.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${idx === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
