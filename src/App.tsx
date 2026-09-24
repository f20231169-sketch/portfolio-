import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { MagneticCursor } from './components/MagneticCursor';
import { ScrollProgress } from './components/ScrollProgress';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const scrollPos = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection('hero');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0b0e] text-[#f4f4f0] selection:bg-violet-600 selection:text-white flex flex-col font-sans relative cursor-default">
      {/* Slim, Elegant Global Scroll Depth Progress Indicator */}
      <ScrollProgress />

      {/* Premium Magnetic Cursor Effect */}
      <MagneticCursor />

      {/* Top Floating Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Flow */}
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
