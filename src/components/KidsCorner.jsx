import React from 'react';
import './KidsCorner.css';

const KidsCorner = () => {
  const artworks = [
    {
      id: 1,
      title: '🌈 My Rainbow Tree',
      artist: 'Aiden Vance, Age 4',
      bgGradient: 'linear-gradient(135deg, #FFE4E6 0%, #E8E8FF 100%)',
      drawIcon: '🌳🌈'
    },
    {
      id: 2,
      title: '🐱 The Cosmic Cat',
      artist: 'Mia Cooper, Age 3',
      bgGradient: 'linear-gradient(135deg, #E0F7FA 0%, #FFE4D6 100%)',
      drawIcon: '🐱✨🚀'
    },
    {
      id: 3,
      title: '☀️ Happy Sunny Day',
      artist: 'Leo Rivera, Age 5',
      bgGradient: 'linear-gradient(135deg, #FFF3C4 0%, #D8F3DC 100%)',
      drawIcon: '🏡☀️🌻'
    }
  ];

  return (
    <section id="kidscorner" className="kids-corner section-padding">
      <div className="container">
        <div className="section-title">
          <span className="section-subtitle">KIDS CORNER</span>
          <h2>Sparkles, stars & masterpieces</h2>
        </div>

        <div className="kids-corner-layout">
          {/* Star of the Week Spotlight */}
          <div className="star-spotlight-card">
            <div className="spotlight-badge">👑 Star of the Week</div>
            <div className="spotlight-avatar-wrapper">
              <span className="spotlight-avatar">👦</span>
            </div>
            <div className="spotlight-info">
              <h3 className="spotlight-name">Liam Vance</h3>
              <span className="spotlight-meta">Age: 4 • LKG Class</span>
              <p className="spotlight-reason">
                "Liam was chosen as our Star of the Week for showing incredible kindness by helping his classmates clean up the block zone after playtime. He loves building tall rocket towers!"
              </p>
              <div className="spotlight-favorites">
                <span>🌟 Fav Game: Hide & Seek</span>
                <span>🎨 Fav Subject: Paint Crafting</span>
              </div>
            </div>
          </div>

          {/* Kid Masterpieces Gallery */}
          <div className="kids-gallery">
            <h3 className="gallery-header-title">🎨 Little Artists Gallery</h3>
            <div className="artworks-grid">
              {artworks.map(art => (
                <div 
                  key={art.id} 
                  className="artwork-card" 
                  style={{ background: art.bgGradient }}
                >
                  <div className="artwork-drawing">
                    <span className="artwork-icon">{art.drawIcon}</span>
                  </div>
                  <div className="artwork-info">
                    <h4>{art.title}</h4>
                    <span>By {art.artist}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KidsCorner;
