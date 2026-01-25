import React, { useRef, useState, useEffect } from 'react';
import { Zap, HardHat, Car, Lightbulb, CheckCircle, Quote, Star, FileText, Activity, Wrench, BatteryCharging } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';
import CTAButton from '../components/CTAButton';
import ServiceCard from '../components/ServiceCard';
import { useLanguage } from '../context/LanguageContext';

// Partners remain static as they are names
const partners = [
  "Schneider Electric", "Siemens", "EFACEC", "Bosch", "Legrand", "Hager"
];

const Home: React.FC = () => {
  const { t } = useLanguage();
  
  // --- Animation Hooks ---
  const containerRef = useRef<HTMLDivElement>(null);
  const ctaSectionRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress for rotation and movement
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Track if CTA section is in view to trigger the "Hammer" event
  // once: true ensures it only happens once per session for dramatic effect
  const isCtaInView = useInView(ctaSectionRef, { margin: "-30% 0px -30% 0px", once: true });
  
  const [startHammer, setStartHammer] = useState(false);
  const [hasLitUp, setHasLitUp] = useState(false);

  // Sequence the Hammer Animation and Light Up event
  useEffect(() => {
    if (isCtaInView && !hasLitUp) {
      setStartHammer(true);
      
      // Timing:
      // 0ms: Animation Starts (Wind up)
      // 600ms: Impact (The Hammer Hit) -> Light Up triggered immediately
      const impactTimer = setTimeout(() => {
        setHasLitUp(true);
      }, 600);

      return () => clearTimeout(impactTimer);
    }
  }, [isCtaInView, hasLitUp]);

  // PHYSICS: Bulb Rotation linked to scroll
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]); 
  
  // PHYSICS: Bulb Position (X, Y)
  const bulbX = useTransform(scrollYProgress, [0, 0.15], ["-50%", "-20%"]); 
  const bulbY = useTransform(scrollYProgress, [0, 0.15], ["0%", "35vh"]);
  
  // Smooth out the movement
  const smoothRotate = useSpring(rotate, { stiffness: 100, damping: 30 });
  const smoothX = useSpring(bulbX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(bulbY, { stiffness: 50, damping: 20 });

  return (
    <div ref={containerRef} className="flex flex-col w-full relative">
      
      {/* === FLOATING BULB COMPONENT === */}
      {/* Only visible when CTA is NOT in view/started. */}
      <AnimatePresence>
        {!startHammer && !hasLitUp && (
          <motion.div
            className="fixed right-10 md:right-16 top-1/2 z-50 pointer-events-none hidden md:block"
            style={{ 
              rotate: smoothRotate,
              x: smoothX,
              y: smoothY,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -10, 0, 5, 0],
              transition: { opacity: { duration: 0.5 } }
            }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.3 } }}
          >
            <motion.div
              animate={{
                rotate: [0, -5, 5, -3, 3, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut"
              }}
              className="relative"
            >
               <div className="absolute inset-0 bg-brand-light/30 blur-[40px] rounded-full animate-pulse"></div>
               <Lightbulb 
                  className="w-32 h-32 md:w-48 md:h-48 text-brand-light drop-shadow-[0_0_15px_rgba(167,209,236,0.5)]" 
                  strokeWidth={1}
                  fill="rgba(167,209,236,0.1)"
                />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* 1. HERO SECTION */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/construction/1920/1080" 
            alt="Obra de construção e eletricidade" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/40"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 pt-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight">
                {t.home.hero.title.split(',').map((part: string, i: number) => (
                  <span key={i} className="block">{part}{i < 2 ? ',' : ''}</span>
                ))}
              </h1>
              <p className="text-xl text-gray-200 mb-10 font-light border-l-4 border-brand-light pl-4">
                {t.home.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton to="/contact" text={t.home.hero.ctaPrimary} variant="primary" />
                <CTAButton to="/contact" text={t.home.hero.ctaSecondary} variant="outline" />
              </div>
            </motion.div>

            <div className="hidden lg:block w-full lg:w-1/2"></div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED SERVICES */}
      <section className="py-20 bg-white relative z-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-normal text-corporate mb-4">{t.home.servicesTitle}</h2>
            <div className="w-20 h-1 bg-brand-light mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            <ServiceCard 
              title={t.home.serviceCards.projects.title}
              description={t.home.serviceCards.projects.desc}
              icon={<FileText size={32} />}
              delay={0.1}
            />
            <ServiceCard 
              title={t.home.serviceCards.plrs.title}
              description={t.home.serviceCards.plrs.desc}
              icon={<Activity size={32} />}
              delay={0.2}
            />
            <ServiceCard 
              title={t.home.serviceCards.installations.title}
              description={t.home.serviceCards.installations.desc}
              icon={<Wrench size={32} />}
              delay={0.3}
            />
             <ServiceCard 
              title={t.home.serviceCards.substations.title}
              description={t.home.serviceCards.substations.desc}
              icon={<Zap size={32} />}
              delay={0.4}
            />
             <ServiceCard 
              title={t.home.serviceCards.ev_charging.title}
              description={t.home.serviceCards.ev_charging.desc}
              icon={<BatteryCharging size={32} />}
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* 3. BENEFITS */}
      <section className="py-20 bg-detail relative z-20">
        <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://picsum.photos/seed/engineer/800/600" 
              alt="Engenheiro a trabalhar" 
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-normal text-corporate mb-6">{t.home.whyUsTitle}</h2>
            <p className="text-gray-600 mb-8 font-body">
              {t.home.whyUsDesc}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {t.home.benefits.map((benefit: any) => (
                <div key={benefit.id} className="flex items-center gap-3 bg-white p-4 rounded shadow-sm border-l-4 border-accent">
                  <CheckCircle className="text-accent shrink-0" size={20} />
                  <span className="font-semibold text-corporate font-body">{benefit.text}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <CTAButton to="/services" text={t.home.ctaButton} variant="secondary" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERMEDIATE CTA - THE "HAMMER" SECTION */}
      <section 
        ref={ctaSectionRef}
        className={`py-24 relative overflow-hidden transition-colors duration-200 ease-out ${
          hasLitUp ? 'bg-corporate' : 'bg-black' 
        }`}
      >
        {/* Flash Effect on Impact */}
        <div className={`absolute inset-0 bg-white transition-opacity duration-300 pointer-events-none z-0 ${hasLitUp ? 'opacity-0' : 'opacity-0'}`}
             style={{ animation: hasLitUp ? 'flash 0.5s ease-out' : 'none' }}>
        </div>
        <style>{`
          @keyframes flash {
            0% { opacity: 0; }
            10% { opacity: 0.8; }
            100% { opacity: 0; }
          }
        `}</style>

        {/* Background Overlay */}
        <div className={`absolute inset-0 bg-black transition-opacity duration-500 z-0 ${hasLitUp ? 'opacity-0' : 'opacity-95'}`}></div>

        {/* The Hammering Bulb Animation */}
        <AnimatePresence>
          {startHammer && !hasLitUp && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none w-full max-w-4xl h-64">
               {/* Positioning the bulb relative to the text area to hit the "corner" of the title */}
               <motion.div
                  className="absolute top-0 left-1/2 md:-ml-32 -mt-12 origin-bottom-right"
                  initial={{ rotate: -45, opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1,
                    scale: 1,
                    rotate: [-45, -130, 10], // The Hammer Swing: Start -> Wind up back -> Hit forward
                  }}
                  transition={{ 
                    duration: 0.6,
                    times: [0, 0.4, 1], // Timing the swing
                    ease: "anticipate" // Adds a nice 'weight' to the swing
                  }}
                  exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.1 } }}
               >
                 <Lightbulb 
                   size={180} 
                   className="text-gray-200 fill-gray-500 drop-shadow-2xl" 
                   strokeWidth={1}
                 />
                 {/* Motion blur trail effect could be added here */}
               </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Content */}
        <div className="container mx-auto px-6 md:px-12 text-center relative z-20">
          <motion.div
             // Text appears instantly when hasLitUp becomes true
             initial={{ opacity: 0 }}
             animate={{ opacity: hasLitUp ? 1 : 0 }}
             transition={{ duration: 0.1 }} // Fast appearance after hit
          >
            {/* Corner Spark Effect on text */}
            <div className="relative inline-block">
               <h2 className="text-3xl md:text-5xl font-normal mb-6 text-white drop-shadow-lg relative">
                 {hasLitUp && (
                    <motion.div 
                      className="absolute -top-6 -left-6 text-yellow-400"
                      initial={{ scale: 0, opacity: 1 }}
                      animate={{ scale: 2, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <Zap size={64} fill="currentColor" />
                    </motion.div>
                 )}
                 {t.home.lightUp.title}
               </h2>
            </div>
            
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light drop-shadow-md">
              {t.home.lightUp.desc}
            </p>
            <div className="relative inline-block">
               <div className="absolute inset-0 bg-brand-light blur-xl opacity-30 animate-pulse rounded-full"></div>
               <CTAButton to="/contact" text={t.home.lightUp.cta} variant="primary" className="text-lg py-4 px-10 relative z-10 border border-brand-light/50" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="py-20 bg-white relative z-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-normal text-corporate mb-4">{t.home.testimonialsTitle}</h2>
            <div className="w-20 h-1 bg-brand-light mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.home.testimonials.map((tr: any) => (
              <motion.div 
                key={tr.id} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-detail p-8 rounded-lg relative"
              >
                <Quote className="text-brand-light/40 absolute top-4 right-4" size={48} />
                <div className="flex gap-1 text-accent mb-4">
                  {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 italic mb-6 font-body text-sm leading-relaxed">"{tr.text}"</p>
                <div>
                  <h4 className="font-normal text-corporate">{tr.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">{tr.role}, {tr.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PARTNERS CAROUSEL */}
      <section className="py-16 bg-gray-50 border-t border-gray-200 overflow-hidden relative z-20">
        <div className="container mx-auto px-6 md:px-12 mb-10">
          <p className="text-center text-gray-400 uppercase text-xs tracking-widest font-bold">{t.home.partnersTitle}</p>
        </div>

        <div className="w-full relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          <motion.div 
            className="flex items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 30
            }}
            style={{ width: "fit-content" }}
          >
            {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
               <div key={index} className="flex-shrink-0 mx-8 md:mx-12">
                 <span className="text-2xl md:text-3xl font-normal text-gray-400 font-heading opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">
                   {partner}
                 </span>
               </div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;