import React, { useState } from 'react';
import './CalendarSection.css';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const initialEvents = {
  '4-2026': [ // May 2026 (0-indexed month 4)
    { date: 15, title: 'Summer Camp Kickoff', type: 'special' },
    { date: 22, title: 'Parent-Teacher Meet', type: 'meeting' },
  ],
  '5-2026': [ // June
    { date: 5, title: 'Environment Day Art', type: 'fun' },
    { date: 18, title: 'Zoo Trip 🦁', type: 'trip' },
  ],
  '8-2026': [ // September
    { date: 1, title: 'First Day of School!', type: 'special' },
  ]
};

const CalendarSection = () => {
  const [currentMonth, setCurrentMonth] = useState(4); // Default to May
  const [currentYear, setCurrentYear] = useState(2026);
  const [eventsData, setEventsData] = useState(initialEvents);
  
  // Modal states: 'none', 'password', 'addEvent', 'manageEvents'
  const [activeModal, setActiveModal] = useState('none');
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  
  // New event form state
  const [newEvent, setNewEvent] = useState({ title: '', date: '', type: 'fun' });

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordInput === '1437') {
      setPasswordError(false);
      setPasswordInput('');
      setActiveModal('addEvent');
    } else {
      setPasswordError(true);
    }
  };

  const handleAddEventSubmit = (e) => {
    e.preventDefault();
    const dateNum = parseInt(newEvent.date);
    if (!dateNum || dateNum < 1 || dateNum > getDaysInMonth(currentMonth, currentYear)) {
      alert('Please enter a valid date for this month.');
      return;
    }
    
    const monthKey = `${currentMonth}-${currentYear}`;
    const newEventObj = {
      date: dateNum,
      title: newEvent.title,
      type: newEvent.type
    };

    setEventsData(prev => {
      const existing = prev[monthKey] || [];
      return {
        ...prev,
        [monthKey]: [...existing, newEventObj].sort((a, b) => a.date - b.date)
      };
    });

    // Reset and close
    setNewEvent({ title: '', date: '', type: 'fun' });
    setActiveModal('none');
  };

  const handleDeleteEvent = (index) => {
    const monthKey = `${currentMonth}-${currentYear}`;
    setEventsData(prev => {
      const existing = prev[monthKey] || [];
      return {
        ...prev,
        [monthKey]: existing.filter((_, i) => i !== index)
      };
    });
  };
  
  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
  
  const currentEvents = eventsData[`${currentMonth}-${currentYear}`] || [];

  const days = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    const hasEvent = currentEvents.some(e => e.date === i);
    days.push(
      <div key={`day-${i}`} className={`calendar-day ${hasEvent ? 'has-event' : ''}`}>
        <span className="day-number">{i}</span>
        {hasEvent && <span className="event-dot"></span>}
      </div>
    );
  }

  return (
    <section id="calendar" className="calendar-section section-padding">
      <div className="container">
        <div className="section-title">
          <span className="section-subtitle">UPCOMING</span>
          <h2>School Calendar 📅</h2>
        </div>

        <div className="calendar-layout">
          {/* Left Sidebar: Months */}
          <div className="calendar-sidebar-left">
            <h3 className="sidebar-title">Months</h3>
            <ul className="month-list">
              {months.map((month, index) => (
                <li 
                  key={month} 
                  className={`month-item ${index === currentMonth ? 'active' : ''}`}
                  onClick={() => setCurrentMonth(index)}
                >
                  {month}
                </li>
              ))}
            </ul>
          </div>

          {/* Center: Grid */}
          <div className="calendar-main">
            <div className="calendar-header">
              <h3>{months[currentMonth]} {currentYear}</h3>
              <div className="calendar-actions">
                <button className="btn-secondary small" onClick={() => setActiveModal('password')}>Add Event</button>
                <button className="btn-secondary small" onClick={() => setActiveModal('manageEvents')}>Manage Events</button>
              </div>
            </div>
            <div className="calendar-grid">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="calendar-weekday">{day}</div>
              ))}
              {days}
            </div>
          </div>

          {/* Right Sidebar: Events */}
          <div className="calendar-sidebar-right">
            <h3 className="sidebar-title">Events</h3>
            {currentEvents.length > 0 ? (
              <ul className="events-list">
                {currentEvents.map((evt, idx) => (
                  <li key={idx} className={`event-item type-${evt.type}`}>
                    <div className="event-date">
                      <span className="month-abbr">{months[currentMonth].substring(0,3)}</span>
                      <span className="date-num">{evt.date}</span>
                    </div>
                    <div className="event-details">
                      <p>{evt.title}</p>
                    </div>
                    <button 
                      className="delete-event-btn" 
                      onClick={() => handleDeleteEvent(idx)}
                      title="Delete Event"
                    >
                      🗑️
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="no-events">No events scheduled for this month.</p>
            )}
          </div>
        </div>
      </div>

      {/* Modals */}
      {activeModal !== 'none' && (
        <div className="calendar-modal-overlay" onClick={() => setActiveModal('none')}>
          <div className="calendar-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveModal('none')}>✖</button>
            
            {/* Password Modal */}
            {activeModal === 'password' && (
              <div className="modal-content text-center">
                <h3>Teacher Access 🔐</h3>
                <p>Please enter the teacher pin to add events.</p>
                <form onSubmit={handlePasswordSubmit} className="password-form">
                  <input 
                    type="password" 
                    placeholder="Enter Pin"
                    value={passwordInput}
                    onChange={e => setPasswordInput(e.target.value)}
                    autoFocus
                  />
                  {passwordError && <p className="error-text">Incorrect Pin!</p>}
                  <button type="submit" className="btn-primary">Unlock</button>
                </form>
              </div>
            )}

            {/* Add Event Modal */}
            {activeModal === 'addEvent' && (
              <div className="modal-content">
                <h3>Add New Event 📅</h3>
                <p>Adding event for <strong>{months[currentMonth]} {currentYear}</strong></p>
                <form onSubmit={handleAddEventSubmit} className="add-event-form">
                  <div className="form-group">
                    <label>Event Title</label>
                    <input 
                      type="text" 
                      required 
                      value={newEvent.title}
                      onChange={e => setNewEvent({...newEvent, title: e.target.value})}
                      placeholder="e.g., Parent-Teacher Meet" 
                    />
                  </div>
                  <div className="form-group">
                    <label>Date (Number)</label>
                    <input 
                      type="number" 
                      required 
                      min="1" 
                      max={getDaysInMonth(currentMonth, currentYear)}
                      value={newEvent.date}
                      onChange={e => setNewEvent({...newEvent, date: e.target.value})}
                      placeholder="e.g., 15" 
                    />
                  </div>
                  <div className="form-group">
                    <label>Event Type</label>
                    <select 
                      value={newEvent.type}
                      onChange={e => setNewEvent({...newEvent, type: e.target.value})}
                    >
                      <option value="fun">Fun & Activities</option>
                      <option value="special">Special Occasion</option>
                      <option value="meeting">Meetings</option>
                    </select>
                  </div>
                  <button type="submit" className="btn-primary" style={{marginTop: '16px'}}>Save Event ✨</button>
                </form>
              </div>
            )}

            {/* Manage Events Modal */}
            {activeModal === 'manageEvents' && (
              <div className="modal-content">
                <h3>Manage Events 📝</h3>
                <p>Showing all events for <strong>{months[currentMonth]} {currentYear}</strong>. Anyone can view these details.</p>
                
                {currentEvents.length > 0 ? (
                  <ul className="manage-events-list">
                    {currentEvents.map((evt, idx) => (
                      <li key={idx} className="manage-event-item">
                        <div className="manage-date">{evt.date} {months[currentMonth]}</div>
                        <div className="manage-info">
                          <strong>{evt.title}</strong>
                          <span className={`badge badge-${evt.type}`}>{evt.type}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="no-events-box">
                    No events found for this month!
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default CalendarSection;
