import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Zap, CheckCircle, Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';
import CTAButton from '../components/CTAButton';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

// Images for the Festive Gallery
const festiveGalleryImages = [
  "https://images.unsplash.com/photo-1576692139045-c583f66c3c6f?q=80&w=2070&auto=format&fit=crop", // Main
  "https://images.unsplash.com/photo-1512389142860-9c449ded37fd?q=80&w=2070&auto=format&fit=crop", // Street
  "https://images.unsplash.com/photo-1543589077-47d81606c1bf?q=80&w=2070&auto=format&fit=crop", // Decor
  "https://images.unsplash.com/photo-1607024103632-62327c527786?q=80&w=2070&auto=format&fit=crop", // Mall
  "https://images.unsplash.com/photo-1482517967863-00e15c9b4499?q=80&w=2070&auto=format&fit=crop", // Sparkle
];

const Lighting: React.FC = () => {
  const { t } = useLanguage();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Defensive guard against undefined translations
  if (!t || !t.lighting) {
    return null;
  }

  // Prevent scrolling when gallery is open
  useEffect(() => {
    if (isGalleryOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isGalleryOpen]);

  // Gallery Navigation Handlers
  const openGallery = () => {
    setCurrentImageIndex(0);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => setIsGalleryOpen(false);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % festiveGalleryImages.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + festiveGalleryImages.length) % festiveGalleryImages.length);
  };

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
                      className="relative z-10 w-full h-[300px] md:h-[450px] object-cover rounded-lg shadow-xl cursor-pointer"
                      onClick={() => index === 0 && openGallery()} // Click image to open gallery too if index 0
                    />
                     {index === 0 && (
                      <div 
                        onClick={openGallery}
                        className="absolute bottom-4 right-4 z-20 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full cursor-pointer transition-colors backdrop-blur-sm"
                      >
                         <Camera size={20} />
                      </div>
                    )}
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
                    <div className="bg-white border border-gray-100 p-6 rounded-lg shadow-sm mb-8">
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

                  {/* GALLERY BUTTON - Only for Festive Lighting (index 0) */}
                  {index === 0 && (
                    <button
                      onClick={openGallery}
                      className="inline-flex items-center gap-2 bg-accent hover:bg-[#2A3345] text-white font-bold py-3 px-8 rounded-sm uppercase tracking-widest text-sm transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                    >
                       <Camera size={18} />
                       {t.common?.seeMore || "Ver Galeria"}
                    </button>
                  )}
                </motion.div>

              </div>
            </div>
          </div>
        ))}
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

      {/* FULL SCREEN GALLERY MODAL */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={closeGallery}
          >
            {/* Close Button */}
            <button 
              onClick={closeGallery} 
              className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-50 transition-colors"
            >
              <X size={32} />
            </button>

            {/* Navigation Buttons */}
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 z-50 transition-colors hidden md:block"
            >
              <ChevronLeft size={48} />
            </button>

            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 z-50 transition-colors hidden md:block"
            >
              <ChevronRight size={48} />
            </button>

            {/* Main Image */}
            <div className="relative w-full max-w-6xl h-full flex flex-col items-center justify-center pointer-events-none">
              <motion.img 
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={festiveGalleryImages[currentImageIndex]} 
                alt="Galeria Iluminação Festiva"
                className="max-h-[85vh] max-w-full object-contain shadow-2xl rounded-sm pointer-events-auto"
                onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing
              />
              
              {/* Counter / Caption */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm font-light tracking-widest bg-black/50 px-4 py-2 rounded-full backdrop-blur-md">
                 {currentImageIndex + 1} / {festiveGalleryImages.length}
              </div>
            </div>

            {/* Mobile Touch Area (Simple nav) */}
            <div className="md:hidden absolute inset-x-0 bottom-12 flex justify-center gap-8 pointer-events-none">
                <button onClick={prevImage} className="pointer-events-auto p-4 bg-white/10 rounded-full text-white backdrop-blur"><ChevronLeft /></button>
                <button onClick={nextImage} className="pointer-events-auto p-4 bg-white/10 rounded-full text-white backdrop-blur"><ChevronRight /></button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Lighting;