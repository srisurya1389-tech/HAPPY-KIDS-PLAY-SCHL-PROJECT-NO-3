import React, { useState } from 'react';
import ProgramDetailsModal from './ProgramDetailsModal';
import './Programs.css';

const Programs = () => {
  const [activeModalProgram, setActiveModalProgram] = useState(null);

  const programsList = [
    {
      id: 1,
      icon: '🧸',
      title: 'Tiny Tots',
      age: 'Ages 2 – 3',
      description: 'Sensory play, gentle songs and cuddly story time to build first words and trust.',
      schedule: 'Mon–Fri · 9am–12pm',
      color: '#FFF3BF',
      scheduleColor: '#946200'
    },
    {
      id: 2,
      icon: '🎨',
      title: 'Explorers',
      age: 'Ages 3 – 4',
      description: 'Art, music and outdoor play build confidence, colors, counting and sharing.',
      schedule: 'Mon–Fri · 9am–1pm',
      color: '#D0EBFF',
      scheduleColor: '#0B5A9C'
    },
    {
      id: 3,
      icon: '✏️',
      title: 'Kindergarten Prep',
      age: 'Ages 4 – 6',
      description: 'Letters, numbers, science experiments and teamwork to get ready for school.',
      schedule: 'Mon–Fri · 9am–2pm',
      color: '#FFE3E3',
      scheduleColor: '#C0392B'
    }
  ];

  return (
    <section id="programs" className="programs section-padding">
      <div className="container">
        <div className="section-title">
          <span className="section-subtitle">OUR PROGRAMS</span>
          <h2>Classes for every little age</h2>
          <p className="programs-intro">Each classroom is designed around how kids that age actually learn best.</p>
        </div>

        <div className="programs-grid">
          {programsList.map((program) => (
            <div key={program.id} className="program-card" style={{ borderColor: program.color }}>
              <div className="program-icon-wrapper" style={{ backgroundColor: program.color }}>
                <span className="program-icon">{program.icon}</span>
              </div>
              <div className="program-header">
                <h3>{program.title} · {program.age}</h3>
              </div>
              <p className="program-desc">{program.description}</p>
              <div className="program-schedule" style={{ color: program.scheduleColor }}>{program.schedule}</div>
              <button
                className="btn-secondary program-btn"
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
