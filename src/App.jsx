import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustMarquee from './components/TrustMarquee';
import Accreditations from './components/Accreditations';
import About from './components/About';
import Programs from './components/Programs';
import DailyActivities from './components/DailyActivities';
import HomeGallery from './components/HomeGallery';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Alphabet from './components/Alphabet';
import Games from './components/Games';
import Admissions from './components/Admissions';
import CalendarSection from './components/CalendarSection';
import FAQ from './components/FAQ';
import Enquiry from './components/Enquiry';
import Contact from './components/Contact';
import Apply from './components/Apply';
import Clouds from './components/Clouds';
import Playground from './components/Playground';
import WhatsAppWidget from './components/WhatsAppWidget';
import StandalonePage from './components/StandalonePage';
import AdminPanel from './components/AdminPanel';
import NotFound from './components/NotFound';
import './App.css';

const Home = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('main > section');
    const revealAll = () => sections.forEach((section) => section.classList.add('in-view'));

    if (!('IntersectionObserver' in window)) {
      revealAll();
      return;
    }

    document.documentElement.classList.add('js-reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    sections.forEach((section) => observer.observe(section));

    // Safety net: guarantees nothing stays hidden if a section is scrolled past
    // without crossing the threshold (e.g. a deep-link jump straight to #contact)
    const fallback = setTimeout(revealAll, 2500);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
      // Without this, navigating to another route (e.g. /team) leaves main > section
      // permanently hidden there — .js-reveal stays on <html> with no observer left to reveal it.
      document.documentElement.classList.remove('js-reveal');
    };
  }, []);

  return (
    <>
      <Clouds />
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustMarquee />
        <Accreditations />
        <About />
        <Programs />
        <DailyActivities />
        <HomeGallery />
        <Testimonials />
        <FinalCTA />
        <Enquiry />
        <Admissions />
        <CalendarSection />
        <Contact />
        <Playground />
      </main>
      <WhatsAppWidget />
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <span className="footer-logo">🧸</span>
            <span className="footer-name">Happy Kids</span>
          </div>
          <p>© 2026 Happy Kids Play School. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
        <Route
          path="/alphabet"
          element={
            <StandalonePage title="English Alphabets | Happy Kids" description="See how Happy Kids teaches the English alphabet through play, from letter recognition to first words.">
              <Alphabet />
            </StandalonePage>
          }
        />
        <Route
          path="/games"
          element={
            <StandalonePage title="Games & Activities | Happy Kids" description="Explore the learning games and activities Happy Kids uses to make every day playful.">
              <Games />
            </StandalonePage>
          }
        />
        <Route
          path="/team"
          element={
            <StandalonePage title="Meet the Team | Happy Kids" description="Meet the certified educators behind Happy Kids Playschool.">
              <Team />
            </StandalonePage>
          }
        />
        <Route
          path="/gallery"
          element={
            <StandalonePage title="Gallery | Happy Kids" description="A look inside a day at Happy Kids Playschool — classrooms, activities and happy faces.">
              <Gallery />
            </StandalonePage>
          }
        />
        <Route
          path="/faq"
          element={
            <StandalonePage title="FAQs | Happy Kids" description="Answers to common questions about timings, fees, safety and admissions at Happy Kids Playschool.">
              <FAQ />
            </StandalonePage>
          }
        />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
