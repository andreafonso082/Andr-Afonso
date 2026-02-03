import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Building2, HardHat, Star, Award, CheckCircle } from 'lucide-react';
import CTAButton from '../components/CTAButton';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

const Partners: React.FC = () => {
  const { t } = useLanguage();

  // Defensive check: Ensure translations are loaded
  if (!t || !t.partners) {
    return null;
  }

  return (
    <div className="pt-24 pb-12 bg-white overflow-hidden">
      <SEO 
        title={t.seo.partners.title} 
        description={t.seo.partners.description} 
      />

      {/* 1. Hero Section */}
      <div className="bg-corporate py-16 mb-12 text-center text-white relative">
        <div className="container mx-auto px-4 md:px-12 relative z-10">
          <h1 className="text-3xl md:text-4xl font-normal font-heading mb-4">{t.partners.heroTitle}</h1>
          <p className="text-gray-300 max-w-2xl mx-auto font-light text-base md:text-lg">
            {t.partners.heroDesc}
          </p>
        </div>
        {/* Background Element */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
           <div className="absolute -right-20 -top-20 w-96 h-96 bg-brand-light rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        
        {/* 2. FEATURED SECTION: E-REDES (The Highlight) */}
        <section className="mb-20">
           <motion.div 
             initial={{ y: 20, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: true }}
             className="relative bg-gradient-to-r from-yellow-50 to-white border border-yellow-200 rounded-xl p-8 md:p-12 shadow-sm overflow-hidden"
           >
              {/* Decorative Background Icon */}
              <Zap className="absolute -right-10 -bottom-10 w-64 h-64 text-yellow-100 opacity-50 rotate-12 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
                 <div className="bg-white p-6 rounded-full shadow-md border-2 border-yellow-400 shrink-0">
                    <Zap size={48} className="text-yellow-500 fill-yellow-500" />
                 </div>
                 
                 <div className="flex-grow">
                    <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                       <ShieldCheck size={14} />
                       {t.partners.eredesHighlight.badge}
                    </div>
                    <h2 className="text-3xl font-normal text-corporate mb-2 font-heading">
                      Parceiro Certificado E-Redes
                    </h2>
                    <h3 className="text-lg text-gray-500 mb-4 font-medium">
                      {t.partners.eredesHighlight.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed max-w-3xl">
                      {t.partners.eredesHighlight.desc}
                    </p>
                 </div>
              </div>
           </motion.div>
        </section>

        {/* 3. SUPPLIERS & BRANDS (Clean Grid) */}
        <section className="mb-24">
          <div className="text-center mb-12">
             <h2 className="text-2xl md:text-3xl font-normal text-corporate mb-4">
               {t.partners.suppliersTitle}
             </h2>
             <p className="text-gray-500 max-w-2xl mx-auto mb-6">
               {t.partners.suppliersDesc}
             </p>
             <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-semibold text-corporate">
                <span className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
                  <CheckCircle size={16} className="text-green-500" /> Certificação ISO
                </span>
                <span className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
                  <Award size={16} className="text-brand-light" /> Materiais Homologados
                </span>
             </div>
          </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
             {t.partners.brandsList.map((brand: any, index: number) => (
               <motion.div
                 key={index}
                 whileHover={{ y: -5 }}
                 className="group bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand-light transition-all duration-300 flex flex-col h-full"
               >
                 <div className="mb-4">
                    <Star className="text-gray-300 group-hover:text-accent group-hover:fill-accent transition-colors" size={24} />
                 </div>
                 <h4 className="text-lg font-normal text-corporate mb-2 font-heading">{brand.name}</h4>
                 <p className="text-sm text-gray-500 leading-snug">{brand.desc}</p>
               </motion.div>
             ))}
           </div>
        </section>

        {/* 4. EXCLUSIVE PARTNERS (Professional Dark Section) */}
        <section className="bg-corporate text-white rounded-2xl p-8 md:p-16 relative overflow-hidden mb-20">
           {/* Abstract shapes instead of noisy texture for a cleaner look */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full mix-blend-overlay filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-light rounded-full mix-blend-overlay filter blur-3xl opacity-10 transform -translate-x-1/2 translate-y-1/2"></div>
           
           <div className="relative z-10">
             <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-gray-700 pb-8">
               <div className="max-w-2xl">
                 <h2 className="text-2xl md:text-3xl font-normal font-heading mb-4 text-white">
                   {t.partners.exclusiveTitle}
                 </h2>
                 <p className="text-gray-400 text-lg">
                   {t.partners.exclusiveDesc}
                 </p>
               </div>
               <div className="shrink-0">
                  <CTAButton 
                    to="/contact" 
                    text={t.partners.ctaButton} 
                    variant="primary"
                    className="bg-brand-light text-corporate hover:bg-white hover:text-corporate border-none"
                  />
               </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {t.partners.exclusivePartners.map((partner: any, index: number) => (
                 <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors group">
                    <div className="mb-6 inline-flex p-3 bg-accent/30 rounded-lg text-brand-light group-hover:text-white transition-colors">
                      {partner.type === 'Construção Civil' && <HardHat size={28} />}
                      {partner.type === 'Hotelaria' && <Building2 size={28} />}
                      {partner.type === 'Gestão de Imóveis' && <ShieldCheck size={28} />}
                      {/* Fallback icons */}
                      {partner.type === 'Civil Construction' && <HardHat size={28} />}
                      {partner.type === 'Hospitality' && <Building2 size={28} />}
                      {partner.type === 'Property Management' && <ShieldCheck size={28} />}
                    </div>
                    
                    <span className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">{partner.type}</span>
                    <h3 className="text-xl font-normal mb-3 text-white">{partner.name}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {partner.desc}
                    </p>
                 </div>
               ))}
             </div>
           </div>
        </section>

      </div>
      
      {/* 5. Bottom CTA Area */}
      <section className="w-full py-16 bg-gray-50 text-center border-t border-gray-100">
         <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-2xl font-normal text-corporate mb-4 font-heading">
              {t.partners.ctaTitle}
            </h2>
            <p className="text-gray-600 mb-8">
              {t.partners.ctaDesc}
            </p>
            <CTAButton 
              to="/contact?subject=parceria" 
              text={t.common.seeMore || "Contactar Agora"} 
              variant="secondary"
            />
         </div>
      </section>

    </div>
  );
};

export default Partners;