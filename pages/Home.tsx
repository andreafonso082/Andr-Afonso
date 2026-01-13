import React, { useRef, useState, useEffect } from 'react';
import { Zap, HardHat, Car, Lightbulb, CheckCircle, Quote, Star } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';
import CTAButton from '../components/CTAButton';
import ServiceCard from '../components/ServiceCard';

/* === DATA & CONFIGURATION === */
// EDITABLE: Hero Section Text
const heroContent = {
  title: "Soluções de Eletricidade, Construção e Mobilidade Elétrica",
  subtitle: "Impulsionamos o seu projeto com excelência técnica, rigor e inovação.",
  ctaPrimary: "Peça um orçamento",
  ctaSecondary: "Contacte-nos"
};

// EDITABLE: Benefits List
const benefits = [
  { id: 1, text: "Experiência desde 1986" },
  { id: 2, text: "Equipa Técnica Certificada" },
  { id: 3, text: "Soluções Chave-na-mão" },
  { id: 4, text: "Apoio 24/7" }
];

// EDITABLE: Testimonials
const testimonials = [
  {
    id: 1,
    name: "Carlos Mendes",
    role: "Diretor de Operações",
    company: "Logística SA",
    text: "A instalação dos carregadores elétricos na nossa frota foi impecável. Profissionalismo e rapidez."
  },
  {
    id: 2,
    name: "Ana Pereira",
    role: "Proprietária",
    company: "Restaurante O Solar",
    text: "A renovação elétrica e a iluminação festiva transformaram o nosso espaço. Recomendo vivamente."
  },
  {
    id: 3,
    name: "Miguel Santos",
    role: "Gestor de Condomínio",
    company: "GestCondo",
    text: "Manutenção de edifícios exemplar. Resolvemos problemas antigos de infiltração e eletricidade."
  }
];

// EDITABLE: Partners (Placeholders)
const partners = [
  "Schneider Electric", "Siemens", "EFACEC", "Bosch", "Legrand", "Hager"
];

const Home: React.FC = () => {
  // --- Animation Hooks ---
  const containerRef = useRef<HTMLDivElement>(null);
  const ctaSectionRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress for rotation and movement
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Track if CTA section is in view to trigger the "Light Up" event
  const isCtaInView = useInView(ctaSectionRef, { margin: "-40% 0px -40% 0px", once: false });
  const [hasLitUp, setHasLitUp] = useState(false);

  // Sync state with view, but once lit, keep it lit? Or toggle? Let's toggle for effect.
  useEffect(() => {
    setHasLitUp(isCtaInView);
  }, [isCtaInView]);

  // PHYSICS: Bulb Rotation linked to scroll
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]); // Spins 2 times full page
  
  // PHYSICS: Bulb Position (X, Y)
  // X: Negative moves LEFT (into screen), Positive moves RIGHT (off screen)
  // Adjusted to ensure it stays well within site boundaries.
  // 0% Scroll -> -50% X (Moved left inwards)
  // 15% Scroll -> -20% X (Settles slightly closer to edge but safe)
  const bulbX = useTransform(scrollYProgress, [0, 0.15], ["-50%", "-20%"]); 
  const bulbY = useTransform(scrollYProgress, [0, 0.15], ["0%", "35vh"]);
  
  // Smooth out the movement
  const smoothRotate = useSpring(rotate, { stiffness: 100, damping: 30 });
  const smoothX = useSpring(bulbX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(bulbY, { stiffness: 50, damping: 20 });

  return (
    <div ref={containerRef} className="flex flex-col w-full relative">
      
      {/* === FLOATING BULB COMPONENT === */}
      {/* Only visible when CTA is NOT in view. When CTA is in view, the local bulb takes over. */}
      {/* Increased right margin from right-10 to md:right-16 for safety */}
      <AnimatePresence>
        {!hasLitUp && (
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
              // "Abanar" e "Pulsar" animation loop
              y: [0, -10, 0, 5, 0],
              transition: { opacity: { duration: 0.5 } }
            }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.3 } }}
          >
            <motion.div
              animate={{
                // Subtle shake/wobble independent of scroll
                rotate: [0, -5, 5, -3, 3, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut"
              }}
              className="relative"
            >
               {/* Glow Effect */}
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
        {/* Background Image with Overlay */}
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
            
            {/* Left Content: Text */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight">
                {heroContent.title.split(',').map((part, i) => (
                  <span key={i} className="block">{part}{i < 2 ? ',' : ''}</span>
                ))}
              </h1>
              <p className="text-xl text-gray-200 mb-10 font-light border-l-4 border-brand-light pl-4">
                {heroContent.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton to="/contact" text={heroContent.ctaPrimary} variant="primary" />
                <CTAButton to="/contact" text={heroContent.ctaSecondary} variant="outline" />
              </div>
            </motion.div>

            {/* Right Content: Placeholder for the bulb's starting position visually */}
            <div className="hidden lg:block w-full lg:w-1/2">
              {/* The actual bulb is the fixed 'FloatingBulb' above, this is just space reservation */}
            </div>

          </div>
        </div>
      </section>

      {/* 2. FEATURED SERVICES */}
      <section className="py-20 bg-white relative z-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-normal text-corporate mb-4">Nossas Áreas de Atuação</h2>
            <div className="w-20 h-1 bg-brand-light mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              title="Eletricidade" 
              description="Instalações industriais e domésticas, quadros elétricos e certificações." 
              icon={<Zap size={32} />}
              delay={0.1}
            />
            <ServiceCard 
              title="Mobilidade Elétrica" 
              description="Postos de carregamento para frotas, condomínios e particulares." 
              icon={<Car size={32} />}
              delay={0.2}
            />
            <ServiceCard 
              title="Iluminação Festiva" 
              description="Projetos de iluminação decorativa para cidades e superfícies comerciais." 
              icon={<Lightbulb size={32} />}
              delay={0.3}
            />
            <ServiceCard 
              title="Construção" 
              description="Remodelações, manutenção predial e obras gerais." 
              icon={<HardHat size={32} />}
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* 3. BENEFITS / DIFFERENTIALS */}
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
            <h2 className="text-3xl font-normal text-corporate mb-6">Porquê escolher a Joaquim & Fernandes?</h2>
            <p className="text-gray-600 mb-8 font-body">
              Combinamos décadas de experiência com as tecnologias mais recentes para entregar projetos seguros e eficientes. O nosso compromisso é com a qualidade e o cumprimento de prazos.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="flex items-center gap-3 bg-white p-4 rounded shadow-sm border-l-4 border-accent">
                  <CheckCircle className="text-accent shrink-0" size={20} />
                  <span className="font-semibold text-corporate font-body">{benefit.text}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <CTAButton to="/services" text="Conheça os nossos serviços" variant="secondary" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERMEDIATE CTA - THE "LIGHT UP" SECTION */}
      <section 
        ref={ctaSectionRef}
        className={`py-24 relative overflow-hidden transition-colors duration-1000 ease-in-out ${
          hasLitUp ? 'bg-corporate' : 'bg-black' // Turns from black to corporate gray
        }`}
      >
        {/* Background Overlay for "Dark Mode" */}
        <div className={`absolute inset-0 bg-black transition-opacity duration-1000 z-0 ${hasLitUp ? 'opacity-0' : 'opacity-90'}`}></div>

        {/* The "Exploding" Bulb */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: hasLitUp ? [0.5, 1.2, 1] : 0, // Bounce effect
              opacity: hasLitUp ? 1 : 0,
              rotate: hasLitUp ? 0 : -45
            }}
            transition={{ duration: 0.8, ease: "backOut" }}
          >
             {/* Intense Glow when lit */}
             <div className={`absolute inset-0 bg-yellow-400 rounded-full blur-[100px] transition-all duration-1000 ${hasLitUp ? 'opacity-40 scale-150' : 'opacity-0 scale-0'}`}></div>
             <Lightbulb 
               size={300} 
               className={`transition-colors duration-500 ${hasLitUp ? 'text-yellow-400 fill-yellow-400/20' : 'text-gray-800'}`}
               strokeWidth={0.5}
             />
          </motion.div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 md:px-12 text-center relative z-20">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: hasLitUp ? 1 : 0, y: hasLitUp ? 0 : 20 }}
             transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-normal mb-6 text-white drop-shadow-lg">
              Tem um projeto em mente?
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light drop-shadow-md">
              A nossa luz está pronta para guiar a sua visão. Fale com os nossos especialistas.
            </p>
            <div className="relative inline-block">
               {/* Button Glow */}
               <div className="absolute inset-0 bg-brand-light blur-xl opacity-30 animate-pulse rounded-full"></div>
               <CTAButton to="/contact" text="Peça a sua avaliação gratuita" variant="primary" className="text-lg py-4 px-10 relative z-10 border border-brand-light/50" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="py-20 bg-white relative z-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-normal text-corporate mb-4">O que dizem os nossos clientes</h2>
            <div className="w-20 h-1 bg-brand-light mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <motion.div 
                key={t.id} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-detail p-8 rounded-lg relative"
              >
                <Quote className="text-brand-light/40 absolute top-4 right-4" size={48} />
                <div className="flex gap-1 text-accent mb-4">
                  {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 italic mb-6 font-body text-sm leading-relaxed">"{t.text}"</p>
                <div>
                  <h4 className="font-bold text-corporate">{t.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">{t.role}, {t.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PARTNERS CAROUSEL (Animated Marquee) */}
      <section className="py-16 bg-gray-50 border-t border-gray-200 overflow-hidden relative z-20">
        <div className="container mx-auto px-6 md:px-12 mb-10">
          <p className="text-center text-gray-400 uppercase text-xs tracking-widest font-bold">Parceiros e Marcas de Confiança</p>
        </div>

        <div className="w-full relative overflow-hidden">
          {/* Gradients to fade edges */}
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
            {/* Duplicated list significantly to ensure seamless loop on wide screens */}
            {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
               <div key={index} className="flex-shrink-0 mx-8 md:mx-12">
                 <span className="text-2xl md:text-3xl font-normal text-gray-400 font-sans opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">
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