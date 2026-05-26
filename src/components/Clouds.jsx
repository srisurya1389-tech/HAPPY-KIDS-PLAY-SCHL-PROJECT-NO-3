import React from 'react';
import './Clouds.css';

const CloudSVG = ({ className }) => (
  <svg className={`cloud-svg ${className}`} viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
    <path fill="#ffffff" d="M140,40 c0,-20 -20,-30 -40,-20 c-10,-20 -40,-20 -50,0 c-20,-5 -30,15 -20,30 c-15,10 -10,40 15,40 h90 c20,0 25,-20 15,-30 c15,-10 10,-35 -10,-20 z"/>
  </svg>
);

const Clouds = () => {
  return (
    <div className="clouds-container" aria-hidden="true">
      <div className="cloud-group left-clouds">
        <CloudSVG className="cloud c-1" />
        <CloudSVG className="cloud c-2" />
        <CloudSVG className="cloud c-3" />
      </div>
      <div className="cloud-group right-clouds">
        <CloudSVG className="cloud c-4" />
        <CloudSVG className="cloud c-5" />
      </div>
    </div>
  );
};

export default Clouds;
