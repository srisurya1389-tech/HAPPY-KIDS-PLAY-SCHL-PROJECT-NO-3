import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      icon: '🧡',
      title: 'Loving educators',
      description: 'Certified teachers who truly know each child by name and story.',
      cardClass: 'card-educators'
    },
    {
      id: 2,
      icon: '🧩',
      title: 'Play-based learning',
      description: 'Curriculum inspired by Montessori and Reggio Emilia principles.',
      cardClass: 'card-learning'
    },
    {
      id: 3,
      icon: '🌿',
      title: 'Safe, green campus',
      description: 'Sunlit classrooms, a large garden and daily outdoor play.',
      cardClass: 'card-campus'
    }
  ];

  const handleEnquiryClick = (e) => {
    e.preventDefault();
    const enquirySection = document.getElementById('enquiry');
    if (enquirySection) {
      enquirySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="why-choose-us-section">
      <div className="container">
        
        {/* Why Choose Us Cards block */}
        <div className="why-choose-header">
          <h2>Why families choose us</h2>
          <p className="why-choose-subtitle">A whole-child approach rooted in warmth and wonder.</p>
        </div>

        <div className="why-choose-grid">
          {reasons.map((reason) => (
            <div key={reason.id} className={`why-card ${reason.cardClass}`}>
              <div className="why-card-icon-wrapper">
                <span className="why-card-icon">{reason.icon}</span>
              </div>
              <h3 className="why-card-title">{reason.title}</h3>
              <p className="why-card-desc">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Ready to Visit Us CTA Banner */}
        <div className="visit-cta-banner">
          <div className="visit-cta-content">
            <h3 className="visit-cta-title">Ready to visit us?</h3>
            <p className="visit-cta-subtitle">
              Book a campus tour or send us an enquiry — we'd love to meet you.
            </p>
          </div>
          <a href="#enquiry" className="visit-cta-btn" onClick={handleEnquiryClick}>
            Send an enquiry
          </a>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
