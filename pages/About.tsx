import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Briefcase, Users } from 'lucide-react';
import CTAButton from '../components/CTAButton';

// Helper icons
const ZapIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const StarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;

const timelineEvents = [
  {
    year: "1986",
    title: "A Fundação",
    description: "Joaquim & Fernandes inicia a sua atividade como uma pequena empresa familiar focada em instalações elétricas residenciais na zona de Lisboa.",
    icon: <Calendar size={20} className="text-white" />
  },
  {
    year: "1998",
    title: "Expansão para Indústria",
    description: "Com o crescimento da equipa, a empresa expande os serviços para o setor industrial, especializando-se em quadros elétricos de média tensão.",
    icon: <Briefcase size={20} className="text-white" />
  },
  {
    year: "2005",
    title: "Departamento de Construção",
    description: "Respondendo às necessidades dos clientes, abrimos o departamento de construção civil para oferecer soluções chave-na-mão.",
    icon: <Users size={20} className="text-white" />
  },
  {
    year: "2015",
    title: "Certificação de Qualidade",
    description: "Obtenção das certificações ISO 9001, cimentando o nosso compromisso com o rigor e a segurança em todas as obras.",
    icon: <Award size={20} className="text-white" />
  },
  {
    year: "2020",
    title: "Mobilidade Elétrica",
    description: "Lançamento da divisão dedicada à mobilidade elétrica, instalando postos de carregamento em todo o território nacional.",
    icon: <ZapIcon />, // Custom icon defined below or generic
  },
  {
    year: "Hoje",
    title: "Líderes de Mercado",
    description: "Continuamos a inovar, mantendo os valores de confiança que nos definem há quase 40 anos.",
    icon: <StarIcon />
  }
];

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-12 bg-white overflow-hidden">
      
      {/* Header */}
      <div className="bg-corporate py-16 mb-20 text-center text-white relative">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <h1 className="text-4xl font-normal font-sans mb-4">A Nossa História</h1>
          <p className="text-gray-300 max-w-2xl mx-auto font-light">
            Quase quatro décadas de engenharia, construção e inovação. Conheça o percurso que nos trouxe até aqui.
          </p>
        </div>
        {/* Background Element */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
           <div className="absolute -right-20 -top-20 w-96 h-96 bg-brand-light rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        
        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          {/* Mobile: Line on left. Desktop: Line in center */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gray-100 rounded-full">
            <div className="w-full h-full bg-gradient-to-b from-accent via-brand-light to-gray-100 opacity-30"></div>
          </div>

          {timelineEvents.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`flex items-center justify-between w-full mb-12 md:mb-24 ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                
                {/* Empty Space for Desktop (to push content to side) */}
                <div className="hidden md:block w-5/12"></div>

                {/* Center Node (Timeline Dot) */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-accent rounded-full border-4 border-white shadow-lg">
                  {event.icon}
                </div>

                {/* Content Card */}
                <motion.div 
                  initial={{ opacity: 0, x: window.innerWidth >= 768 ? (isEven ? 50 : -50) : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-[calc(100%-80px)] ml-20 md:ml-0 md:w-5/12 bg-white p-6 md:p-8 rounded shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-light transition-all duration-300 relative group"
                >
                  {/* Decorator line for mobile connecting to main line */}
                  <div className="md:hidden absolute top-6 -left-12 w-10 h-0.5 bg-brand-light/50"></div>
                  
                  <span className="inline-block px-3 py-1 bg-brand-light/20 text-accent font-bold rounded text-sm mb-3">
                    {event.year}
                  </span>
                  <h3 className="text-xl md:text-2xl font-normal text-corporate mb-3 font-sans">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 font-body text-sm leading-relaxed">
                    {event.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Team / Closing Section */}
        <div className="mt-24 text-center">
            <h2 className="text-3xl font-normal text-corporate mb-6">Pronto para fazer parte do futuro?</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              A nossa história continua a ser escrita todos os dias, em cada projeto que entregamos.
            </p>
            <CTAButton to="/contact" text="Trabalhe Connosco" variant="primary" />
        </div>

      </div>
    </div>
  );
};

export default About;