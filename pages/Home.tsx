import React, { useRef, useState, useEffect } from 'react';
import { Zap, CheckCircle, Quote, Star, Activity, Wrench, Wifi, FileText, Layers, Pen, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';
import CTAButton from '../components/CTAButton';
import ServiceCard from '../components/ServiceCard';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

// Partners list
const partners = [
  "Schneider Electric", "Siemens", "EFACEC", "Bosch", "Legrand", "Hager"
];

// Custom Lightning Bolt Component (Icon style for floating)
const FloatingBoltIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

// Realistic Complex Lightning Bolt Component
const ComplexLightningBolt = ({ isMainStrike }: { isMainStrike: boolean }) => (
  <svg viewBox="0 0 400 600" className="w-full h-[100%] md:h-[150%] -mt-0 md:-mt-20 object-cover pointer-events-none" preserveAspectRatio="none">
    <defs>
      <filter id="glow-purple" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="10" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <filter id="glow-white" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Leader Branches (Faint) */}
    <path 
      d="M200 0 L180 50 L220 120 L150 200 L180 250" 
      stroke="rgba(168, 85, 247, 0.6)" // Purple-500
      strokeWidth="2" 
      fill="none" 
      className="opacity-70"
    />
    <path 
      d="M220 120 L280 160 L320 250" 
      stroke="rgba(168, 85, 247, 0.4)" 
      strokeWidth="1" 
      fill="none" 
    />
    
    {/* Main Bolt */}
    <path 
      d="M200 0 L190 40 L230 110 L160 220 L260 280 L120 480 L280 400 L220 600" 
      stroke={isMainStrike ? "#FFFFFF" : "rgba(255,255,255,0.8)"}
      strokeWidth={isMainStrike ? "6" : "3"} 
      fill="none" 
      filter={isMainStrike ? "url(#glow-white)" : "url(#glow-purple)"}
      className={`transition-all duration-75 ${isMainStrike ? 'opacity-100' : 'opacity-0'}`}
      style={{
        animation: isMainStrike ? 'none' : 'flicker 0.2s infinite'
      }}
    />

    {/* Secondary Branches (Visible on Main Strike) */}
    {isMainStrike && (
      <>
        <path d="M230 110 L300 150 L350 250" stroke="#E9D5FF" strokeWidth="2" fill="none" filter="url(#glow-purple)" />
        <path d="M160 220 L80 280 L40 350" stroke="#E9D5FF" strokeWidth="2" fill="none" filter="url(#glow-purple)" />
        <path d="M260 280 L320 320" stroke="#E9D5FF" strokeWidth="1" fill="none" />
      </>
    )}
  </svg>
);

const Home: React.FC = () => {
  const { t } = useLanguage();
  
  // --- Animation Hooks ---
  const containerRef = useRef<HTMLDivElement>(null);
  const ctaSectionRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress for rotation and movement
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // TRIGGER: Require 90% of the section to be visible before starting
  const isCtaInView = useInView(ctaSectionRef, { amount: 0.9, once: true });
  
  // Animation States: 0=Idle, 1=Leader(Start), 2=Flash(Impact), 3=Done(Lit)
  const [animStep, setAnimStep] = useState(0);

  useEffect(() => {
    if (isCtaInView && animStep === 0) {
      // Step 1: Leader bolts appear (Darkness)
      setAnimStep(1); 
      
      // Step 2: Main Impact (Flash + Purple Sky)
      setTimeout(() => {
        setAnimStep(2);
      }, 300); 

      // Step 3: Stabilize (Lights On)
      setTimeout(() => {
        setAnimStep(3);
      }, 550); // Short flash duration
    }
  }, [isCtaInView, animStep]);

  // PHYSICS: Bolt Rotation linked to scroll
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]); 
  
  // PHYSICS: Bolt Position (X, Y)
  const bulbX = useTransform(scrollYProgress, [0, 0.65], ["-50%", "-20%"]); 
  const bulbY = useTransform(scrollYProgress, [0, 0.65], ["0%", "50vh"]);
  
  const smoothRotate = useSpring(rotate, { stiffness: 100, damping: 30 });
  const smoothX = useSpring(bulbX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(bulbY, { stiffness: 50, damping: 20 });

  // --- Scroll Logic for Testimonials ---
  const scrollTestimonials = (direction: 'left' | 'right') => {
    if (testimonialRef.current) {
      const { current } = testimonialRef;
      // Scroll by the width of the container (showing 1 card at a time)
      const scrollAmount = current.clientWidth;
      
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (!t || !t.home) return <div className="min-h-screen bg-white"></div>;

  return (
    <div ref={containerRef} className="flex flex-col w-full relative">
      <SEO title={t.seo.home.title} description={t.seo.home.description} />
      
      {/* === FLOATING BOLT === */}
      <AnimatePresence>
        {animStep === 0 && (
          <motion.div
            key="floating-bolt"
            className="fixed right-4 md:right-16 top-1/2 z-50 pointer-events-none hidden md:block"
            style={{ rotate: smoothRotate, x: smoothX, y: smoothY }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, y: [0, -10, 0, 5, 0], transition: { opacity: { duration: 0.5 } }}}
            exit={{ opacity: 0, scale: 0.5, filter: "blur(10px)", transition: { duration: 0.2 } }}
          >
            <motion.div
              animate={{ rotate: [0, -5, 5, -3, 3, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative"
            >
               <div className="absolute inset-0 bg-[#8DC8E8]/40 blur-[50px] rounded-full animate-pulse"></div>
               <FloatingBoltIcon className="w-24 h-24 md:w-56 md:h-56 text-[#8DC8E8] drop-shadow-[0_0_15px_rgba(141,200,232,0.8)]" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HERO SECTION */}
      {/* 
          UPDATE: 
          - md:min-h-0 and md:h-[60vh] forces the section to be shorter on tablet.
          - Content sizing restored to larger values below.
      */}
      <section className="relative min-h-[90vh] md:min-h-0 md:h-[60vh] lg:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/construction/1920/1080" 
            alt="Obra de construção e eletricidade" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30"></div>
        </div>

        <div className="container mx-auto px-4 md:px-12 relative z-10 pt-24 md:pt-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-3/4 max-w-4xl"
            >
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <span className="h-0.5 w-8 md:w-12 bg-brand-light"></span>
                <span className="text-brand-light font-bold uppercase tracking-[0.2em] text-xs md:text-base font-body shadow-black drop-shadow-md">
                  Eletricidade é Connosco!
                </span>
                <span className="h-0.5 w-8 md:w-12 bg-brand-light"></span>
              </div>

              {/* RESTORED: Larger text size for Tablet (md:text-4xl) */}
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-normal font-heading text-white mb-6 leading-tight">
                {t.home.hero.title && t.home.hero.title.split(',').map((part: string, i: number) => (
                  <span key={i} className="block">{part}{i < 2 ? ',' : ''}</span>
                ))}
              </h1>
              
              {/* RESTORED: Larger subtitle for Tablet (md:text-lg) */}
              <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-8 md:mb-10 font-light border-l-4 border-brand-light pl-4 leading-relaxed max-w-2xl">
                {t.home.hero.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                {/* RESTORED: Standard button sizing */}
                <CTAButton to="/contact" text={t.home.hero.ctaPrimary} variant="primary" className="w-full sm:w-auto text-center" />
                <CTAButton to="/contact" text={t.home.hero.ctaSecondary} variant="outline" className="w-full sm:w-auto text-center" />
              </div>
            </motion.div>
            <div className="hidden lg:block w-full lg:w-1/4"></div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES */}
      <section className="py-12 md:py-20 bg-white relative z-20">
        <div className="container mx-auto px-4 md:px-12">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-normal text-corporate mb-4">{t.home.servicesTitle}</h2>
            <div className="w-16 md:w-20 h-1 bg-brand-light mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center">
            <ServiceCard title={t.home.serviceCards.plrs.title} description={t.home.serviceCards.plrs.desc} icon={<Activity size={32} />} delay={0.1} link="/services/plrs" />
            <ServiceCard title={t.home.serviceCards.installations.title} description={t.home.serviceCards.installations.desc} icon={<Wrench size={32} />} delay={0.2} link="/services/installations" />
            <ServiceCard title={t.home.serviceCards.telecommunications.title} description={t.home.serviceCards.telecommunications.desc} icon={<Wifi size={32} />} delay={0.3} link="/services/telecommunications" />
            <ServiceCard title={t.home.serviceCards.substations.title} description={t.home.serviceCards.substations.desc} icon={<Zap size={32} />} delay={0.4} link="/services/substations" />
            <ServiceCard title={t.home.serviceCards.projects.title} description={t.home.serviceCards.projects.desc} icon={<FileText size={32} />} delay={0.5} link="/services/projects" />
            <ServiceCard title={t.home.serviceCards.others.title} description={t.home.serviceCards.others.desc} icon={<Layers size={32} />} delay={0.6} link="/services/others" />
          </div>
        </div>
      </section>

      {/* 3. BENEFITS */}
      <section className="py-12 md:py-20 bg-detail relative z-20">
        <div className="container mx-auto px-4 md:px-12 flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <img src="https://picsum.photos/seed/engineer/800/600" alt="Engenheiro" className="rounded-lg shadow-2xl w-full h-auto object-cover" />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-normal text-corporate mb-6">{t.home.whyUsTitle}</h2>
            <p className="text-gray-600 mb-8 font-body leading-relaxed">{t.home.whyUsDesc}</p>
            {/* UPDATED GRID: Forced 2 columns on all screens including mobile (removed grid-cols-1, added grid-cols-2) */}
            <div className="grid grid-cols-2 gap-3 md:gap-6">
              {t.home.benefits && t.home.benefits.map((benefit: any) => (
                <div key={benefit.id} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-3 bg-white p-3 sm:p-4 rounded shadow-sm border-l-4 border-brand-light">
                  <CheckCircle className="text-accent shrink-0" size={20} />
                  <span className="font-semibold text-corporate font-body text-xs sm:text-sm md:text-base leading-tight">{benefit.text}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <CTAButton to="/services" text={t.home.ctaButton} variant="secondary" className="w-full sm:w-auto text-center" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. REALISTIC LIGHTNING STRIKE CTA */}
      <section 
        ref={ctaSectionRef}
        className={`py-20 md:py-32 relative overflow-hidden transition-colors duration-700 ease-out`}
        style={{
          backgroundColor: animStep === 3 ? '#1A1A1A' : '#000000' // Corporate vs Black
        }}
      >
        {/* ATMOSPHERE: Purple Glow Sequence */}
        <div 
           className="absolute inset-0 z-0 transition-opacity duration-100 ease-in-out pointer-events-none"
           style={{
             opacity: animStep === 2 ? 1 : 0,
             background: 'radial-gradient(circle at 50% 10%, #7e22ce 0%, #3b0764 40%, #000000 90%)', // Purple-700 to Black
             mixBlendMode: 'screen'
           }}
        ></div>

        {/* LIGHTNING BOLTS */}
        {(animStep === 1 || animStep === 2) && (
           <div className="absolute inset-0 z-10 flex justify-center items-start overflow-hidden pointer-events-none">
              <ComplexLightningBolt isMainStrike={animStep === 2} />
           </div>
        )}

        {/* FLASH: White Overlay */}
        <div 
          className="absolute inset-0 bg-white z-20 pointer-events-none transition-opacity duration-[50ms]"
          style={{ opacity: animStep === 2 ? 0.8 : 0 }}
        ></div>

        {/* CONTENT (Revealed after strike) */}
        <div className="container mx-auto px-4 md:px-12 text-center relative z-30">
          <motion.div
             initial={{ opacity: 0, filter: 'brightness(0)' }}
             animate={{ 
                opacity: animStep === 3 ? 1 : (animStep === 2 ? 0.8 : 0),
                filter: animStep === 3 ? 'brightness(1)' : 'brightness(0)'
             }}
             transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="relative inline-block max-w-full">
               <h2 className={`text-2xl sm:text-3xl md:text-5xl font-normal mb-6 text-white drop-shadow-lg ${animStep === 3 ? 'text-shadow-glow' : ''}`}>
                 {t.home.lightUp.title}
               </h2>
            </div>
            
            <p className="text-base md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light drop-shadow-md px-2">
              {t.home.lightUp.desc}
            </p>
            
            <div className="relative inline-block w-full sm:w-auto">
               {animStep === 3 && (
                 <div className="absolute inset-0 bg-brand-light blur-2xl opacity-20 animate-pulse rounded-full"></div>
               )}
               <CTAButton to="/contact" text={t.home.lightUp.cta} variant="primary" className="text-base md:text-lg py-3 md:py-4 px-8 md:px-10 relative z-10 w-full sm:w-auto shadow-[0_0_20px_rgba(141,200,232,0.3)]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="py-12 md:py-20 bg-white relative z-20">
        <div className="container mx-auto px-4 md:px-12">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-normal text-corporate mb-4">{t.home.testimonialsTitle}</h2>
            <div className="w-16 md:w-20 h-1 bg-brand-light mx-auto"></div>
          </div>
          
          {/* 
            FIXED CAROUSEL LOGIC:
            - Mobile/Tablet (< lg): Uses Flexbox with snap.
            - Items have w-full to ensure only ONE card is seen at a time.
            - Desktop (>= lg): Switches to Grid.
          */}
          <div className="relative group">
            <div 
               ref={testimonialRef}
               className="
                  flex overflow-x-auto snap-x snap-mandatory gap-0 pb-8 
                  lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:pb-0
                  scrollbar-hide
               "
               style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
               {/* Internal style to hide scrollbar */}
               <style>{`
                 .scrollbar-hide::-webkit-scrollbar {
                     display: none;
                 }
               `}</style>

              {t.home.testimonials && t.home.testimonials.map((tr: any) => (
                <div 
                  key={tr.id} 
                  className="
                     flex-none w-full lg:w-auto snap-center
                     px-2 lg:px-0
                  "
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px" }}
                    className="bg-detail p-6 md:p-8 rounded-lg relative flex flex-col justify-between h-full"
                  >
                    <div>
                       <Quote className="text-accent/40 absolute top-4 right-4" size={40} />
                       <div className="flex gap-1 text-brand-light mb-4">
                         {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                       </div>
                       <p className="text-gray-600 italic mb-6 font-body text-sm leading-relaxed">"{tr.text}"</p>
                    </div>
                    <div>
                      <h4 className="font-normal text-corporate">{tr.name}</h4>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
            
            {/* CAROUSEL CONTROLS (Mobile/Tablet Only) - FLOATING AT EDGES */}
            <button 
              onClick={() => scrollTestimonials('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 lg:hidden bg-white/90 border border-gray-200 text-accent hover:bg-accent hover:text-white rounded-full p-2 shadow-lg transition-colors"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scrollTestimonials('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 lg:hidden bg-white/90 border border-gray-200 text-accent hover:bg-accent hover:text-white rounded-full p-2 shadow-lg transition-colors"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="mt-8 lg:mt-12 text-center">
            <a href="https://www.google.com/maps/place/Joaquim+%26+Fernandes-electricidade+E+Telecomunica%C3%A7%C3%B5es+Lda/@37.0499496,-7.7845862,17z/data=!4m8!3m7!1s0xd100015fa93cb27:0x9f2e8973008bd28a!8m2!3d37.0499453!4d-7.7820113!9m1!1b1!16s%2Fg%2F1ts3gwcy?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white border-2 border-accent text-accent hover:bg-accent hover:text-white font-bold py-3 px-6 md:px-8 rounded-sm transition-colors uppercase tracking-widest text-xs md:text-sm">
              {t.home.leaveReview} <Pen size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 6. PARTNERS */}
      <section className="py-12 md:py-16 bg-gray-50 border-t border-gray-200 overflow-hidden relative z-20">
        <div className="container mx-auto px-4 md:px-12 mb-10 md:mb-16 text-center">
             <h2 className="text-2xl md:text-3xl font-normal text-corporate mb-4">{t.home.partnersTitle}</h2>
             <div className="w-16 md:w-20 h-1 bg-brand-light mx-auto"></div>
        </div>
        <div className="w-full relative overflow-hidden">
          <motion.div 
            className="flex items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            style={{ width: "fit-content" }}
          >
            {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
               <div key={index} className="flex-shrink-0 mx-6 md:mx-12">
                 <span className="text-xl md:text-3xl font-normal text-gray-400 font-heading opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default whitespace-nowrap">{partner}</span>
               </div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;