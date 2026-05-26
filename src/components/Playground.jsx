import React from 'react';
import './Playground.css';

const Playground = () => {
  return (
    <div className="playground-wrapper" aria-hidden="true">
      {/* Background layer */}
      <div className="pg-ground"></div>
      
      <div className="pg-scene">
        {/* Left Side */}
        <div className="pg-left">
          
          <div className="pg-flowers">
            <svg className="pg-svg-flowers anim-sway" viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg">
              <path d="M40,60 Q35,40 20,30" fill="none" stroke="#10B981" strokeWidth="3" />
              <circle cx="20" cy="30" r="6" fill="#FF6B98" />
              <path d="M40,60 Q45,35 60,25" fill="none" stroke="#10B981" strokeWidth="3" />
              <circle cx="60" cy="25" r="8" fill="#FFB703" />
              <path d="M40,60 Q40,30 40,15" fill="none" stroke="#10B981" strokeWidth="4" />
              <circle cx="40" cy="15" r="10" fill="#00B4D8" />
            </svg>
          </div>
          
          <div className="pg-seesaw">
            <svg className="pg-svg-seesaw" viewBox="0 0 160 80" xmlns="http://www.w3.org/2000/svg">
              <polygon points="70,80 90,80 80,50" fill="#FFB703" />
              <g className="anim-seesaw">
                <rect x="10" y="45" width="140" height="6" fill="#00B4D8" rx="3" />
                <circle cx="25" cy="25" r="10" fill="#FFCBA4" />
                <rect x="18" y="35" width="14" height="12" fill="#FF6B98" rx="3" />
                <circle cx="135" cy="25" r="10" fill="#FFCBA4" />
                <rect x="128" y="35" width="14" height="12" fill="#8ECAE6" rx="3" />
              </g>
            </svg>
          </div>
          
          <div className="pg-swing">
            <svg className="pg-svg-swing" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
              <path d="M20,120 L40,20 L80,20 L100,120" stroke="#FF6B98" strokeWidth="6" fill="none" />
              <line x1="40" y1="20" x2="80" y2="20" stroke="#FF6B98" strokeWidth="8" />
              <g className="anim-swing">
                <line x1="60" y1="20" x2="60" y2="90" stroke="#888" strokeWidth="2" />
                <rect x="45" y="90" width="30" height="6" fill="#00B4D8" rx="3" />
                <circle cx="60" cy="70" r="12" fill="#FFCBA4" />
                <rect x="52" y="82" width="16" height="15" fill="#FFB703" rx="4" />
              </g>
            </svg>
          </div>
          
        </div>
        
        {/* Right Side */}
        <div className="pg-right">
          
          <div className="pg-slide">
            <svg className="pg-svg-slide" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
              <line x1="90" y1="120" x2="90" y2="40" stroke="#FFB703" strokeWidth="6" />
              <line x1="90" y1="40" x2="20" y2="120" stroke="#00B4D8" strokeWidth="8" strokeLinecap="round" />
              <line x1="70" y1="120" x2="90" y2="40" stroke="#ddd" strokeWidth="4" strokeDasharray="4 4" />
              <g className="anim-slide">
                <circle cx="85" cy="30" r="10" fill="#FFCBA4" />
                <rect x="78" y="40" width="14" height="14" fill="#FF6B98" rx="4" />
              </g>
            </svg>
          </div>
          
          <div className="pg-pinwheel">
            <svg className="pg-svg-pinwheel" viewBox="0 0 60 100" xmlns="http://www.w3.org/2000/svg">
              <line x1="30" y1="40" x2="30" y2="100" stroke="#8ECAE6" strokeWidth="4" />
              <g className="anim-spin" style={{ transformOrigin: '30px 40px' }}>
                <path d="M30,40 Q45,20 30,0 Q15,20 30,40" fill="#FF6B98" />
                <path d="M30,40 Q50,55 70,40 Q50,25 30,40" fill="#FFB703" />
                <path d="M30,40 Q15,60 30,80 Q45,60 30,40" fill="#00B4D8" />
                <path d="M30,40 Q10,25 -10,40 Q10,55 30,40" fill="#FFB703" />
                <circle cx="30" cy="40" r="4" fill="#FFF" />
              </g>
            </svg>
          </div>
          
          <div className="pg-ball">
            <svg className="pg-svg-ball" viewBox="0 0 40 100" xmlns="http://www.w3.org/2000/svg">
              <g className="anim-bounce">
                <circle cx="20" cy="80" r="15" fill="#FFB703" />
                <path d="M10,70 Q20,90 30,70" fill="none" stroke="#FFF" strokeWidth="2" />
              </g>
            </svg>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Playground;
