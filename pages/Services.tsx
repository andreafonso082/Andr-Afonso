import React from 'react';
import { Zap, Car, Lightbulb, HardHat, Check } from 'lucide-react';
import CTAButton from '../components/CTAButton';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      id: "electricity",
      title: "Eletricidade e Redes",
      description: "Serviços completos de instalações elétricas de baixa e média tensão, manutenção e certificação.",
      icon: <Zap className="w-12 h-12 text-accent" />,
      details: ["Instalações Industriais", "Quadros Elétricos", "Domótica", "Manutenção Preventiva", "Certificações"],
      image: "https://picsum.photos/seed/electricity/800/600"
    },
    {
      id: "mobility",
      title: "Mobilidade Elétrica",
      description: "Soluções de carregamento para veículos elétricos adaptadas a espaços privados, públicos e condomínios.",
      icon: <Car className="w-12 h-12 text-accent" />,
      details: ["Wallboxes Domésticas", "Postos de Carregamento Rápido", "Gestão de Consumos", "Instalação em Condomínios"],
      image: "https://picsum.photos/seed/evcharging/800/600"
    },
    {
      id: "lighting",
      title: "Iluminação Festiva e Pública",
      description: "Projetos luminotécnicos que valorizam espaços urbanos e comerciais com eficiência energética.",
      icon: <Lightbulb className="w-12 h-12 text-accent" />,
      details: ["Iluminação de Natal", "Iluminação LED Viária", "Projetos Arquiteturais", "Eventos e Festividades"],
      image: "https://picsum.photos/seed/lights/800/600"
    },
    {
      id: "construction",
      title: "Construção e Manutenção",
      description: "Serviços de construção civil integrados para reabilitação e manutenção de edifícios.",
      icon: <HardHat className="w-12 h-12 text-accent" />,
      details: ["Remodelações Interiores", "Pinturas e Isolamentos", "Pladur e Divisórias", "Pequenas Obras"],
      image: "https://picsum.photos/seed/building/800/600"
    }
  ];

  return (
    <div className="pt-24 pb-12">
      <div className="bg-corporate py-16 mb-16 text-center text-white">
        <h1 className="text-4xl font-normal font-sans mb-4">Os Nossos Serviços</h1>
        <p className="text-gray-300 max-w-2xl mx-auto font-light">
          Soluções técnicas especializadas para responder aos desafios mais exigentes.
        </p>
      </div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col gap-24">
        {serviceCategories.map((service, index) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
          >
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute top-4 left-4 w-full h-full border-2 border-brand-light rounded-sm z-0 transform translate-x-2 translate-y-2 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300"></div>
              <img 
                src={service.image} 
                alt={service.title} 
                className="relative z-10 w-full rounded-sm shadow-lg grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2">
              <div className="mb-6">{service.icon}</div>
              <h2 className="text-3xl font-normal text-corporate mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-8 leading-relaxed font-body">
                {service.description}
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <span className="bg-detail p-1 rounded-full"><Check size={12} className="text-accent" /></span>
                    {detail}
                  </li>
                ))}
              </ul>

              <CTAButton to="/contact" text="Peça Orçamento" variant="primary" />
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-24 bg-detail py-16 text-center">
        <div className="container mx-auto px-6">
           <h3 className="text-2xl font-normal text-corporate mb-4">Não encontrou o que procura?</h3>
           <p className="text-gray-600 mb-8">Temos soluções personalizadas para cada caso.</p>
           <CTAButton to="/contact" text="Fale Connosco" variant="secondary" />
        </div>
      </div>
    </div>
  );
};

export default Services;