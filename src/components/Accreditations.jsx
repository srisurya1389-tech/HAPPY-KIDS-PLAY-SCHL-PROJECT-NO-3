import React from 'react';
import './Accreditations.css';

const Accreditations = () => {
  const badgeList = [
    {
      id: 1,
      icon: '🛡️',
      title: 'State Licensed',
      description: 'Fully certified and licensed by early child education departments.',
      color: '#E0F7FA',
      iconColor: '#00B4D8'
    },
    {
      id: 2,
      icon: '❤️',
      title: 'Safety First',
      description: '100% CPR/First-Aid certified educators and secure facility entry.',
      color: '#FFE4E6',
      iconColor: '#FF6B98'
    },
    {
      id: 3,
      icon: '🧩',
      title: 'Play-Based Curriculum',
      description: 'Fun play combined with STEM basics & cognitive growth activities.',
      color: '#FFF3C4',
      iconColor: '#FFCF54'
    },
    {
      id: 4,
      icon: '🥦',
      title: 'Nutritious Meals',
      description: 'Freshly prepared organic meals and snacks daily for healthy growth.',
      color: '#D8F3DC',
      iconColor: '#2D6A4F'
    },
    {
      id: 5,
      icon: '👩‍🏫',
      title: '1:6 Teacher Ratio',
      description: 'Low student-to-teacher ratio ensuring individual care & guidance.',
      color: '#E8E8FF',
      iconColor: '#5F5DEC'
    }
  ];

  return (
    <section id="accreditations" className="accreditations">
      <div className="container">
        <div className="accreditations-grid">
          {badgeList.map(badge => (
            <div key={badge.id} className="badge-card" style={{ '--card-bg': badge.color }}>
              <div className="badge-icon-wrapper" style={{ backgroundColor: badge.color, color: badge.iconColor }}>
                <span className="badge-icon">{badge.icon}</span>
              </div>
              <h3 className="badge-title">{badge.title}</h3>
              <p className="badge-desc">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accreditations;
