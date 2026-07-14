import React from 'react';
import './DailyActivities.css';

const ACTIVITIES = [
  { icon: '🗣️', color: '#FFD43B', title: 'Circle Time', desc: 'Songs, greetings and talking about the day ahead together.' },
  { icon: '🖌️', color: '#74C0FC', title: 'Art & Craft', desc: 'Painting, collage and clay to build fine motor skills.' },
  { icon: '🏃', color: '#FF922B', title: 'Outdoor Play', desc: 'Running, climbing and games on our safe, gated playground.' },
  { icon: '📖', color: '#FF6B6B', title: 'Story Time', desc: 'Read-alouds that build vocabulary and love of books.' },
  { icon: '🔢', color: '#69DB7C', title: 'Numbers & Letters', desc: 'Playful early-literacy and counting activities.' },
  { icon: '🎵', color: '#DA77F2', title: 'Music & Dance', desc: 'Rhythm, movement and instruments for self-expression.' },
  { icon: '🍽️', color: '#4DABF7', title: 'Snack & Rest', desc: 'Healthy snacks and a calm wind-down break.' },
  { icon: '🧩', color: '#FFA8A8', title: 'Sensory & Puzzle Play', desc: 'Building blocks, sand and puzzles to sharpen problem-solving.' }
];

const DailyActivities = () => (
  <section id="daily-activities" className="daily-activities section-padding">
    <div className="container">
      <div className="section-title">
        <span className="section-subtitle">A DAY AT HAPPY KIDS</span>
        <h2>What your child will actually do</h2>
        <p className="daily-activities-intro">
          Every day mixes movement, creativity and quiet learning — never just sitting still.
        </p>
      </div>

      <div className="daily-activities-grid">
        {ACTIVITIES.map((activity) => (
          <div key={activity.title} className="daily-activity-card">
            <div className="daily-activity-icon" style={{ backgroundColor: activity.color }}>
              {activity.icon}
            </div>
            <h3>{activity.title}</h3>
            <p>{activity.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DailyActivities;
