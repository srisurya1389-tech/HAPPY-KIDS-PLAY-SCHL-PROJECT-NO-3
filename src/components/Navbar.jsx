import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import './Navbar.css';

const PRIMARY_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#programs', label: 'Programs' },
  { href: '#admissions', label: 'Admissions' },
  { href: '#enquiry', label: 'Enquire' },
  { href: '#contact', label: 'Contact' }
];

// These live on their own pages (not the homepage scroll) — reachable only via this dropdown
const MORE_LINKS = [
  { to: '/alphabet', label: 'ABCs' },
  { to: '/games', label: 'Games' },
  { to: '/team', label: 'Team' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/faq', label: 'FAQ' }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setMoreOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!moreOpen) return;
    const handleClickOutside = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [moreOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setMoreOpen(false);
  };

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="container navbar-container">
        <div className="logo" onClick={() => navigate('/')}>
          <span className="logo-icon">🧸</span>
          <span className="logo-text">HAPPY KIDS</span>
        </div>

        {isHomePage && (
          <ul className="nav-links">
            {PRIMARY_LINKS.map((link) => (
              <li key={link.href}><a href={link.href} onClick={closeMenu}>{link.label}</a></li>
            ))}

            <li className="nav-more" ref={moreRef}>
              <button
                className="nav-more-btn"
                aria-expanded={moreOpen}
                onClick={() => setMoreOpen((open) => !open)}
              >
                More
                <span className={`nav-more-chevron ${moreOpen ? 'open' : ''}`}>▾</span>
              </button>
              <ul className={`nav-more-dropdown ${moreOpen ? 'open' : ''}`}>
                {MORE_LINKS.map((link) => (
                  <li key={link.to}><Link to={link.to} onClick={closeMenu}>{link.label}</Link></li>
                ))}
              </ul>
            </li>

            <li className="nav-links-mobile-apply">
              <button className="btn-primary" onClick={() => { closeMenu(); navigate('/apply'); }}>Apply Now</button>
            </li>
          </ul>
        )}

        <div className="nav-actions">
          <button className="btn-primary" onClick={() => navigate('/apply')}>Apply Now</button>
        </div>

        {isHomePage && (
          <button
            className="nav-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}
      </div>
      </nav>
    </>
  );
};

export default Navbar;
