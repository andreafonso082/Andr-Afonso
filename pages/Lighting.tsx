import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Zap, PartyPopper, Building, Activity, Star } from 'lucide-react';
import CTAButton from '../components/CTAButton';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

const Lighting: React.FC = () => {
  const { t } = useLanguage();

  // Defensive guard against undefined translations
  if (!t || !t.lighting) {
    return null;
  }

  const icons = [
    <PartyPopper className="w-12 h-12 mb-4 text-brand-light" />,
    <Zap className="w-12 h-12 mb-4 text-brand-light" />,
    <Building className="w-12 h-12 mb-4 text-brand-light" />,
    <Activity className="w-12 h-12 mb-4 text-brand-light" />
  ];

  return (
    <div className="pt-24 pb-12 bg-white overflow-hidden">
      <SEO 
        title={t.seo.lighting?.title || "Iluminação Profissional | J&F"} 
        description={t.seo.lighting?.description || "Soluções de Iluminação Festiva, Pública e Arquitetural."} 
      />

      {/* 1. HERO */}
      <div className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-corporate">
        <div className="absolute inset-0 z-0">
          {/* Use an image of lights or night city */}
          <img 
            src="https://images.unsplash.com/photo-1517457210348-703079e57d4b?q=80&w=2070&auto=format&fit=crop" 
            alt="Lighting Solutions" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-corporate via-corporate/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 text-sm font-mono mb-6 backdrop-blur-sm">
              <Star size={14} className="animate-pulse" />
              LIGHTING & SMART SOLUTIONS
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal font-heading text-white mb-6 tracking-tight leading-none">
              {t.lighting.heroTitle}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              {t.lighting.heroDesc}
            </p>
          </motion.div>
        </div>
      </div>

      {/* 2. INTRO */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
             <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
             >
               <h2 className="text-4xl font-normal text-corporate mb-8 leading-tight">
                 {t.lighting.introTitle}
               </h2>
               <div className="w-24 h-1 bg-accent mb-8"></div>
               <p className="text-lg text-gray-600 leading-relaxed font-body">
                 {t.lighting.introDesc}
               </p>
               <div className="mt-8 flex gap-4">
                 <div className="flex flex-col">
                    <span className="text-4xl font-bold text-accent">100+</span>
                    <span className="text-xs uppercase text-gray-500 font-bold tracking-wider">{t.lighting.stat1}</span>
                 </div>
                 <div className="w-px bg-gray-200 mx-4"></div>
                 <div className="flex flex-col">
                    <span className="text-4xl font-bold text-brand-light">15k</span>
                    <span className="text-xs uppercase text-gray-500 font-bold tracking-wider">{t.lighting.stat2}</span>
                 </div>
               </div>
             </motion.div>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="absolute -inset-4 bg-yellow-400/20 rounded-lg blur-xl transform -rotate-2"></div>
             <img 
               src="https://images.unsplash.com/photo-1562916172-23c2a6132711?q=80&w=2070&auto=format&fit=crop" 
               alt="Festive Lighting" 
               className="relative rounded-lg shadow-2xl z-10"
             />
          </div>
        </div>
      </section>

      {/* 3. LIGHTING TYPES GRID */}
      <section className="py-24 bg-detail relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-light/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.lighting.types.map((type: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-accent transition-all duration-300 group"
              >
                <div className="bg-detail w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-corporate group-hover:scale-110 transition-all duration-300">
                  {React.cloneElement(icons[index] || <Lightbulb />, { className: "w-8 h-8 text-accent group-hover:text-yellow-400 transition-colors" })}
                </div>
                <h3 className="text-xl font-normal text-corporate mb-4 group-hover:text-accent transition-colors">
                  {type.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {type.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INNOVATION HIGHLIGHT */}
      <section className="py-24 bg-corporate text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
         
         <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
               <div className="lg:w-1/2">
                  <div className="inline-block bg-accent px-3 py-1 text-xs font-bold uppercase tracking-widest rounded mb-6">
                    Engineering + Art
                  </div>
                  <h2 className="text-4xl md:text-5xl font-normal font-heading mb-6">
                    {t.lighting.innovationTitle}
                  </h2>
                  <p className="text-gray-400 text-lg mb-8 font-light">
                    {t.lighting.innovationDesc}
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                       <Lightbulb className="text-yellow-400 mt-1" />
                       <div>
                         <h4 className="font-normal text-white text-lg font-heading">LEDs de Alta Eficiência</h4>
                         <p className="text-gray-500 text-sm">Tecnologia que garante menor consumo e maior durabilidade.</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <Zap className="text-brand-light mt-1" />
                       <div>
                         <h4 className="font-normal text-white text-lg font-heading">Sistemas de Telegestão</h4>
                         <p className="text-gray-500 text-sm">Controlo remoto de luminárias públicas para gestão inteligente.</p>
                       </div>
                    </div>
                  </div>
               </div>
               
               <div className="lg:w-1/2 w-full">
                  <div className="relative bg-gray-800 rounded-xl p-2 border border-gray-700 shadow-2xl">
                     <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-500 rounded-full blur-3xl opacity-20"></div>
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
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-6">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="bg-gradient-to-br from-detail to-white border border-gray-100 p-12 rounded-2xl shadow-xl max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-normal text-corporate mb-4">{t.lighting.ctaTitle}</h2>
            <p className="text-gray-600 mb-8 text-lg">{t.lighting.ctaDesc}</p>
            <CTAButton to="/contact" text={t.lighting.ctaButton} variant="primary" />
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Lighting;