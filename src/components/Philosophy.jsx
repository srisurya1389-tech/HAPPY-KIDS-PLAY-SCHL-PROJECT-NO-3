import React from 'react';
import './Philosophy.css';

const Philosophy = () => {
  const approaches = [
    {
      id: 1,
      emoji: '🧸',
      title: 'Play-Based Learning',
      subtitle: 'Natural Exploration',
      desc: 'We place self-directed play at the center of learning. Children naturally construct logic, refine motor skills, and build vital social intelligence by interacting with toys, materials, and peers.',
      bgColor: '#FFE4E6',
      badgeColor: '#FF6B98'
    },
    {
      id: 2,
      emoji: '🧱',
      title: 'Montessori Method',
      subtitle: 'Hands-On Autonomy',
      desc: 'Through structured sensory tools, children work independently at their own pace. Self-correcting activities build spatial intelligence, mathematical reasoning, and task confidence.',
      bgColor: '#E0F7FA',
      badgeColor: '#00B4D8'
    },
    {
      id: 3,
      emoji: '🎨',
      title: 'Reggio Emilia Inspired',
      subtitle: 'Creative Expression',
      desc: 'We see the environment as the "third teacher." Visual logs, group art, and sensory projects allow children to express their thoughts using their unique creative outlets.',
      bgColor: '#FFF3C4',
      badgeColor: '#FFCF54'
    }
  ];

  return (
    <section id="philosophy" className="philosophy section-padding">
      <div className="container">
        <div className="section-title">
          <span className="section-subtitle">OUR PHILOSOPHY</span>
          <h2>How we nurture little minds 🧠</h2>
          <p className="philosophy-intro-text">
            Every child learns differently. By combining the best aspects of early childhood pedagogy, we provide a holistic, warm, and highly adaptive growth environment.
          </p>
        </div>

        <div className="philosophy-grid">
          {approaches.map(app => (
            <div key={app.id} className="philosophy-card" style={{ '--accent-bg': app.bgColor }}>
              <div className="phil-icon-wrapper" style={{ backgroundColor: app.bgColor }}>
                <span className="phil-emoji">{app.emoji}</span>
              </div>
              <span className="phil-subtitle" style={{ color: app.badgeColor }}>{app.subtitle}</span>
              <h3 className="phil-title">{app.title}</h3>
              <p className="phil-desc">{app.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
