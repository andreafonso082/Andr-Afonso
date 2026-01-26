import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Briefcase, Users, HardHat, GraduationCap, GripHorizontal } from 'lucide-react';
import CTAButton from '../components/CTAButton';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

// Helper icons
const ZapIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const StarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;

const About: React.FC = () => {
  const { t } = useLanguage();
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      // Calculate the scrollable width: Total content width - Visible container width
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, [t.about.timeline]); // Recalculate if timeline data changes

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
      <SEO 
        title={t.seo.about.title} 
        description={t.seo.about.description} 
      />

      {/* 1. HEADER / HERO */}
      <div className="bg-corporate py-16 mb-0 text-center text-white relative">
        <div className="container mx-auto px-4 md:px-12 relative z-10">
          <h1 className="text-3xl md:text-4xl font-normal font-heading mb-4">{t.about.heroTitle}</h1>
          <p className="text-gray-300 max-w-2xl mx-auto font-light text-base md:text-lg">
            {t.about.heroDesc}
          </p>
        </div>
        {/* Background Element */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
           <div className="absolute -right-20 -top-20 w-96 h-96 bg-brand-light rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* 2. AWARDS & CERTIFICATIONS (High Relevance/Trust) */}
      <section className="bg-white py-12 md:py-16 mb-0 border-b border-gray-100">
         <div className="container mx-auto px-4 md:px-12">
            <div className="text-center mb-10 md:mb-12">
               <h2 className="text-2xl md:text-3xl font-normal text-corporate mb-4 font-heading">{t.about.awards.title}</h2>
               <p className="text-gray-500 max-w-2xl mx-auto">{t.about.awards.subtitle}</p>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-24">
               {/* PME Líder Mockup/Placeholder */}
               <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.1 }}
                 className="flex flex-col items-center"
               >
                  <img 
                    src="https://placehold.co/200x200/0056b3/white?text=PME+Lider" 
                    alt="PME Líder" 
                    className="h-24 md:h-32 w-auto mb-4 hover:scale-105 transition-transform duration-300 object-contain"
                  />
                  <h3 className="font-bold text-corporate text-lg">PME Líder</h3>
                  <p className="text-xs text-gray-400 text-center max-w-[200px]">
                    {t.about.awards.list[0].desc}
                  </p>
               </motion.div>

               {/* PME Excelência Mockup/Placeholder */}
               <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.3 }}
                 className="flex flex-col items-center"
               >
                  <img 
                    src="https://placehold.co/200x200/FFC107/black?text=PME+Excelencia" 
                    alt="PME Excelência" 
                    className="h-24 md:h-32 w-auto mb-4 hover:scale-105 transition-transform duration-300 object-contain"
                  />
                  <h3 className="font-bold text-corporate text-lg">PME Excelência</h3>
                  <p className="text-xs text-gray-400 text-center max-w-[200px]">
                    {t.about.awards.list[1].desc}
                  </p>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 3. TEAM (Human Connection) */}
      <section className="bg-detail py-16 md:py-20 relative overflow-hidden mb-16">
         <div className="container mx-auto px-4 md:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
               
               {/* Image Side */}
               <motion.div 
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6 }}
                 className="w-full lg:w-1/2 relative"
               >
                  <div className="absolute top-4 left-4 w-full h-full border-2 border-corporate rounded-lg z-0"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2064&auto=format&fit=crop" 
                    alt="Equipa Joaquim & Fernandes" 
                    className="relative z-10 rounded-lg shadow-xl w-full object-cover h-[300px] md:h-[400px]"
                  />
                  {/* Floating Badge */}
                  <div className="absolute -bottom-6 -right-6 bg-accent text-white p-4 md:p-6 rounded shadow-lg z-20 hidden md:block">
                     <span className="block text-3xl md:text-4xl font-normal font-heading">40</span>
                     <span className="text-xs uppercase tracking-widest">Anos de Experiência</span>
                  </div>
               </motion.div>

               {/* Text Side */}
               <div className="w-full lg:w-1/2">
                  <motion.div
                     initial={{ opacity: 0, x: 50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                  >
                     <h4 className="text-brand-light font-normal uppercase tracking-widest text-xs md:text-sm mb-2">{t.about.teamSection.title}</h4>
                     <h2 className="text-2xl md:text-4xl font-normal text-corporate mb-6 font-heading leading-tight">
                        {t.about.teamSection.subtitle}
                     </h2>
                     <p className="text-gray-600 mb-8 leading-relaxed font-body">
                        {t.about.teamSection.description}
                     </p>
                     
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8">
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

      {/* 4. TIMELINE (Interactive Depth) */}
      <div className="container mx-auto px-4 md:px-12 mb-24">
        
        <div className="text-center mb-8">
            <h2 className="text-2xl font-normal text-corporate font-heading">O Nosso Percurso</h2>
        </div>

        {/* Draggable Hint */}
        <div className="flex items-center justify-center gap-2 text-gray-400 mb-8 animate-pulse">
            <GripHorizontal size={20} />
            <span className="text-xs uppercase tracking-widest">Arraste para explorar</span>
        </div>

        {/* Horizontal Timeline Container */}
        <div ref={carouselRef} className="cursor-grab active:cursor-grabbing overflow-hidden">
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
            className="flex items-center min-h-[450px] pl-4 md:pl-12"
          >
            {t.about.timeline.map((event: any, index: number) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex-shrink-0 w-[280px] md:w-[400px] flex flex-col items-center justify-center h-full group">
                  
                  {/* The Horizontal Line Segment */}
                  <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 group-last:bg-gradient-to-r group-last:from-gray-100 group-last:to-transparent"></div>
                  
                  {/* The Dot / Node */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-accent rounded-full border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                    {getIcon(index)}
                  </div>

                  {/* Content Card - Alternating Top/Bottom */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`
                      relative w-[90%] bg-white p-6 rounded shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-light transition-all duration-300 z-20
                      ${isEven ? 'mb-24 md:mb-32' : 'mt-24 md:mt-32'}
                    `}
                  >
                     {/* Connector Line to the main axis */}
                     <div className={`
                       absolute left-1/2 -translate-x-1/2 w-0.5 h-8 md:h-12 bg-brand-light/50
                       ${isEven ? '-bottom-8 md:-bottom-12' : '-top-8 md:-top-12'}
                     `}></div>

                    <span className="inline-block px-3 py-1 bg-brand-light/20 text-accent font-bold rounded text-sm mb-3">
                      {event.year}
                    </span>
                    <h3 className="text-xl font-normal text-corporate mb-2 font-heading">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 font-body text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
            
            {/* Extra padding at the end to ensure last item isn't cut off */}
            <div className="w-12 flex-shrink-0"></div>
          </motion.div>
        </div>
      </div>

      {/* 5. CLOSING / CTA Section - Centered with Blue Background */}
      <div className="w-full py-16 bg-[#3B455B] md:bg-[linear-gradient(105deg,#3B455B_60%,#252B3B_60.1%)] text-center">
        <div className="container mx-auto px-4 md:px-12">
           <h2 className="text-2xl md:text-3xl font-normal text-white mb-2 font-heading uppercase tracking-wide">
             {t.about.closingTitle}
           </h2>
           <p className="text-gray-300 max-w-xl mx-auto mb-8 text-lg">
             {t.about.closingDesc}
           </p>
           <CTAButton 
             to="/recrutamento" 
             text={t.about.closingCta} 
             variant="outline"
             className="text-white border-white hover:bg-white hover:text-[#3B455B]"
           />
        </div>
      </div>

    </div>
  );
};

export default About;