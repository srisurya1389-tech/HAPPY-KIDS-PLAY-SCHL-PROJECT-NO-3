import React, { useState } from 'react';
import ProgramDetailsModal from './ProgramDetailsModal';
import './Programs.css';

const Programs = () => {
  const [activeModalProgram, setActiveModalProgram] = useState(null);

  const programsList = [
    {
      id: 1,
      icon: '🧸',
      title: 'Nursery',
      age: 'Ages 2 – 3',
      features: [
        'Circle time songs',
        'Sensory play',
        'Story time',
        'Creative messy art',
        'Nap & snack'
      ]
    },
    {
      id: 2,
      icon: '🎨',
      title: 'LKG',
      age: 'Ages 3 – 4',
      features: [
        'Phonics & rhymes',
        'Number play',
        'Puzzles & blocks',
        'Outdoor games',
        'Music & dance'
      ]
    },
    {
      id: 3,
      icon: '🚀',
      title: 'UKG',
      age: 'Ages 4 – 6',
      features: [
        'Reading & writing',
        'Hands-on math',
        'Science discovery',
        'Show & tell',
        'Sports day'
      ]
    }
  ];

  return (
    <section id="programs" className="programs section-padding">
      <div className="container">
        <div className="section-title">
          <span className="section-subtitle">OUR PROGRAMS</span>
          <h2>Big adventures for tiny <br/> explorers</h2>
        </div>

        <div className="programs-grid">
          {programsList.map(program => (
            <div key={program.id} className="program-card">
              <div className="program-icon-wrapper">
                <span className="program-icon">{program.icon}</span>
              </div>
              <div className="program-header">
                <h3>{program.title}</h3>
                <span className="program-age">{program.age}</span>
              </div>
              <p className="program-desc">A day full of joy includes:</p>
              <ul className="program-features">
                {program.features.map((feature, index) => (
                  <li key={index}>✨ {feature}</li>
                ))}
              </ul>
              <button 
                className="btn-primary program-btn"
                onClick={() => setActiveModalProgram(program.title)}
              >
                View Plan 📅
              </button>
            </div>
          ))}
        </div>
      </div>

      <ProgramDetailsModal 
        isOpen={activeModalProgram !== null} 
        onClose={() => setActiveModalProgram(null)} 
        programName={activeModalProgram} 
      />
    </section>
  );
};

export default Programs;
