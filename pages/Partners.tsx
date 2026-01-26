import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Handshake, Award, Zap, Building2, HardHat } from 'lucide-react';
import CTAButton from '../components/CTAButton';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

const Partners: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-12 bg-white overflow-hidden">
      <SEO 
        title={t.seo.partners.title} 
        description={t.seo.partners.description} 
      />

      {/* 1. Hero Section */}
      <div className="bg-corporate py-20 mb-16 text-center text-white relative">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6">
               <Handshake size={32} className="text-brand-light" />
            </div>
            <h1 className="text-4xl md:text-5xl font-normal font-heading mb-6">
              {t.partners.heroTitle}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              {t.partners.heroDesc}
            </p>
          </motion.div>
        </div>
         {/* Background Element */}
         <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
           <div className="absolute -left-20 top-20 w-96 h-96 bg-brand-light rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        
        {/* 2. SEO & Intro Text Block */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-normal text-corporate mb-6 border-l-4 border-accent pl-4">
                {t.partners.suppliersTitle}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                {t.partners.suppliersDesc}
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-sm font-bold text-corporate">
                  <ShieldCheck className="text-green-500" /> Certificação ISO
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-corporate">
                  <Award className="text-brand-light" /> Materiais Homologados
                </div>
              </div>
            </div>
            {/* E-Redes Highlight Card - Strong SEO focus */}
            <div className="md:w-1/2 w-full">
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-yellow-50 to-white border-2 border-yellow-400 p-8 rounded-lg shadow-lg relative overflow-hidden"
              >
                 <div className="absolute top-0 right-0 bg-yellow-400 text-corporate text-xs font-bold px-3 py-1 rounded-bl">
                   {t.partners.eredesHighlight.badge}
                 </div>
                 <h3 className="text-2xl font-normal text-gray-900 mb-2 flex items-center gap-2">
                   <Zap className="text-yellow-500 fill-yellow-500" />
                   E-Redes
                 </h3>
                 <h4 className="text-sm font-normal text-gray-500 uppercase tracking-wide mb-4">
                   {t.partners.eredesHighlight.title}
                 </h4>
                 <p className="text-gray-700 text-sm mb-0">
                   {t.partners.eredesHighlight.desc}
                 </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. General Suppliers Grid */}
        <section className="mb-24">
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
             {t.partners.brandsList.map((brand: any, index: number) => (
               <motion.div
                 key={index}
                 whileHover={{ y: -5 }}
                 className="bg-gray-50 p-6 rounded border border-gray-100 flex flex-col items-center justify-center text-center hover:shadow-md transition-all duration-300"
               >
                 {/* Placeholder for Logo */}
                 <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-400 font-bold text-xl">
                   {brand.name.charAt(0)}
                 </div>
                 <h4 className="font-normal text-corporate mb-2">{brand.name}</h4>
                 <p className="text-xs text-gray-500">{brand.desc}</p>
               </motion.div>
             ))}
           </div>
        </section>

        {/* 4. Exclusive Partnerships Section */}
        <section className="bg-corporate text-white rounded-2xl p-10 md:p-16 relative overflow-hidden mb-20">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
           <div className="relative z-10">
             <div className="text-center mb-12">
               <h2 className="text-3xl font-normal font-heading mb-4">{t.partners.exclusiveTitle}</h2>
               <div className="w-20 h-1 bg-brand-light mx-auto mb-6"></div>
               <p className="text-gray-400 max-w-2xl mx-auto">
                 {t.partners.exclusiveDesc}
               </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {t.partners.exclusivePartners.map((partner: any, index: number) => (
                 <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="mb-4 text-brand-light">
                      {partner.type === 'Construção Civil' && <HardHat size={32} />}
                      {partner.type === 'Hotelaria' && <Building2 size={32} />}
                      {partner.type === 'Gestão de Imóveis' && <ShieldCheck size={32} />}
                      {/* Fallback icons for english mapping or other types */}
                      {partner.type === 'Civil Construction' && <HardHat size={32} />}
                      {partner.type === 'Hospitality' && <Building2 size={32} />}
                      {partner.type === 'Property Management' && <ShieldCheck size={32} />}
                    </div>
                    <h3 className="text-xl font-normal mb-1">{partner.name}</h3>
                    <span className="text-xs font-bold text-brand-light uppercase tracking-wider mb-4 block">{partner.type}</span>
                    <p className="text-gray-400 text-sm">
                      {partner.desc}
                    </p>
                 </div>
               ))}
             </div>
           </div>
        </section>

      </div>
      
      {/* 5. CTA - Centered with Blue Background */}
      <section className="w-full py-16 bg-[#3B455B] md:bg-[linear-gradient(105deg,#3B455B_60%,#252B3B_60.1%)] text-center">
         <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-2xl md:text-3xl font-normal text-white mb-2 font-heading uppercase tracking-wide">
              {t.partners.ctaTitle}
            </h2>
            <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8">
              {t.partners.ctaDesc}
            </p>
            <CTAButton 
              to="/contact" 
              text={t.partners.ctaButton} 
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-[#3B455B]"
            />
         </div>
      </section>

    </div>
  );
};

export default Partners;