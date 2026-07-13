import React from 'react';
import './SafetyFacilities.css';

const SafetyFacilities = () => {
  const points = [
    {
      id: 1,
      badge: '🎥 CCTV Security',
      title: '24/7 Live Monitoring',
      desc: 'High-definition digital security cameras inside all learning rooms, sensory zones, and entry/exit gates.',
      color: '#E8F5E9',
      borderColor: '#4CAF50'
    },
    {
      id: 2,
      badge: '🧼 Hygiene Standards',
      title: 'Daily Deep Sanitization',
      desc: 'All kids toys, soft play mats, furniture, and bathrooms are strictly sterilized twice a day using child-safe products.',
      color: '#E0F7FA',
      borderColor: '#00B4D8'
    },
    {
      id: 3,
      badge: '🩹 Medical Support',
      title: 'Pediatric CPR Certified',
      desc: 'Every single educator and caretaker is certified in pediatric first-aid, CPR response, and emergency child care.',
      color: '#FFEBEE',
      borderColor: '#FF1744'
    },
    {
      id: 4,
      badge: '🚪 Secure Campus',
      title: 'Gated & Verified Entry',
      desc: 'Strict authorized pickup verification logs and secure door lock systems prevent unverified entrance or child release.',
      color: '#FFF3E0',
      borderColor: '#FF9800'
    }
  ];

  return (
    <section id="safety" className="safety-facilities section-padding">
      <div className="container">
        <div className="safety-container">
          <div className="safety-intro">
            <span className="section-subtitle">SAFETY FIRST</span>
            <h2>A safe, hygienic & happy shelter 🛡️</h2>
            <p>
              Your child\'s security, health, and emotional comfort are our highest priorities. We maintain strict sanitization checklists, safety measures, and facility control rules so parents can have complete peace of mind.
            </p>
            <div className="safety-stamp">
              <span className="stamp-icon">Verified</span>
              <span className="stamp-text">100% Secure Environment</span>
            </div>
          </div>

          <div className="safety-grid">
            {points.map(pt => (
              <div key={pt.id} className="safety-card" style={{ '--point-border': pt.borderColor }}>
                <span className="safety-badge" style={{ backgroundColor: pt.color, color: pt.borderColor }}>{pt.badge}</span>
                <h3>{pt.title}</h3>
                <p>{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyFacilities;
