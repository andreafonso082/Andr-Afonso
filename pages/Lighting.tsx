import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Zap, PartyPopper, Building, Activity, Star, CheckCircle } from 'lucide-react';
import CTAButton from '../components/CTAButton';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

const Lighting: React.FC = () => {
  const { t } = useLanguage();

  // Defensive guard against undefined translations
  if (!t || !t.lighting) {
    return null;
  }

  // Helper to assign a specific image to each index
  const getImage = (index: number) => {
    switch(index) {
        case 0: return "https://images.unsplash.com/photo-1576692139045-c583f66c3c6f?q=80&w=2070&auto=format&fit=crop"; // Festive/Christmas
        case 1: return "https://images.unsplash.com/photo-1495539406979-bf61750d38ad?q=80&w=2070&auto=format&fit=crop"; // Public/Street
        case 2: return "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop"; // Architectural
        case 3: return "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"; // Sports
        default: return "https://picsum.photos/seed/lighting/800/600";
    }
  };

  return (
    <div className="pt-24 pb-12 bg-white overflow-hidden">
      <SEO 
        title={t.seo.lighting?.title || "Iluminação Profissional | J&F"} 
        description={t.seo.lighting?.description || "Soluções de Iluminação Festiva, Pública e Arquitetural."} 
      />

      {/* 1. HEADER / HERO (Standardized) */}
      <div className="bg-corporate py-16 mb-16 text-center text-white relative">
        <div className="container mx-auto px-4 md:px-12 relative z-10">
          <h1 className="text-3xl md:text-4xl font-normal font-heading mb-4">{t.lighting.heroTitle}</h1>
          <p className="text-gray-300 max-w-2xl mx-auto font-light text-base md:text-lg">
            {t.lighting.heroDesc}
          </p>
        </div>
        {/* Background Element */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
           <div className="absolute -right-20 -top-20 w-96 h-96 bg-brand-light rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* 2. INTRO */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2">
             <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
             >
               <h2 className="text-3xl md:text-4xl font-normal text-corporate mb-8 leading-tight">
                 {t.lighting.introTitle}
               </h2>
               <div className="w-24 h-1 bg-accent mb-8"></div>
               <p className="text-lg text-gray-600 leading-relaxed font-body">
                 {t.lighting.introDesc}
               </p>
               <div className="mt-8 flex gap-4">
                 <div className="flex flex-col">
                    <span className="text-3xl md:text-4xl font-bold text-accent">100+</span>
                    <span className="text-xs uppercase text-gray-500 font-bold tracking-wider">{t.lighting.stat1}</span>
                 </div>
                 <div className="w-px bg-gray-200 mx-4"></div>
                 <div className="flex flex-col">
                    <span className="text-3xl md:text-4xl font-bold text-brand-light">15k</span>
                    <span className="text-xs uppercase text-gray-500 font-bold tracking-wider">{t.lighting.stat2}</span>
                 </div>
               </div>
             </motion.div>
          </div>
          <div className="w-full lg:w-1/2 relative">
             <div className="absolute -inset-4 bg-brand-light/20 rounded-lg blur-xl transform -rotate-2"></div>
             <img 
               src="https://images.unsplash.com/photo-1562916172-23c2a6132711?q=80&w=2070&auto=format&fit=crop" 
               alt="Festive Lighting" 
               className="relative rounded-lg shadow-2xl z-10 w-full h-auto"
             />
          </div>
        </div>
      </section>

      {/* 3. LIGHTING TYPES SECTIONS (Alternating) */}
      <section className="bg-white">
        {t.lighting.types.map((type: any, index: number) => (
          <div 
            key={index} 
            className={`py-20 md:py-28 overflow-hidden ${index % 2 === 0 ? 'bg-detail' : 'bg-white'}`}
          >
            <div className="container mx-auto px-4 md:px-12">
              <div className={`flex flex-col gap-12 lg:gap-24 items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                
                {/* Image Section */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-full lg:w-1/2"
                >
                  <div className="relative group">
                    <div className={`absolute top-4 ${index % 2 === 0 ? 'left-4' : 'right-4'} w-full h-full border-2 border-accent rounded-lg z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2`}></div>
                    <img 
                      src={getImage(index)} 
                      alt={type.title} 
                      className="relative z-10 w-full h-[300px] md:h-[450px] object-cover rounded-lg shadow-xl"
                    />
                  </div>
                </motion.div>

                {/* Text Content */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full lg:w-1/2"
                >
                  <h3 className="text-3xl md:text-4xl font-normal text-corporate mb-6 font-heading">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8 text-justify">
                    {type.desc}
                  </p>
                  
                  {type.applications && (
                    <div className="bg-white border border-gray-100 p-6 rounded-lg shadow-sm">
                      <h4 className="font-bold text-corporate mb-4 uppercase text-xs tracking-widest flex items-center gap-2">
                        {type.applicationsTitle || "Onde aplicamos"}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {type.applications.map((app: string, i: number) => (
                          <div key={i} className="flex items-center gap-3">
                            <CheckCircle size={18} className="text-accent shrink-0" />
                            <span className="text-sm text-gray-700">{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>

              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 4. INNOVATION HIGHLIGHT */}
      <section className="py-20 md:py-28 bg-corporate text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
         
         <div className="container mx-auto px-4 md:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
               <div className="w-full lg:w-1/2">
                  <div className="inline-block bg-accent px-3 py-1 text-xs font-bold uppercase tracking-widest rounded mb-6">
                    Engineering + Art
                  </div>
                  <h2 className="text-3xl md:text-5xl font-normal font-heading mb-6">
                    {t.lighting.innovationTitle}
                  </h2>
                  <p className="text-gray-400 text-lg mb-8 font-light">
                    {t.lighting.innovationDesc}
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                       <Lightbulb className="text-brand-light mt-1 shrink-0" />
                       <div>
                         <h4 className="font-normal text-white text-lg font-heading">LEDs de Alta Eficiência</h4>
                         <p className="text-gray-500 text-sm">Tecnologia que garante menor consumo e maior durabilidade.</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <Zap className="text-brand-light mt-1 shrink-0" />
                       <div>
                         <h4 className="font-normal text-white text-lg font-heading">Sistemas de Telegestão</h4>
                         <p className="text-gray-500 text-sm">Controlo remoto de luminárias públicas para gestão inteligente.</p>
                       </div>
                    </div>
                  </div>
               </div>
               
               <div className="w-full lg:w-1/2">
                  <div className="relative bg-gray-800 rounded-xl p-2 border border-gray-700 shadow-2xl">
                     <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent rounded-full blur-3xl opacity-20"></div>
                     <img 
                       src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop" 
                       alt="Architectural Lighting" 
                       className="rounded-lg w-full h-auto opacity-90"
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 5. CTA */}
      <section className="py-20 md:py-28 bg-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="bg-gradient-to-br from-detail to-white border border-gray-100 p-8 md:p-12 rounded-2xl shadow-xl max-w-4xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-normal text-corporate mb-4">{t.lighting.ctaTitle}</h2>
            <p className="text-gray-600 mb-8 text-lg">{t.lighting.ctaDesc}</p>
            <CTAButton to="/contact?subject=orcamento&interest=lighting" text={t.lighting.ctaButton} variant="primary" />
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Lighting;