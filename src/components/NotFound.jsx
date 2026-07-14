import React from 'react';
import { useNavigate } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();
  usePageMeta('Page Not Found | Happy Kids', 'The page you were looking for wandered off — head back to the Happy Kids homepage.');

  return (
    <div className="not-found">
      <div className="not-found-card">
        <span className="not-found-emoji">🧸</span>
        <h1>404</h1>
        <p>Oops! This page must have wandered off during playtime.</p>
        <button className="btn-primary" onClick={() => navigate('/')}>← Back to Home</button>
      </div>
    </div>
  );
};

export default NotFound;
