import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, ArrowRight, MessageCircle } from 'lucide-react';
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
              <a href="https://www.facebook.com/JoaquimFernandes86?locale=pt_PT" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded hover:bg-accent transition-colors text-white" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded hover:bg-accent transition-colors text-white" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://www.instagram.com/joaquim_fernandes86/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded hover:bg-accent transition-colors text-white" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://wa.me/351937700906" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded hover:bg-accent transition-colors text-white" aria-label="WhatsApp">
                {/* Official WhatsApp Icon SVG */}
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
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
                <a href="tel:+351289790500" className="text-gray-400 hover:text-white transition-colors">+351 289 790 500</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-light shrink-0" />
                <a href="mailto:mail@joaquimfernandes.pt" className="text-gray-400 hover:text-white transition-colors">mail@joaquimfernandes.pt</a>
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