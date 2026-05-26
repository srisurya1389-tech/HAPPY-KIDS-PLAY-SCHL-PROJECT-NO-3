import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Gallery from './components/Gallery';
import Admissions from './components/Admissions';
import CalendarSection from './components/CalendarSection';
import Contact from './components/Contact';
import Apply from './components/Apply';
import Clouds from './components/Clouds';
import Playground from './components/Playground';
import DanceYoga from './components/DanceYoga';
import './App.css';

const Home = () => (
  <>
    <Clouds />
    <Navbar />
    <main>
      <Hero />
      <About />
      <Programs />
      <DanceYoga />
      <Gallery />
      <Admissions />
      <CalendarSection />
      <Contact />
      <Playground />
    </main>
    <footer className="footer">
      <div className="container">
        <p>© 2026 Happy Kids Playschool. Learning with Joy! ✨</p>
      </div>
    </footer>
  </>
);

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </div>
  );
}

export default App;
