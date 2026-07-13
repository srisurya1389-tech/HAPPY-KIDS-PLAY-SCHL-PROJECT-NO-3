import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './StandalonePage.css';

const StandalonePage = ({ children }) => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main className="standalone-page">
        <div className="container">
          <button className="standalone-back" onClick={() => navigate('/')}>← Back to Home</button>
        </div>
        {children}
      </main>
      <footer className="footer">
        <div className="container">
          <p>© 2026 Happy Kids Playschool. Learning with Joy! ✨</p>
        </div>
      </footer>
    </>
  );
};

export default StandalonePage;
