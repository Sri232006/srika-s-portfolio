import React, { useState, useEffect } from 'react';
import OpeningIntro from './components/OpeningIntro';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StorySection from './components/StorySection';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Events from './components/Events';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    try {
      // 1. Check saved localStorage theme preference
      const savedTheme = localStorage.getItem('srika_portfolio_theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
    } catch (e) {}
    // 2. Default to system preference
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    try {
      if (isDark) {
        root.classList.add('dark');
        localStorage.setItem('srika_portfolio_theme', 'dark');
      } else {
        root.classList.remove('dark');
        localStorage.setItem('srika_portfolio_theme', 'light');
      }
    } catch (e) {}
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] dark:bg-[#1A1214] text-[#3D262A] dark:text-[#FBF7F5] selection:bg-[#F6E8EA] selection:text-[#B36470] dark:selection:bg-[#3D262C] dark:selection:text-[#F0B3BC] transition-colors duration-300 relative overflow-x-hidden">
      
      {/* Unique Curtain Opening Intro */}
      <OpeningIntro />

      {/* Main App Layout */}
      <div id="app-main-content" className="relative z-10">
        <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />
        
        <main>
          <Hero />
          <StorySection />
          <Skills />
          <Experience />
          <Projects />
          <Certificates />
          <Events />
          <Education />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}
