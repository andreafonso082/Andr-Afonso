import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import CTAButton from '../components/CTAButton';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Obrigado pelo seu contacto! Entraremos em contacto brevemente.');
    // Here you would typically connect to a backend service
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="pt-24 pb-12 bg-white">
      {/* Header */}
      <div className="bg-corporate py-16 mb-16 text-center text-white">
        <h1 className="text-4xl font-normal font-sans mb-4">Contacte-nos</h1>
        <p className="text-gray-300 max-w-2xl mx-auto font-light">
          Estamos disponíveis para esclarecer dúvidas e apresentar propostas.
        </p>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info Side */}
          <div className="lg:w-1/3">
            <h2 className="text-2xl font-normal text-corporate mb-8 border-b-2 border-brand-light inline-block pb-2">
              Informações
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-detail p-3 rounded text-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-normal text-corporate mb-1">Morada</h3>
                  <p className="text-gray-600 text-sm">
                    Av. da Indústria, Lote 123<br />
                    2600-000 Zona Industrial<br />
                    Lisboa, Portugal
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-detail p-3 rounded text-accent">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-normal text-corporate mb-1">Telefone</h3>
                  <p className="text-gray-600 text-sm mb-1">+351 210 000 000</p>
                  <p className="text-gray-500 text-xs">(Chamada para rede fixa nacional)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-detail p-3 rounded text-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-normal text-corporate mb-1">Email</h3>
                  <p className="text-gray-600 text-sm">geral@joaquimefernandes.pt</p>
                  <p className="text-gray-600 text-sm">orcamentos@joaquimefernandes.pt</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-detail p-3 rounded text-accent">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-normal text-corporate mb-1">Horário</h3>
                  <p className="text-gray-600 text-sm">Segunda a Sexta: 09:00 - 18:00</p>
                  <p className="text-gray-600 text-sm">Sábado e Domingo: Encerrado</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-detail rounded border border-gray-200">
               <h4 className="font-bold text-corporate mb-2">Emergências?</h4>
               <p className="text-sm text-gray-600 mb-4">Para contratos de manutenção ativos, utilize a linha de apoio 24h.</p>
               <span className="font-bold text-accent text-lg">800 000 000</span>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-normal text-corporate mb-8 border-b-2 border-brand-light inline-block pb-2">
              Envie-nos uma mensagem
            </h2>
            
            <form onSubmit={handleSubmit} className="bg-white rounded shadow-sm border border-gray-100 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-300 rounded p-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-300 rounded p-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-300 rounded p-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">Assunto</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-300 rounded p-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  >
                    <option value="">Selecione um assunto...</option>
                    <option value="orcamento">Pedido de Orçamento</option>
                    <option value="informacao">Informação Geral</option>
                    <option value="recrutamento">Recrutamento</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-300 rounded p-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto bg-accent hover:bg-[#2A3345] text-white font-bold py-3 px-8 rounded shadow-lg uppercase tracking-widest text-sm transition-all duration-300 flex items-center justify-center gap-2"
              >
                Enviar Pedido <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-normal text-corporate mb-8">Localização</h2>
          <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden relative shadow-inner">
             {/* Iframe for Google Maps visualization (using a generic location for demo) */}
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.957585258671!2d-9.139336684654058!3d38.71666667959885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19347a508f773b%3A0x8e874934149e3739!2sLisboa!5e0!3m2!1spt-PT!2spt!4v1652885934521!5m2!1spt-PT!2spt" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Localização"
             ></iframe>
             {/* Overlay to ensure scrolling page works unless interacting directly */}
             <div className="absolute inset-0 pointer-events-none border-4 border-white/50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;