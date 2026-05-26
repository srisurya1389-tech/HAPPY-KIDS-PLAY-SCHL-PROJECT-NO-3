import React, { useState } from 'react';
import './DanceYoga.css';

const DanceYoga = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activity, setActivity] = useState('');
  const [level, setLevel] = useState('');

  const openModal = (defaultActivity) => {
    setActivity(defaultActivity);
    setLevel('');
    setIsModalOpen(true);
  };

  const handleApply = (e) => {
    e.preventDefault();
    if (!activity || !level) {
      alert("Please select both an activity and a level!");
      return;
    }
    alert(`Successfully applied for ${level} ${activity}!`);
    setIsModalOpen(false);
  };

  return (
    <section id="dance-yoga" className="dance-yoga-section section-padding">
      <div className="container">
        <div className="section-title">
          <span className="section-subtitle">TOWN SPECIAL</span>
          <h2>Mindfulness & Movement 🧘‍♀️💃</h2>
        </div>

        <div className="dy-layout">
          {/* Left Side: Flow */}
          <div className="dy-curriculum">
            <h3>Flow:</h3>
            <ul className="dy-flow-list">
              <li><span className="dy-month">Month 1–2</span> ➔ Basic yoga poses, breathing exercises.</li>
              <li><span className="dy-month">Month 3–4</span> ➔ Simple dance steps, rhythm practice.</li>
              <li><span className="dy-month">Month 5–6</span> ➔ Group yoga, meditation, cultural dance.</li>
              <li><span className="dy-month">Month 7–8</span> ➔ Stage performance prep, freestyle dance.</li>
              <li><span className="dy-month">Month 9–10</span> ➔ Yoga for focus, advanced dance moves.</li>
              <li><span className="dy-month">Month 11–12</span> ➔ Annual showcase event.</li>
            </ul>
          </div>

          {/* Right Side: Apply Cards */}
          <div className="dy-apply-zone">
            <div className="dy-card yoga-card">
              <div className="dy-icon">🧘‍♀️</div>
              <h3>Yoga</h3>
              <p>Improve focus, flexibility, and calm breathing.</p>
              <button className="btn-primary yoga-btn" onClick={() => openModal('yoga')}>
                Apply for Yoga
              </button>
            </div>
            
            <div className="dy-card dance-card">
              <div className="dy-icon">💃</div>
              <h3>Dance</h3>
              <p>Boost motor skills, rhythm, and creative expression.</p>
              <button className="btn-primary dance-btn" onClick={() => openModal('dance')}>
                Apply for Dance
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {isModalOpen && (
        <div className="dy-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="dy-modal" onClick={e => e.stopPropagation()}>
            <button className="dy-close" onClick={() => setIsModalOpen(false)}>✖</button>
            <h2>Enroll in Town Special 🌟</h2>
            <p className="dy-modal-desc">Please choose only ONE activity for the term.</p>
            
            <form onSubmit={handleApply} className="dy-form">
              <div className="form-group">
                <label>1. Select Activity</label>
                <div className="dy-radio-group">
                  <label className={`dy-radio ${activity === 'yoga' ? 'selected yoga-sel' : ''}`}>
                    <input 
                      type="radio" 
                      name="activity" 
                      value="yoga" 
                      checked={activity === 'yoga'} 
                      onChange={() => setActivity('yoga')} 
                    />
                    🧘‍♀️ Yoga
                  </label>
                  <label className={`dy-radio ${activity === 'dance' ? 'selected dance-sel' : ''}`}>
                    <input 
                      type="radio" 
                      name="activity" 
                      value="dance" 
                      checked={activity === 'dance'} 
                      onChange={() => setActivity('dance')} 
                    />
                    💃 Dance
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label>2. Select Level</label>
                <select 
                  className="dy-select" 
                  value={level} 
                  onChange={(e) => setLevel(e.target.value)}
                  required
                >
                  <option value="" disabled>-- Choose Level --</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Primary">Primary</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Pro">Pro</option>
                </select>
              </div>

              <button type="submit" className="btn-primary dy-submit">Confirm Application</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default DanceYoga;
