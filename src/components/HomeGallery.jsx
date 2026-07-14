import React from 'react';
import { Link } from 'react-router-dom';
import outdoorPlay from '../assets/gallery_2_1779636620471.png';
import artTime from '../assets/gallery_3_1779636635738.png';
import storyTime from '../assets/gallery_4_1779636651525.png';
import classroomFun from '../assets/gallery_1_1779636589238.png';
import './HomeGallery.css';

const PHOTOS = [
  { src: outdoorPlay, alt: 'Kids playing outdoors' },
  { src: artTime, alt: 'Classroom art time' },
  { src: storyTime, alt: 'Story time together' },
  { src: classroomFun, alt: 'A colorful Happy Kids classroom' }
];

const HomeGallery = () => (
  <section id="home-gallery" className="home-gallery section-padding">
    <div className="container">
      <div className="section-title">
        <span className="section-subtitle">GALLERY</span>
        <h2>Moments from our classrooms</h2>
      </div>

      <div className="home-gallery-grid">
        {PHOTOS.map((photo) => (
          <img key={photo.alt} src={photo.src} alt={photo.alt} className="home-gallery-img" />
        ))}
      </div>

      <div className="home-gallery-more">
        <Link to="/gallery" className="btn-secondary">See the full gallery</Link>
      </div>
    </div>
  </section>
);

export default HomeGallery;
