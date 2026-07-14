import React from 'react';
import './ProgramDetailsModal.css';

const programData = {
  'Tiny Tots': {
    icon: '🌱',
    subtitle: '(9 months active)',
    description: 'Academia: 12 months ➔ 9 months learning + 3 months holidays',
    flow: [
      { month: 'Months 1–3', desc: 'Sensory play, rhymes, circle time.' },
      { month: 'Months 4–6', desc: 'Storytelling, finger painting, color recognition.' },
      { month: 'Months 7–9', desc: 'Shapes, simple puzzles, outdoor play.' },
      { month: 'Months 10–12 (Holiday)', desc: 'Rest, family bonding, optional fun workshops.' }
    ]
  },
  'Explorers': {
    icon: '📘',
    subtitle: '(10 months active + 2 months summer holidays)',
    description: '',
    flow: [
      { month: 'Months 1–4', desc: 'Phonics, number games, picture books.' },
      { month: 'Months 5–6 (Summer Holidays)', desc: 'Dance classes, yoga sessions, art camp.' },
      { month: 'Months 7–10', desc: 'Writing practice, group activities, storytelling.' },
      { month: 'Months 11–12', desc: 'Revision, small stage performances, fun projects.' }
    ]
  },
  'Kindergarten Prep': {
    icon: '📖',
    subtitle: '(10 months active + 2 months holidays)',
    description: '',
    flow: [
      { month: 'Months 1–3', desc: 'Reading short words, basic math (addition/subtraction).' },
      { month: 'Months 4–6', desc: 'Science experiments, handwriting, group discussions.' },
      { month: 'Months 7–10', desc: 'Creative writing, role play, outdoor games.' },
      { month: 'Months 11–12 (Holiday)', desc: 'Dance, yoga, music, talent shows.' }
    ]
  }
};

const ProgramDetailsModal = ({ isOpen, onClose, programName }) => {
  if (!isOpen || !programData[programName]) return null;

  const data = programData[programName];

  return (
    <div className="pd-modal-overlay" onClick={onClose}>
      <div className="pd-modal-content" onClick={e => e.stopPropagation()}>
        <button className="pd-close-btn" onClick={onClose}>✖</button>
        
        <div className="pd-header">
          <h2>{data.icon} {programName} {data.subtitle}</h2>
          {data.description && <p>{data.description}</p>}
        </div>

        <div className="pd-grid">
          {/* Main Area: Learning Flow */}
          <div className="pd-learning-flow">
            <h3>Flow:</h3>
            <ol className="flow-list">
              {data.flow.map((item, index) => (
                <li key={index}>
                  <span className="flow-month">{item.month}</span> ➔ {item.desc}
                </li>
              ))}
            </ol>
          </div>

          {/* Right Side: Festivals */}
          <div className="pd-festivals">
            <h3>🎊 Festivals</h3>
            <ul className="festivals-list">
              <li>🎇 Diwali Celebration</li>
              <li>🎄 Christmas Party</li>
              <li>🪁 Sankranti Kites</li>
              <li>🎨 Holi Colors Day</li>
              <li>🎃 Halloween Dress-up</li>
            </ul>
          </div>

          {/* Bottom Area: Meetings & Events */}
          <div className="pd-meetings">
            <h3>🤝 School Events & Meetings</h3>
            <div className="meetings-list">
              <div className="meeting-card">
                <h4>Parent-Teacher Meet 1</h4>
                <p>End of Month 3. Discussing sensory progress and settling in.</p>
              </div>
              <div className="meeting-card">
                <h4>Parent-Teacher Meet 2</h4>
                <p>End of Month 6. Reviewing artistic expression and colors.</p>
              </div>
              <div className="meeting-card">
                <h4>Annual Day</h4>
                <p>Month 9. A grand showcase of children's learning and performance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetailsModal;
