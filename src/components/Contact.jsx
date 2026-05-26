import React from 'react';
import './Contact.css';

const Contact = () => {
  // School address
  const schoolAddress = 'Happy Kids Play School, Beside SEB staton, Back Side RS MIne Multiplex, Beach Road, Kothapeta, Andhra Pradesh 533223';
  const phoneNumber = '8247389473'; // Use the updated phone number for WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20admissions.`;
  const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(schoolAddress)}&travelmode=driving`;
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(schoolAddress)}`;

  return (
    <section id="contact" className="contact section-padding">
      <div className="container contact-container">
        <div className="contact-info">
          <span className="section-subtitle">CONTACT US</span>
          <h2>Come say hello! 👋</h2>
          <p className="contact-intro">
            We'd love to meet you and your little one. Drop by, call, or message us on WhatsApp — we're always happy to chat.
          </p>

          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-icon address-icon">📍</div>
              <div className="contact-text">
                <strong>Address</strong>
                <span>{schoolAddress}</span>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon phone-icon">📞</div>
              <div className="contact-text">
                <strong>Phone</strong>
                <span>824-738-9473</span>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon whatsapp-icon">💬</div>
              <div className="contact-text">
                <strong>WhatsApp Us</strong>
                <span>Chat with us — we reply quickly!</span>
              </div>
            </div>
          </div>

          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary contact-btn">
            Send Message 💌
          </a>
        </div>
        <div className="contact-map">
          <div className="map-controls">
            <h4>Get Directions</h4>
            <div className="map-actions">
              <button
                className="btn-primary"
                onClick={() => window.open(mapsDirectionsUrl, '_blank')}
              >
                📍 Directions
              </button>
              <button
                className="btn-primary"
                onClick={() => window.open(mapsSearchUrl, '_blank')}
              >
                🚗 Start
              </button>
            </div>
          </div>

          <iframe 
            src="https://maps.google.com/maps?q=Happy%20Kids%20Play%20School%2C%20Beside%20SEB%20staton%2C%20Back%20Side%20RS%20MIne%20Multiplex%2C%20Beach%20Road%2C%20Kothapeta%2C%20Andhra%20Pradesh%20533223&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Happy Kids Playschool Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
