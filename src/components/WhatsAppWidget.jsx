import React, { useState, useEffect } from 'react';
import './WhatsAppWidget.css';

const WhatsAppWidget = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    // Open a mock WhatsApp link or real one. Let's use a standard template.
    window.open('https://wa.me/1234567890?text=Hello!%20I%20am%20interested%20in%20Happy%20Kids%20admissions.', '_blank');
  };

  return (
    <div className="wa-widget-container">
      {showTooltip && (
        <div className="wa-tooltip">
          <p>Questions? Chat with us on WhatsApp! 💬</p>
          <button className="wa-tooltip-close" onClick={() => setShowTooltip(false)}>✖</button>
        </div>
      )}
      <button 
        className="wa-floating-btn" 
        onClick={handleClick} 
        aria-label="Chat on WhatsApp"
      >
        <span className="wa-icon">💬</span>
      </button>
    </div>
  );
};

export default WhatsAppWidget;
