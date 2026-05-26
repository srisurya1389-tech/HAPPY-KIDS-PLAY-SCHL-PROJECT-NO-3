import React, { useState, useRef, useEffect } from 'react';
import './Gallery.css';

// Import images or use paths
const img1 = 'https://plain-apac-prod-public.komododecks.com/202605/26/7hzdGiCCF8xQYIR5f1su/image.jpg';
const img2 = 'https://plain-apac-prod-public.komododecks.com/202605/26/w2gAZqxf3IN4AG1jatpH/image.jpg';
const img3 = 'https://plain-apac-prod-public.komododecks.com/202605/26/Ullj7ZZ2hIc6NRZc66x9/image.jpg';
const img4 = 'https://plain-apac-prod-public.komododecks.com/202605/26/bZ5nAn4Gml4TMRvbPyqw/image.jpg';

const getYouTubeVideoId = (url) => {
  if (!url) return '';
  const trimmed = url.trim();
  try {
    const parsed = new URL(trimmed);
    const host = parsed.hostname.replace(/^www\./, '');
    if (host === 'youtu.be') {
      return parsed.pathname.slice(1);
    }
    if (host === 'youtube.com' || host === 'm.youtube.com' || host === 'music.youtube.com') {
      if (parsed.searchParams.has('v')) {
        return parsed.searchParams.get('v');
      }
      if (parsed.pathname.startsWith('/embed/')) {
        return parsed.pathname.split('/embed/')[1].split('/')[0];
      }
    }
  } catch (error) {
    const match = trimmed.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|watch\?v=|v\/))([A-Za-z0-9_-]{11})/);
    if (match) return match[1];
  }
  return '';
};

const Gallery = () => {
  const [isWallOpen, setIsWallOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const wheelRef = useRef(null);
  const iframeRef = useRef(null);
  const featuredIframeRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const rotationRef = useRef(0);
  const targetSpeedRef = useRef(0);
  const reqRef = useRef(null);
  const youtubeVideoUrl = 'https://youtu.be/8l6giKak8NE?si=e__LvH3Wu6_Ts4mZ'; // User-provided YouTube link
  const videoId = getYouTubeVideoId(youtubeVideoUrl);
  const hasVideoUrl = Boolean(videoId);
  const baseVideoSrc = hasVideoUrl
    ? `https://www.youtube.com/embed/${videoId}?rel=0&enablejsapi=1`
    : '';
  const [activeVideoSrc, setActiveVideoSrc] = useState('');
  const [activeFeaturedSrc, setActiveFeaturedSrc] = useState('');

  const openVideo = () => {
    if (baseVideoSrc) setActiveVideoSrc(baseVideoSrc + '&autoplay=1');
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    // Clear src to stop playback, then close overlay
    setActiveVideoSrc('');
    setIsVideoOpen(false);
  };
  
  // 20 photos to make a full infinite circle
  const samplePhotos = Array(5).fill([img1, img2, img3, img4]).flat();
  const angleStep = 360 / samplePhotos.length; // 18 degrees

  const handleMouseMove = (e) => {
    if (!isWallOpen) return;
    const { clientX } = e;
    const { innerWidth } = window;
    
    // Normalized position from -1 to 1 (left to right)
    const normalized = (clientX / innerWidth - 0.5) * 2;
    // Map to speed: -1.5 to 1.5 degrees per frame
    targetSpeedRef.current = normalized * 1.5;
  };

  useEffect(() => {
    if (!isWallOpen) {
      targetSpeedRef.current = 0;
      if (reqRef.current) cancelAnimationFrame(reqRef.current);
      return;
    }

    let currentSpeed = 0;
    
    const animate = () => {
      // Smoothly accelerate/decelerate towards target speed
      currentSpeed += (targetSpeedRef.current - currentSpeed) * 0.05;
      rotationRef.current += currentSpeed;
      
      if (wheelRef.current) {
        wheelRef.current.style.transform = `rotate(${rotationRef.current}deg)`;
        
        // Calculate the active image that is closest to 0 degrees at the top
        let normalizedR = rotationRef.current % 360;
        if (normalizedR > 0) normalizedR -= 360; // Keep it in (-360, 0] range
        
        let activeIndex = Math.round(-normalizedR / angleStep);
        if (activeIndex === samplePhotos.length) activeIndex = 0;
        
        const children = wheelRef.current.children;
        for (let i = 0; i < children.length; i++) {
          if (i === activeIndex) {
            children[i].classList.add('active');
          } else {
            children[i].classList.remove('active');
          }
        }
      }
      
      reqRef.current = requestAnimationFrame(animate);
    };
    
    reqRef.current = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(reqRef.current);
  }, [isWallOpen, angleStep, samplePhotos.length]);

  // Do NOT auto-open video on page load. Featured video will load only when user clicks Resume.


  return (
    <section id="gallery" className="gallery section-padding">
      <div className="container">
        <div className="section-title">
          <span className="section-subtitle">GALLERY</span>
          <h2>Smiles, sparkles & sticky <br/> fingers 📸</h2>
        </div>

        <div className="gallery-grid">
          <div className="gallery-item">
            <img src={img1} alt="Classroom" />
          </div>
          <div className="gallery-item">
            <img src={img2} alt="Playground" />
          </div>
          <div className="gallery-item">
            <img src={img3} alt="Painting" />
          </div>
          <div className="gallery-item">
            <img src={img4} alt="Reading" />
          </div>
        </div>

        <div className="wall-of-smiles-section">
          <button className="btn-secondary wall-btn" onClick={() => setIsWallOpen(true)}>
            ✨ Wall of Smiles ✨
          </button>
        </div>

        <div className="school-story-section">
          <div className="school-story-content">
            <div className="school-story-text">
              <h3>School Story</h3>
              <p>
                Welcome to Happy Kids Playschool, where every child's journey is filled with joy, creativity, and discovery. 
                Our carefully designed programs nurture young minds through play-based learning, fostering curiosity, confidence, 
                and a lifelong love of learning. Watch our story and see how we create a warm, welcoming environment where 
                children thrive and grow.
              </p>
            </div>
            <button
              className="btn-primary school-story-watch-btn"
              onClick={() => setActiveFeaturedSrc(baseVideoSrc + `&autoplay=1&mute=${isMuted ? 1 : 0}`)}
            >
              Watch Video
            </button>
          </div>
        </div>

        <div className={`featured-video-section ${activeFeaturedSrc ? 'active' : ''}`}>
          {hasVideoUrl ? (
            <div className="featured-video-wrapper">
              {!activeFeaturedSrc && (
                <div style={{ textAlign: 'center', color: '#999', padding: '40px', fontSize: '0.95rem' }}>
                  Click "Watch Video" to start playing
                </div>
              )}

              {isMuted && activeFeaturedSrc && (
                <button
                  className="featured-unmute-btn"
                  onClick={() => {
                    if (featuredIframeRef.current?.contentWindow) {
                      featuredIframeRef.current.contentWindow.postMessage(
                        JSON.stringify({ event: 'command', func: 'unMute', args: [] }),
                        '*'
                      );
                    }
                    setIsMuted(false);
                  }}
                >
                  🔊 Unmute
                </button>
              )}

              <iframe
                ref={featuredIframeRef}
                className="featured-video-iframe"
                src={activeFeaturedSrc}
                title="Featured Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="featured-video-placeholder">Video not set yet</div>
          )}
        </div>
      </div>

      {/* Semicircle Popup Overlay */}
      <div className={`wall-overlay ${isWallOpen ? 'open' : ''}`} onClick={() => setIsWallOpen(false)}></div>
      
      <div 
        className={`wall-popup ${isWallOpen ? 'open' : ''}`} 
        onMouseMove={handleMouseMove}
      >
        <button className="close-wall-btn" onClick={() => setIsWallOpen(false)}>✖</button>
        
        <div className="wall-decorations">
          <span className="decor emoji-1">😄</span>
          <span className="decor emoji-2">💖</span>
          <span className="decor emoji-3">✨</span>
          <span className="decor emoji-4">🥰</span>
          <span className="decor emoji-5">🌟</span>
          <span className="decor emoji-6">😊</span>
        </div>

        <h3 className="wall-popup-title">Wall of Smiles</h3>
        
        <div className="wheel-container">
          {/* Wheel rotation is completely handled by requestAnimationFrame now */}
          <div className="wheel" ref={wheelRef}>
            {samplePhotos.map((photo, i) => {
              // Full 360 circle
              const angle = i * angleStep;
              
              return (
                <div 
                  key={i} 
                  className="wheel-item"
                  style={{ '--item-angle': `${angle}deg` }}
                >
                  <img src={photo} alt={`Smile ${i + 1}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Video Player Overlay */}
      <div className={`video-overlay ${isVideoOpen ? 'open' : ''}`} onClick={closeVideo}></div>
      <div className={`video-popup ${isVideoOpen ? 'open' : ''}`}>
        <div className="video-player-shell">
          <div className="video-popup-header">
            <button className="close-wall-btn" onClick={closeVideo}>✖</button>
          </div>
          <div className="video-popup-content">
            {hasVideoUrl ? (
              <iframe
                ref={iframeRef}
                className="video-frame"
                src={activeVideoSrc}
                title="Happy Kids Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="video-placeholder">
                <h3>Video link not set yet</h3>
                <p>Paste your YouTube watch or embed URL into <code>Gallery.jsx</code> in the <code>youtubeVideoUrl</code> constant.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
