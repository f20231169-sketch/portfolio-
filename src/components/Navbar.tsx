import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'EDUCATION', href: '#education' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 transition-all duration-300 ${
        scrolled ? 'pt-2.5' : 'pt-5 sm:pt-6'
      }`}
    >
      <div
        className={`w-full max-w-6xl flex items-center justify-between rounded-full transition-all duration-300 ease-out ${
          scrolled
            ? 'py-2 sm:py-2.5 px-5 sm:px-7 bg-[#0b0c10]/90 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/70'
            : 'py-4 sm:py-4.5 px-6 sm:px-8 bg-transparent border border-white/5'
        }`}
      >
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className={`font-bold tracking-tight text-white font-display flex items-center gap-2 group transition-all duration-300 ${
            scrolled ? 'text-sm sm:text-base' : 'text-base sm:text-lg'
          }`}
          data-cursor="pointer"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
          <span>ANUSHKA</span>
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav
          className={`hidden md:flex items-center tracking-wider text-zinc-300 transition-all duration-300 ${
            scrolled ? 'gap-6 text-[11px]' : 'gap-8 text-xs'
          } font-semibold`}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                data-cursor="pointer"
                className={`relative py-1 transition-colors hover:text-white ${
                  isActive ? 'text-white' : 'text-zinc-400'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-violet-400 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary action button */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            data-cursor="pointer"
            className={`hidden sm:inline-flex items-center gap-1.5 font-semibold tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/15 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap ${
              scrolled ? 'px-3.5 py-1.5 text-[11px]' : 'px-4 py-2 text-xs'
            }`}
          >
            <span>LET&apos;S CONNECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-violet-300" />
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-300 hover:text-white md:hidden"
            aria-label="Toggle navigation menu"
            data-cursor="pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-16 p-6 rounded-2xl bg-[#0f1015]/95 backdrop-blur-xl border border-white/15 shadow-2xl flex flex-col gap-4 md:hidden z-50">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold tracking-wider text-zinc-300 hover:text-white py-2 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center justify-center gap-2 py-3 mt-2 text-xs font-semibold tracking-wider text-white bg-violet-600 rounded-full"
          >
            <span>LET&apos;S CONNECT</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
};
