import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t, language, setLanguage } = useLanguage();

  const isHome = location.pathname === '/';
  // Force solid navbar style if scrolled OR if we are NOT on the home page
  const showSolidNav = isScrolled || !isHome;

  // Handle scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.services, path: '/services' },
    { name: t.nav.lighting, path: '/lighting' },
    { name: t.nav.partners, path: '/partners' },
    { name: t.nav.careers, path: '/recrutamento' },
    { name: t.nav.contact, path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        showSolidNav ? 'bg-white shadow-md py-3' : 'bg-transparent py-4 md:py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-12 flex justify-between items-center">
        {/* Logo Area */}
        <Link to="/" className="flex items-center gap-2 group" aria-label="Joaquim & Fernandes">
          <div className="hover:scale-105 transition-transform duration-300">
            {/* Adjusted logo size for mobile vs desktop */}
            <Logo className="h-14 w-14 md:h-20 md:w-20" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-semibold text-xs xl:text-sm uppercase tracking-wide transition-colors hover:text-brand-light ${
                location.pathname === link.path 
                  ? 'text-brand-light' 
                  : (showSolidNav ? 'text-corporate' : 'text-white drop-shadow-md')
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Language Switcher */}
          <button 
            onClick={toggleLanguage}
            className={`flex items-center gap-1 font-bold text-xs uppercase py-1 px-3 border rounded transition-all ${
               showSolidNav 
                ? 'border-corporate text-corporate hover:bg-corporate hover:text-white' 
                : 'border-white text-white hover:bg-white hover:text-corporate drop-shadow-md'
            }`}
          >
            <Globe size={14} />
            {language === 'pt' ? 'EN' : 'PT'}
          </button>

          <Link
            to="/contact"
            className="bg-accent hover:bg-[#2A3345] text-white font-bold py-2 px-6 rounded-sm transition-colors uppercase text-xs tracking-widest shadow-lg border-b-2 border-transparent hover:border-brand-light"
          >
            {t.nav.quote}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-3">
          <button 
            onClick={toggleLanguage}
            className={`flex items-center gap-1 font-bold text-xs uppercase py-1.5 px-2.5 border rounded backdrop-blur-sm ${
              showSolidNav 
                ? 'border-corporate text-corporate' 
                : 'border-white/50 text-white bg-black/20'
            }`}
          >
             {language === 'pt' ? 'EN' : 'PT'}
          </button>

          <button
            className={`p-2 rounded shadow-sm transition-colors ${
              showSolidNav ? 'text-corporate bg-gray-100' : 'text-white bg-black/20 backdrop-blur-sm'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col max-h-[85vh] overflow-y-auto animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="py-4 px-6 text-corporate font-semibold border-b border-gray-100 last:border-0 hover:text-brand-light hover:bg-gray-50 transition-colors text-sm uppercase tracking-wider"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="p-6 bg-gray-50">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-accent hover:bg-[#2A3345] text-center text-white font-bold py-3 rounded shadow-md uppercase text-sm tracking-widest transition-colors"
            >
              {t.nav.quote}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;