import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Accreditations from './components/Accreditations';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Programs from './components/Programs';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
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
import DanceYoga from './components/DanceYoga';
import SafetyFacilities from './components/SafetyFacilities';
import ParentResources from './components/ParentResources';
import KidsCorner from './components/KidsCorner';
import WhatsAppWidget from './components/WhatsAppWidget';
import StandalonePage from './components/StandalonePage';
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
      <main>
        <Hero />
        <Accreditations />
        <WhyChooseUs />
        <About />
        <Philosophy />
        <Programs />
        <DanceYoga />
        <SafetyFacilities />
        <Testimonials />
        <KidsCorner />
        <Admissions />
        <CalendarSection />
        <ParentResources />
        <Enquiry />
        <Contact />
        <Playground />
      </main>
      <WhatsAppWidget />
      <footer className="footer">
        <div className="container">
          <p>© 2026 Happy Kids Playschool. Learning with Joy! ✨</p>
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
        <Route path="/alphabet" element={<StandalonePage><Alphabet /></StandalonePage>} />
        <Route path="/games" element={<StandalonePage><Games /></StandalonePage>} />
        <Route path="/team" element={<StandalonePage><Team /></StandalonePage>} />
        <Route path="/gallery" element={<StandalonePage><Gallery /></StandalonePage>} />
        <Route path="/faq" element={<StandalonePage><FAQ /></StandalonePage>} />
      </Routes>
    </div>
  );
}

export default App;
