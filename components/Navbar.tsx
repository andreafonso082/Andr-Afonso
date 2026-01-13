import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Sobre Nós', path: '/about' },
    { name: 'Serviços', path: '/services' },
    { name: 'Recrutamento', path: '/recrutamento' },
    { name: 'Contactos', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo Area */}
        <Link to="/" className="flex items-center gap-2 group" aria-label="Joaquim & Fernandes - Início">
          <div className="hover:scale-105 transition-transform duration-300">
            <Logo className="h-16 w-16 md:h-20 md:w-20 shadow-sm rounded-full" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-semibold text-sm uppercase tracking-wide transition-colors hover:text-brand-light ${
                location.pathname === link.path 
                  ? 'text-brand-light' 
                  : (isScrolled ? 'text-corporate' : 'text-white drop-shadow-md')
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-accent hover:bg-[#2A3345] text-white font-bold py-2 px-6 rounded-sm transition-colors uppercase text-xs tracking-widest shadow-lg border-b-2 border-transparent hover:border-brand-light"
          >
            Peça Orçamento
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-corporate bg-white/90 p-2 rounded shadow-sm"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col py-4 px-6 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="py-3 text-corporate font-semibold border-b border-gray-100 last:border-0 hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-4 bg-accent text-center text-white font-bold py-3 rounded shadow-md uppercase text-sm"
          >
            Peça Orçamento
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;