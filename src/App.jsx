import React, { useState, useRef } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-100 text-gray-900 font-sans">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <main className="w-full">
        <HeroSection scrollToSection={scrollToSection} aboutRef={aboutRef} />
        <About ref={aboutRef} />
        <Services />
        <Team />
        <Contact ref={contactRef} />
      </main>
      <Footer />
    </div>
  );
};

export default App;