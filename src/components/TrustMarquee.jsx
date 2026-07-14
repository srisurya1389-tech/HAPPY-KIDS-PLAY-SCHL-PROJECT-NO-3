import React from 'react';
import './TrustMarquee.css';

const TRUST_ITEMS = [
  { icon: '🏆', label: 'Licensed & Accredited' },
  { icon: '🛡️', label: 'Safe, Gated Campus' },
  { icon: '👩‍🏫', label: 'Certified Educators' },
  { icon: '🍎', label: 'Organic Meals Daily' },
  { icon: '⭐', label: '500+ Happy Families' },
  { icon: '🎨', label: 'Play-Based Curriculum' }
];

const TrustMarquee = () => (
  <div className="trust-marquee">
    <div className="trust-marquee__track">
      {[...TRUST_ITEMS, ...TRUST_ITEMS].map((item, i) => (
        <span key={i} className="trust-marquee__item">
          <span className="trust-marquee__icon">{item.icon}</span>
          {item.label}
        </span>
      ))}
    </div>
  </div>
);

export default TrustMarquee;
