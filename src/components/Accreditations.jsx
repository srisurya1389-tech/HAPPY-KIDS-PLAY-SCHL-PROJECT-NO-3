import React from 'react';
import './Accreditations.css';

const Accreditations = () => {
  const featureList = [
    {
      id: 1,
      icon: '🛡️',
      title: 'Safe & secure campus',
      description: 'CCTV monitored, gated play areas and licensed by early child education departments.',
      color: '#FFF3BF'
    },
    {
      id: 2,
      icon: '🎨',
      title: 'Play-based curriculum',
      description: 'Learning through art, music, story and STEM basics — never just sitting still.',
      color: '#D0EBFF'
    },
    {
      id: 3,
      icon: '❤️',
      title: 'Caring, trained teachers',
      description: 'Small groups, lots of attention, and 100% CPR/First-Aid certified staff.',
      color: '#FFE3E3'
    },
    {
      id: 4,
      icon: '🍎',
      title: 'Healthy meals daily',
      description: 'Freshly prepared, nutritious snacks and meals made fresh every day.',
      color: '#D3F9D8'
    }
  ];

  return (
    <section id="accreditations" className="accreditations">
      <div className="container">
        <div className="accreditations-strip">
          {featureList.map((feature) => (
            <div key={feature.id} className="feature-item">
              <div className="feature-icon-wrapper" style={{ backgroundColor: feature.color }}>
                <span className="feature-icon">{feature.icon}</span>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accreditations;
