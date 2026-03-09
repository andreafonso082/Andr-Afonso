import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Award, Check } from 'lucide-react';
import CTAButton from '../components/CTAButton';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

const Partners: React.FC = () => {
  const { t } = useLanguage();

  if (!t || !t.partners) {
    return null;
  }

  // Define slots including new partners
  const partnerSlots = [
    { type: "Iluminação técnica e decorativa", image: "https://drive.google.com/thumbnail?id=1YWtgccMsUVmbhQwtq7R-9sPZs8fAcQ1j&sz=w1000", url: "https://svelux.pt/" },
    { type: "Iluminação de Consumo", image: "https://drive.google.com/thumbnail?id=1nA3TaycESag22H2i6yHZWwiXZdQrocRu&sz=w1000", url: "https://www.signify.com/pt-pt" },
    { type: "Iluminação Exterior e Inteligente", image: "https://drive.google.com/thumbnail?id=1biPaxNPG6UvOAi_mRwCSRWCHDVT7ROD6&sz=w1000", url: "https://pt.schreder.com/pt" },
    { type: "Distribuição Especializada de Iluminação", image: "https://drive.google.com/thumbnail?id=11UxCCFrwhbG3HLlCELz9N2bZAl1EGh7t&sz=w1000", url: "https://ltx.pt/" },
    { type: "Fornecimento de Soluções de Iluminação", image: "https://drive.google.com/thumbnail?id=1S7vI_w9u3nisrikfI1S6MGMEKOPRwArf&sz=w1000", url: "" },
    { type: "Produtos de Iluminação", image: "https://drive.google.com/thumbnail?id=1Dqpjjc_nzbyKAINwRPvIvxCUCZ4o4fAD&sz=w1000", url: "https://www.philips.pt/" },
    { type: "Gestão de Energia e Automação Elétrica", image: "https://drive.google.com/thumbnail?id=1dbgZWvOZCDqKhheNhfOiBHlOqwP0DxHe&sz=w1000", url: "https://www.se.com/pt/pt/" },
    { type: "Soluções para Instalações Elétricas", image: "https://drive.google.com/thumbnail?id=1XdM8m5-kAKe-RE74bY-fclHSKD4Yql7k&sz=w1000", url: "https://www.obo.pt/" },
    { type: "Cabos Elétricos e de Telecomunicações", image: "https://drive.google.com/thumbnail?id=1-CeBT03xZhaDgN2QhjQK8BoDXPY-NBU9&sz=w1000", url: "https://www.cabelte.pt/" },
    { type: "Tecnologias e Equipamentos Elétricos", image: "https://drive.google.com/thumbnail?id=1MB83AcEQTQKM7_AtND5pn8xp4YHWi1H7&sz=w1000", url: "https://www.bosch.pt/" },
    { type: "Material Elétrico de Baixa Tensão", image: "https://drive.google.com/thumbnail?id=1K44hESgxmLh_hfqtGnI4bbOehA0MSW1m&sz=w1000", url: "https://www.efapel.pt/" },
    { type: "Conectores e Ligações Elétricas", image: "https://drive.google.com/thumbnail?id=1K0RQav-UmOsOKr6PaBBm265rdUbIbyYm&sz=w1000", url: "https://www.wago.com/global/" },
    { type: "Equipamentos, Automações e Sistemas Energéticos", image: "https://drive.google.com/thumbnail?id=1h_qFikyA8Grx19TsBGjpakyW5R0ygyAp&sz=w1000", url: "https://www.siemens.com/pt-pt/" },
    { type: "Material Elétrico", image: "https://drive.google.com/thumbnail?id=1KWoodbR8w7L36rG1G7lC6ztq7LMkdONg&sz=w1000", url: "https://www.al.pt/pt-pt/" },
    { type: "Material e Infraestruturas Elétricas", image: "https://drive.google.com/thumbnail?id=1LyLgXFcClPV_ZmR2RIoS_tgDCsmC4_P8&sz=w1000", url: "https://www.legrand.pt/" },


  ];

  return (
    <div className="pt-24 pb-0 bg-white overflow-x-hidden">
      <SEO 
        title={t.seo.partners.title} 
        description={t.seo.partners.description} 
      />

      {/* 1. Hero Section - Mais Sóbrio */}
      <div className="bg-corporate py-20 text-center text-white relative">
        <div className="container mx-auto px-4 md:px-12 relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold uppercase font-heading mb-6 tracking-tight">{t.partners.heroTitle}</h1>
          <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg leading-relaxed border-l-2 border-brand-light pl-6 text-left md:text-center md:border-l-0 md:pl-0">
            {t.partners.heroDesc}
          </p>
        </div>
        {/* Background subtil */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
        
        {/* 2. E-REDES: Layout Corporativo (Lado a Lado) */}
        <section className="mb-24">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex flex-col md:flex-row gap-6 items-start"
           >
              {/* Lado Esquerdo: Identidade Visual / Badge */}
              <div className="w-full md:w-auto md:min-w-[280px] flex flex-row md:flex-col items-center md:items-start justify-start gap-4 md:gap-0 shrink-0 border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0 md:pr-8">
                 <div className="w-32 md:w-52">
                     <img 
                        src="https://drive.google.com/thumbnail?id=1UTAnm_KyFRSMMJbhwzrlkhB9kGsphfO6&sz=w1000" 
                        alt="E-REDES" 
                        className="w-full h-auto object-contain" 
                     />
                 </div>
                 
                 {/* Mobile Text (Right side of logo) */}
                 <div className="md:hidden text-left">
                     <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 leading-tight">
                         Empreiteiro<br/>Qualificado
                     </div>
                 </div>

                 {/* Desktop Text (Below logo) */}
                 <div className="hidden md:flex justify-between w-52 text-xs font-bold uppercase tracking-widest text-gray-400 mt-2">
                    <span>Empreiteiro</span>
                    <span>Qualificado</span>
                 </div>
              </div>

              {/* Lado Direito: Conteúdo Técnico */}
              <div className="md:flex-1 pt-2 md:pt-0 md:pl-8">
                 <div className="mb-6">
                    <h3 className="text-xl font-bold text-corporate mb-4">
                       {t.partners.eredesHighlight.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {t.partners.eredesHighlight.desc}
                    </p>
                 </div>
                 
                 <div className="bg-gray-50 p-6 border-l-4 border-yellow-400">
                    <p className="text-sm text-gray-700 font-medium">
                       <span className="font-bold text-corporate">Nota Técnica:</span> Cumprimento integral das normas DMA-C62-805/N (Baixadas) e DMA-C62-810/N (Postos de Transformação).
                    </p>
                 </div>
              </div>
           </motion.div>
        </section>

        {/* 3. FORNECEDORES: 6 Cartões Brancos (Layout Grid) */}
        <section className="mb-24">
          <div className="mb-12 border-b border-gray-200 pb-4 flex flex-col md:flex-row justify-between items-end">
             <div>
                <h2 className="text-2xl font-bold text-corporate font-heading uppercase tracking-wide">
                  {t.partners.suppliersTitle}
                </h2>
                <p className="text-gray-500 text-sm mt-2 max-w-xl">
                  {t.partners.suppliersDesc}
                </p>
             </div>
             <div className="hidden md:flex gap-6 text-xs font-bold text-gray-400 uppercase tracking-widest">
                <span className="flex items-center gap-1"><Award size={14} className="text-accent" /> Materiais Homologados</span>
                <span className="flex items-center gap-1"><Check size={14} className="text-accent" /> ISO 9001</span>
             </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
             {partnerSlots.map((slot, index) => {
               const CardContent = (
                 <>
                   {/* Main Area: Logo */}
                   <div className="flex-grow flex items-center justify-center p-6 relative min-h-0">
                      {slot.image ? (
                          <img 
                              src={slot.image} 
                              alt={slot.type} 
                              className="h-24 md:h-32 w-auto max-w-[min(100%,200px)] md:max-w-[240px] object-contain transition-all duration-300" 
                          />
                      ) : (
                          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-300">
                              <ShieldCheck size={24} />
                          </div>
                      )}
                   </div>

                   {/* Bottom Label Area */}
                   <div className="bg-detail py-3 px-2 text-center border-t border-gray-100 group-hover:bg-brand-light transition-colors duration-300">
                      <span className="text-[10px] md:text-xs font-bold text-gray-500 group-hover:text-white uppercase tracking-widest transition-colors block truncate">
                         {slot.type}
                      </span>
                   </div>
                 </>
               );

               return (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: index * 0.1 }}
                   viewport={{ once: true }}
                   className="h-48 md:h-56"
                 >
                   {slot.url ? (
                     <a 
                       href={slot.url} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="group bg-white border border-gray-200 rounded-sm hover:shadow-xl hover:border-brand-light/30 transition-all duration-300 flex flex-col h-full overflow-hidden cursor-pointer"
                     >
                       {CardContent}
                     </a>
                   ) : (
                     <div className="group bg-white border border-gray-200 rounded-sm hover:shadow-xl hover:border-brand-light/30 transition-all duration-300 flex flex-col h-full overflow-hidden">
                       {CardContent}
                     </div>
                   )}
                 </motion.div>
               );
             })}
          </div>
        </section>

      </div>

      {/* 4. PARCEIROS PÚBLICOS: Colunas Sólidas */}
      <section className="bg-corporate text-white py-20 md:py-28">
         <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
               <div className="max-w-xl">
                  <h2 className="text-3xl font-bold uppercase font-heading mb-4 text-white">
                    {t.partners.exclusiveTitle}
                  </h2>
                  <div className="h-1 w-20 bg-brand-light mb-6"></div>
                  <p className="text-gray-400 font-light text-lg">
                    {t.partners.exclusiveDesc}
                  </p>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 border-t border-b border-white/10">
               {t.partners.exclusivePartners?.map((partner: any, index: number) => (
                 <div key={index} className="py-12 md:py-16 md:px-12 first:pl-0 last:pr-0">
                    <span className="block text-xs font-bold text-brand-light uppercase tracking-widest mb-4">
                       {partner.type}
                    </span>
                    <h3 className="text-2xl font-bold mb-6 text-white font-heading">
                       {partner.name}
                    </h3>
                    <p className="text-gray-400 text-base leading-relaxed">
                      {partner.desc}
                    </p>
                 </div>
               ))}
            </div>
         </div>
      </section>
      
      {/* 5. Minimal CTA */}
      <div className="w-full py-12 md:py-16 bg-[linear-gradient(105deg,#3B455B_60%,#252B3B_60.1%)] text-center relative z-10 border-t-4 border-brand-light overflow-hidden">
         {/* Abstract Decoration */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none"></div>

         <div className="container mx-auto px-6 md:px-12 relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-heading uppercase tracking-wide">
              {t.partners.ctaTitle}
            </h2>
            <div className="flex justify-center">
               <CTAButton 
                  to="/contact?subject=parceria" 
                  text={t.partners.ctaButton} 
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-[#3B455B] rounded-sm"
               />
            </div>
         </div>
      </div>

    </div>
  );
};

export default Partners;