import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-corporate text-white pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-6 hover:opacity-90 transition-opacity" aria-label="Joaquim & Fernandes - Início">
               <Logo className="h-24 w-24" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-body">
              {t.footer.desc}
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/JoaquimFernandes86?locale=pt_PT" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded hover:bg-accent transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded hover:bg-accent transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://www.instagram.com/joaquim_fernandes86/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded hover:bg-accent transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-normal font-heading mb-6 border-b-2 border-brand-light inline-block pb-1">{t.footer.navTitle}</h4>
            <ul className="space-y-3 font-body text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-brand-light transition-colors">{t.nav.home}</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-brand-light transition-colors">{t.nav.about}</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-brand-light transition-colors">{t.nav.services}</Link></li>
              <li><Link to="/lighting" className="text-gray-400 hover:text-brand-light transition-colors">{t.nav.lighting}</Link></li>
              <li><Link to="/partners" className="text-gray-400 hover:text-brand-light transition-colors">{t.nav.partners}</Link></li>
              <li><Link to="/recrutamento" className="text-gray-400 hover:text-brand-light transition-colors">{t.nav.careers}</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-brand-light transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-lg font-normal font-heading mb-6 border-b-2 border-brand-light inline-block pb-1">{t.footer.contactTitle}</h4>
            <ul className="space-y-4 font-body text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-light shrink-0 mt-1" />
                <span className="text-gray-400">{t.common.address}<br />{t.common.city}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-light shrink-0" />
                <span className="text-gray-400">+351 289 790 500</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-light shrink-0" />
                <span className="text-gray-400">mail@joaquimfernandes.pt</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-normal font-heading mb-6 border-b-2 border-brand-light inline-block pb-1">{t.footer.newsletterTitle}</h4>
            <p className="text-gray-400 text-sm mb-4">{t.footer.newsletterDesc}</p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder={t.footer.placeholder}
                className="bg-gray-800 text-white border border-gray-700 p-3 text-sm focus:outline-none focus:border-brand-light rounded-sm"
              />
              <button 
                type="submit" 
                className="bg-brand-light hover:bg-white text-corporate font-bold py-2 px-4 rounded-sm transition-colors text-sm uppercase flex items-center justify-center gap-2"
              >
                {t.footer.subscribe} <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-body">
          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2 text-center md:text-left">
             <span>&copy; {new Date().getFullYear()} Joaquim & Fernandes, Lda. {t.footer.rights}</span>
             <span className="hidden md:inline text-gray-700">|</span>
             <span>
               {t.footer.designedBy} <a href="https://agencia-vela.com" target="_blank" rel="noopener noreferrer" className="text-brand-light hover:text-white transition-colors font-medium">Agência Vela</a>
             </span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0">
            <Link to="/quality-policy" className="hover:text-white transition-colors">{t.footer.quality}</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">{t.footer.privacy}</Link>
            <Link to="/terms" className="hover:text-white transition-colors">{t.footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;