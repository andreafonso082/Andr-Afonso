import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
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
              Soluções integradas de eletricidade, construção e mobilidade elétrica. Impulsionamos o seu projeto com qualidade e segurança desde 1986.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-2 rounded hover:bg-accent transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded hover:bg-accent transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded hover:bg-accent transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-brand-light inline-block pb-1">Navegação</h4>
            <ul className="space-y-3 font-body text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-brand-light transition-colors">Início</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-brand-light transition-colors">Sobre Nós</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-brand-light transition-colors">Eletricidade</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-brand-light transition-colors">Mobilidade Elétrica</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-brand-light transition-colors">Construção Civil</Link></li>
              <li><Link to="/recrutamento" className="text-gray-400 hover:text-brand-light transition-colors">Recrutamento</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-brand-light transition-colors">Contactos</Link></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-brand-light inline-block pb-1">Contactos</h4>
            <ul className="space-y-4 font-body text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-light shrink-0 mt-1" />
                <span className="text-gray-400">Av. da Indústria, 123<br />Zona Industrial, Lisboa</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-light shrink-0" />
                <span className="text-gray-400">+351 210 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-light shrink-0" />
                <span className="text-gray-400">geral@joaquimefernandes.pt</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-brand-light inline-block pb-1">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Receba as últimas novidades e atualizações.</p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="O seu email" 
                className="bg-gray-800 text-white border border-gray-700 p-3 text-sm focus:outline-none focus:border-brand-light rounded-sm"
              />
              <button 
                type="submit" 
                className="bg-brand-light hover:bg-white text-corporate font-bold py-2 px-4 rounded-sm transition-colors text-sm uppercase flex items-center justify-center gap-2"
              >
                Subscrever <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-body">
          <p>&copy; {new Date().getFullYear()} Joaquim & Fernandes, Lda. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Política de Privacidade</a>
            <a href="#" className="hover:text-white">Termos e Condições</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;