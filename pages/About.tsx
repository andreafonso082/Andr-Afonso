import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Briefcase, Users, HardHat, GraduationCap } from 'lucide-react';
import CTAButton from '../components/CTAButton';
import { useLanguage } from '../context/LanguageContext';

// Helper icons
const ZapIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const StarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;

const About: React.FC = () => {
  const { t } = useLanguage();

  const getIcon = (index: number) => {
    switch(index) {
        case 0: return <Calendar size={20} className="text-white" />;
        case 1: return <Briefcase size={20} className="text-white" />;
        case 2: return <Users size={20} className="text-white" />;
        case 3: return <Award size={20} className="text-white" />;
        case 4: return <ZapIcon />;
        default: return <StarIcon />;
    }
  };

  return (
    <div className="pt-24 pb-12 bg-white overflow-hidden">
      
      {/* Header */}
      <div className="bg-corporate py-16 mb-20 text-center text-white relative">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <h1 className="text-4xl font-normal font-heading mb-4">{t.about.heroTitle}</h1>
          <p className="text-gray-300 max-w-2xl mx-auto font-light">
            {t.about.heroDesc}
          </p>
        </div>
        {/* Background Element */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
           <div className="absolute -right-20 -top-20 w-96 h-96 bg-brand-light rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        
        {/* Timeline Container */}
        <div className="relative mb-32">
          {/* Vertical Line */}
          {/* Mobile: Line on left. Desktop: Line in center */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gray-100 rounded-full">
            <div className="w-full h-full bg-gradient-to-b from-accent via-brand-light to-gray-100 opacity-30"></div>
          </div>

          {t.about.timeline.map((event: any, index: number) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`flex items-center justify-between w-full mb-12 md:mb-24 ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                
                {/* Empty Space for Desktop (to push content to side) */}
                <div className="hidden md:block w-5/12"></div>

                {/* Center Node (Timeline Dot) */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-accent rounded-full border-4 border-white shadow-lg">
                  {getIcon(index)}
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
                  <h3 className="text-xl md:text-2xl font-normal text-corporate mb-3 font-heading">
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
      </div>

      {/* NEW SECTION: TEAM */}
      <section className="bg-detail py-20 relative overflow-hidden mb-24">
         <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
               
               {/* Image Side */}
               <motion.div 
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6 }}
                 className="lg:w-1/2 relative"
               >
                  <div className="absolute top-4 left-4 w-full h-full border-2 border-corporate rounded-lg z-0"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2064&auto=format&fit=crop" 
                    alt="Equipa Joaquim & Fernandes" 
                    className="relative z-10 rounded-lg shadow-xl w-full object-cover h-[400px]"
                  />
                  {/* Floating Badge */}
                  <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded shadow-lg z-20 hidden md:block">
                     <span className="block text-4xl font-normal font-heading">38</span>
                     <span className="text-xs uppercase tracking-widest">Anos de Experiência</span>
                  </div>
               </motion.div>

               {/* Text Side */}
               <div className="lg:w-1/2">
                  <motion.div
                     initial={{ opacity: 0, x: 50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                  >
                     <h4 className="text-brand-light font-normal uppercase tracking-widest text-sm mb-2">{t.about.teamSection.title}</h4>
                     <h2 className="text-3xl md:text-4xl font-normal text-corporate mb-6 font-heading leading-tight">
                        {t.about.teamSection.subtitle}
                     </h2>
                     <p className="text-gray-600 mb-8 leading-relaxed font-body">
                        {t.about.teamSection.description}
                     </p>
                     
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        <div className="flex items-start gap-3">
                           <div className="bg-white p-2 rounded shadow-sm text-accent">
                              <Users size={20} />
                           </div>
                           <div>
                              <h5 className="font-normal text-corporate text-sm">{t.about.teamSection.stat1}</h5>
                           </div>
                        </div>
                        <div className="flex items-start gap-3">
                           <div className="bg-white p-2 rounded shadow-sm text-accent">
                              <HardHat size={20} />
                           </div>
                           <div>
                              <h5 className="font-normal text-corporate text-sm">{t.about.teamSection.stat2}</h5>
                           </div>
                        </div>
                        <div className="flex items-start gap-3">
                           <div className="bg-white p-2 rounded shadow-sm text-accent">
                              <GraduationCap size={20} />
                           </div>
                           <div>
                              <h5 className="font-normal text-corporate text-sm">{t.about.teamSection.stat3}</h5>
                           </div>
                        </div>
                     </div>

                     <div className="p-6 bg-white rounded border-l-4 border-brand-light shadow-sm">
                        <p className="text-sm italic text-gray-500">"{t.about.teamSection.highlight}"</p>
                     </div>
                  </motion.div>
               </div>
            </div>
         </div>
      </section>

      {/* Closing / CTA Section */}
      <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-normal text-corporate mb-6">{t.about.closingTitle}</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            {t.about.closingDesc}
          </p>
          <CTAButton to="/recrutamento" text={t.about.closingCta} variant="primary" />
      </div>

    </div>
  );
};

export default About;