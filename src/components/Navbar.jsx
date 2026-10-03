import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar({ isDark, toggleDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Events', href: '#events' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#FDFBF7]/85 dark:bg-[#1A1214]/85 border-b border-[#E0B9C0]/30 dark:border-[#4A3237]/40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Brand Logo with S Monogram */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-[#F6E8EA] dark:bg-[#3D262C] flex items-center justify-center border border-[#E0B9C0]/60 dark:border-[#4A3237] group-hover:scale-105 transition-transform shadow-2xs">
            <span className="font-serif font-bold text-lg text-[#B36470] dark:text-[#E8A2AB] leading-none select-none">
              S
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-tight text-[#3D262A] dark:text-[#FBF7F5] group-hover:text-[#B36470] dark:group-hover:text-[#E8A2AB] transition-colors">
              Srika S
            </span>
            <span className="text-[10px] font-mono text-[#7C6267] dark:text-[#C7B4B8] tracking-widest uppercase -mt-1">
              Frontend Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#6E555A] dark:text-[#D4C4C7] hover:text-[#B36470] dark:hover:text-[#E8A2AB] transition-colors py-1 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C87D87] dark:bg-[#E8A2AB] transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark and light mode"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="p-2.5 rounded-full bg-[#F6E8EA] dark:bg-[#281B1E] text-[#B36470] dark:text-[#E8A2AB] border border-[#E0B9C0]/50 dark:border-[#4A3237] hover:bg-[#E0B9C0]/40 dark:hover:bg-[#3D262C] transition-all focus:outline-none focus:ring-2 focus:ring-[#C87D87]"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 rounded-lg text-[#3D262A] dark:text-[#FBF7F5] hover:bg-[#F6E8EA] dark:hover:bg-[#281B1E] focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 bg-[#FDFBF7] dark:bg-[#1A1214] border-b border-[#E0B9C0]/40 dark:border-[#4A3237] space-y-2 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-[#3D262A] dark:text-[#FBF7F5] hover:bg-[#F6E8EA] dark:hover:bg-[#281B1E] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
