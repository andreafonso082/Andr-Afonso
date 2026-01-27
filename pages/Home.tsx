import React, { useRef, useState, useEffect } from 'react';
import { Zap, HardHat, Car, Lightbulb, CheckCircle, Quote, Star, FileText, Activity, Wrench, BatteryCharging, Cpu, Pen, Router, Layers } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';
import CTAButton from '../components/CTAButton';
import ServiceCard from '../components/ServiceCard';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

// Partners remain static as they are names
const partners = [
  "Schneider Electric", "Siemens", "EFACEC", "Bosch", "Legrand", "Hager"
];

// Custom Lightning Bolt Component to match the requested style
const LightningBoltIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    {/* Shape similar to the requested image: A jagged lightning bolt */}
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

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

  // PHYSICS: Bolt Rotation linked to scroll
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]); 
  
  // PHYSICS: Bolt Position (X, Y)
  const bulbX = useTransform(scrollYProgress, [0, 0.15], ["-50%", "-20%"]); 
  const bulbY = useTransform(scrollYProgress, [0, 0.15], ["0%", "35vh"]);
  
  // Smooth out the movement
  const smoothRotate = useSpring(rotate, { stiffness: 100, damping: 30 });
  const smoothX = useSpring(bulbX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(bulbY, { stiffness: 50, damping: 20 });

  return (
    <div ref={containerRef} className="flex flex-col w-full relative">
      <SEO 
        title={t.seo.home.title} 
        description={t.seo.home.description} 
      />
      
      {/* === FLOATING BOLT COMPONENT (Previously Bulb) === */}
      {/* Only visible when CTA is NOT in view/started. Hidden on mobile to avoid clutter */}
      <AnimatePresence>
        {!startHammer && !hasLitUp && (
          <motion.div
            className="fixed right-4 md:right-16 top-1/2 z-50 pointer-events-none hidden md:block"
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
               {/* Blue Glow Effect updated to match #8DC8E8 */}
               <div className="absolute inset-0 bg-[#8DC8E8]/40 blur-[50px] rounded-full animate-pulse"></div>
               
               {/* The Lightning Bolt SVG */}
               <LightningBoltIcon 
                  className="w-24 h-24 md:w-56 md:h-56 text-[#8DC8E8] drop-shadow-[0_0_15px_rgba(141,200,232,0.8)]"
               />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen md:h-screen flex items-center justify-center overflow-hidden">
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
              {/* SLOGAN KICKER */}
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <span className="h-0.5 w-8 md:w-12 bg-brand-light"></span>
                <span className="text-brand-light font-bold uppercase tracking-[0.2em] text-sm md:text-base font-body shadow-black drop-shadow-md">
                  Eletricidade é Connosco!
                </span>
                <span className="h-0.5 w-8 md:w-12 bg-brand-light"></span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight">
                {t.home.hero.title.split(',').map((part: string, i: number) => (
                  <span key={i} className="block">{part}{i < 2 ? ',' : ''}</span>
                ))}
              </h1>
              {/* Highlight border changed to Blue for contrast */}
              <p className="text-lg md:text-xl text-gray-200 mb-10 font-light border-l-4 border-brand-light pl-4 leading-relaxed max-w-2xl">
                {t.home.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <CTAButton to="/contact" text={t.home.hero.ctaPrimary} variant="primary" className="w-full sm:w-auto text-center" />
                <CTAButton to="/contact" text={t.home.hero.ctaSecondary} variant="outline" className="w-full sm:w-auto text-center" />
              </div>
            </motion.div>

            <div className="hidden lg:block w-full lg:w-1/4"></div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED SERVICES */}
      <section className="py-16 md:py-20 bg-white relative z-20">
        <div className="container mx-auto px-4 md:px-12">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-normal text-corporate mb-4">{t.home.servicesTitle}</h2>
            {/* Divider blue */}
            <div className="w-16 md:w-20 h-1 bg-brand-light mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center">
            {/* 1. Pedidos de Ligação à Rede (prev PLRs) */}
            <ServiceCard 
              title={t.home.serviceCards.plrs.title}
              description={t.home.serviceCards.plrs.desc}
              icon={<Activity size={32} />}
              delay={0.1}
              link="/services/plrs"
            />
            {/* 2. Infraestruturas Elétricas (prev Instalações) */}
            <ServiceCard 
              title={t.home.serviceCards.installations.title}
              description={t.home.serviceCards.installations.desc}
              icon={<Wrench size={32} />}
              delay={0.2}
              link="/services/installations"
            />
            {/* 3. Telecomunicações (prev EV Charging) */}
             <ServiceCard 
              title={t.home.serviceCards.telecommunications.title}
              description={t.home.serviceCards.telecommunications.desc}
              icon={<Router size={32} />}
              delay={0.3}
              link="/services/telecommunications"
            />
            {/* 4. Postos de Transformação */}
             <ServiceCard 
              title={t.home.serviceCards.substations.title}
              description={t.home.serviceCards.substations.desc}
              icon={<Zap size={32} />}
              delay={0.4}
              link="/services/substations"
            />
            {/* 5. Projetos de Eletricidade */}
            <ServiceCard 
              title={t.home.serviceCards.projects.title}
              description={t.home.serviceCards.projects.desc}
              icon={<FileText size={32} />}
              delay={0.5}
              link="/services/projects"
            />
            {/* 6. Outros Serviços (prev Iluminação) */}
             <ServiceCard 
              title={t.home.serviceCards.others.title}
              description={t.home.serviceCards.others.desc}
              icon={<Layers size={32} />}
              delay={0.6}
              link="/services/others"
            />
          </div>
        </div>
      </section>

      {/* 3. BENEFITS */}
      <section className="py-16 md:py-20 bg-detail relative z-20">
        <div className="container mx-auto px-4 md:px-12 flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <img 
              src="https://picsum.photos/seed/engineer/800/600" 
              alt="Engenheiro a trabalhar" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-normal text-corporate mb-6">{t.home.whyUsTitle}</h2>
            <p className="text-gray-600 mb-8 font-body leading-relaxed">
              {t.home.whyUsDesc}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {t.home.benefits.map((benefit: any) => (
                <div key={benefit.id} className="flex items-center gap-3 bg-white p-4 rounded shadow-sm border-l-4 border-brand-light">
                  <CheckCircle className="text-accent shrink-0" size={20} />
                  <span className="font-semibold text-corporate font-body text-sm md:text-base">{benefit.text}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <CTAButton to="/services" text={t.home.ctaButton} variant="secondary" className="w-full sm:w-auto text-center" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERMEDIATE CTA - THE "HAMMER/STRIKE" SECTION */}
      <section 
        ref={ctaSectionRef}
        className={`py-16 md:py-24 relative overflow-hidden transition-colors duration-200 ease-out ${
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

        {/* The Hammering Bolt Animation */}
        <AnimatePresence>
          {startHammer && !hasLitUp && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none w-full max-w-4xl h-64">
               {/* Positioning the bolt relative to the text area to hit the "corner" of the title */}
               <motion.div
                  className="absolute top-0 left-1/2 md:-ml-32 -mt-12 origin-bottom-right"
                  initial={{ rotate: -45, opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1,
                    scale: 1,
                    rotate: [-45, -130, 10], // The Swing: Start -> Wind up back -> Hit forward
                  }}
                  transition={{ 
                    duration: 0.6,
                    times: [0, 0.4, 1], // Timing the swing
                    ease: "anticipate" // Adds a nice 'weight' to the swing
                  }}
                  exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.1 } }}
               >
                 <LightningBoltIcon 
                   className="w-32 h-32 md:w-[180px] md:h-[180px] text-[#8DC8E8] drop-shadow-[0_0_20px_rgba(141,200,232,0.8)]" 
                 />
                 {/* Motion blur trail effect could be added here */}
               </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-12 text-center relative z-20">
          <motion.div
             // Text appears instantly when hasLitUp becomes true
             initial={{ opacity: 0 }}
             animate={{ opacity: hasLitUp ? 1 : 0 }}
             transition={{ duration: 0.1 }} // Fast appearance after hit
          >
            {/* Corner Spark Effect on text */}
            <div className="relative inline-block max-w-full">
               <h2 className="text-2xl sm:text-3xl md:text-5xl font-normal mb-6 text-white drop-shadow-lg relative">
                 {hasLitUp && (
                    <motion.div 
                      className="absolute -top-6 -left-6 text-brand-light hidden sm:block"
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
            
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light drop-shadow-md px-2">
              {t.home.lightUp.desc}
            </p>
            <div className="relative inline-block w-full sm:w-auto">
               <div className="absolute inset-0 bg-brand-light blur-xl opacity-30 animate-pulse rounded-full hidden sm:block"></div>
               <CTAButton to="/contact" text={t.home.lightUp.cta} variant="primary" className="text-base md:text-lg py-3 md:py-4 px-8 md:px-10 relative z-10 border border-brand-light/50 w-full sm:w-auto" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="py-16 md:py-20 bg-white relative z-20">
        <div className="container mx-auto px-4 md:px-12">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-normal text-corporate mb-4">{t.home.testimonialsTitle}</h2>
            <div className="w-16 md:w-20 h-1 bg-brand-light mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {t.home.testimonials.map((tr: any) => (
              <motion.div 
                key={tr.id} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-detail p-6 md:p-8 rounded-lg relative flex flex-col justify-between"
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
                  {tr.role && <p className="text-xs text-gray-500 uppercase tracking-wide">{tr.role}, {tr.company}</p>}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a 
              href="https://www.google.com/maps/place/Joaquim+%26+Fernandes-electricidade+E+Telecomunica%C3%A7%C3%B5es+Lda/@37.0499496,-7.7845862,17z/data=!4m18!1m9!3m8!1s0xd100015fa93cb27:0x9f2e8973008bd28a!2sJoaquim+%26+Fernandes-electricidade+E+Telecomunica%C3%A7%C3%B5es+Lda!8m2!3d37.0499453!4d-7.7820113!9m1!1b1!16s%2Fg%2F1ts3gwcy!3m7!1s0xd100015fa93cb27:0x9f2e8973008bd28a!8m2!3d37.0499453!4d-7.7820113!9m1!1b1!16s%2Fg%2F1ts3gwcy?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border-2 border-accent text-accent hover:bg-accent hover:text-white font-bold py-3 px-6 md:px-8 rounded-sm transition-colors uppercase tracking-widest text-xs md:text-sm"
            >
              {t.home.leaveReview} <Pen size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 6. PARTNERS CAROUSEL */}
      <section className="py-12 md:py-16 bg-gray-50 border-t border-gray-200 overflow-hidden relative z-20">
        <div className="container mx-auto px-4 md:px-12 mb-16 md:mb-20">
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
               <div key={index} className="flex-shrink-0 mx-6 md:mx-12">
                 <span className="text-xl md:text-3xl font-normal text-gray-400 font-heading opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default whitespace-nowrap">
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