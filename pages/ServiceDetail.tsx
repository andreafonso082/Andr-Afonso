import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowLeft, ArrowRight, Tag, ShieldCheck, TrendingUp, Settings, FileText, ImageIcon } from 'lucide-react';
import CTAButton from '../components/CTAButton';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();

  // Helper to map images (reused logic for consistency)
  const getImage = (serviceId: string) => {
    switch(serviceId) {
        case 'projects': return "https://picsum.photos/seed/blueprints/1920/1080";
        case 'plrs': return "https://picsum.photos/seed/electric_grid/1920/1080";
        case 'installations': return "https://picsum.photos/seed/electrician_work/1920/1080";
        case 'substations': return "https://picsum.photos/seed/transformer/1920/1080";
        case 'ev_charging': return "https://picsum.photos/seed/evcharging/1920/1080";
        case 'telecommunications': return "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop";
        case 'others': return "https://picsum.photos/seed/consulting/1920/1080";
        default: return "https://picsum.photos/seed/electricity/1920/1080";
    }
  };

  // Helper to get Gallery Images (Mock data based on ID seed)
  const getGalleryImages = (serviceId: string) => {
     return [
        `https://picsum.photos/seed/${serviceId}1/600/400`,
        `https://picsum.photos/seed/${serviceId}2/600/400`,
        `https://picsum.photos/seed/${serviceId}3/600/400`,
     ];
  };

  // Safe check if service exists
  const serviceData = t.serviceDetails && id && t.serviceDetails[id] ? t.serviceDetails[id] : null;

  if (!serviceData) {
    return (
      <div className="pt-32 pb-20 text-center container mx-auto px-6">
        <SEO title="Serviço Não Encontrado | J&F" description="O serviço que procura não foi encontrado." />
        <h2 className="text-2xl font-normal text-corporate mb-4">Serviço não encontrado / Service not found</h2>
        <CTAButton to="/services" text="Voltar / Back" variant="secondary" />
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Dynamic SEO based on service data */}
      <SEO 
        title={`${serviceData.seoTitle} | Joaquim & Fernandes`} 
        description={serviceData.seoDescription || serviceData.description} 
      />

      {/* 1. SEO HERO SECTION */}
      <div className="relative h-[50vh] min-h-[350px] md:h-[60vh] md:min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={getImage(id || '')} 
            alt={serviceData.seoTitle} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-corporate/80"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-12 relative z-10 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-normal font-heading text-white mb-4 md:mb-6 leading-tight max-w-4xl mx-auto">
              {serviceData.seoTitle}
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              {serviceData.description}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 py-12 md:py-16">
        
        {/* Breadcrumb / Back Link */}
        <Link to="/services" className="inline-flex items-center text-gray-500 hover:text-brand-light mb-8 md:mb-12 transition-colors font-semibold text-sm">
          <ArrowLeft size={16} className="mr-2" /> {t.nav.services}
        </Link>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Main Content Area */}
          <div className="w-full lg:w-2/3">
            <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-normal text-corporate mb-6 md:mb-8 border-l-4 border-brand-light pl-4">
                {serviceData.title}
              </h2>
              <div className="prose prose-lg text-gray-600 font-body leading-relaxed mb-12 text-sm md:text-base text-justify">
                <p>{serviceData.fullText}</p>
              </div>

              {/* FEATURES LIST */}
              <h3 className="text-lg md:text-xl font-normal text-corporate mb-4 md:mb-6 uppercase tracking-wider">
                 O que incluímos
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
                {serviceData.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start gap-3 bg-detail p-4 rounded border border-gray-100">
                    <Check size={20} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* BENEFITS SECTION - NEW */}
              {serviceData.benefits && (
                <div className="mb-16">
                   <h3 className="text-lg md:text-xl font-normal text-corporate mb-6 uppercase tracking-wider flex items-center gap-2">
                      <ShieldCheck className="text-brand-light" /> Porquê a J&F?
                   </h3>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {serviceData.benefits.map((benefit: any, index: number) => (
                         <div key={index} className="bg-white p-6 rounded shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <h4 className="text-corporate font-bold mb-2 text-base">{benefit.title}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
                         </div>
                      ))}
                   </div>
                </div>
              )}

              {/* PROCESS SECTION - NEW */}
              {serviceData.process && (
                <div className="mb-16">
                   <h3 className="text-lg md:text-xl font-normal text-corporate mb-8 uppercase tracking-wider flex items-center gap-2">
                      <Settings className="text-brand-light" /> Metodologia de Trabalho
                   </h3>
                   <div className="relative border-l-2 border-brand-light/30 ml-4 space-y-8 py-2">
                      {serviceData.process.map((step: any, index: number) => (
                         <div key={index} className="relative pl-8">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-light border-2 border-white shadow-sm"></div>
                            <h4 className="text-corporate font-bold text-base mb-1">
                               <span className="text-accent mr-2">0{index + 1}.</span>{step.title}
                            </h4>
                            <p className="text-gray-500 text-sm">{step.desc}</p>
                         </div>
                      ))}
                   </div>
                </div>
              )}

              {/* GALLERY SECTION - NEW */}
              <div className="mb-12">
                 <h3 className="text-lg md:text-xl font-normal text-corporate mb-6 uppercase tracking-wider flex items-center gap-2">
                    <ImageIcon className="text-brand-light" /> Galeria
                 </h3>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {getGalleryImages(id || 'default').map((img, index) => (
                       <div key={index} className={`rounded-lg overflow-hidden h-48 md:h-40 relative group ${index === 0 ? 'md:col-span-2 md:h-full' : ''}`}>
                          <img 
                             src={img} 
                             alt="Exemplo de Obra" 
                             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                       </div>
                    ))}
                 </div>
              </div>

            </motion.div>
          </div>

          {/* Sidebar / CTA Area */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-32">
              {/* Call to Action Box */}
              <div className="bg-corporate text-white p-6 md:p-8 rounded-lg shadow-xl mb-8">
                <h3 className="text-xl md:text-2xl font-normal font-heading mb-4">Pronto para avançar?</h3>
                <p className="text-gray-400 mb-8 text-sm">
                  Fale com a nossa equipa técnica especializada para obter um orçamento personalizado para o seu projeto.
                </p>
                <Link 
                  to={`/contact?subject=orcamento&interest=${id}`}
                  className="block w-full text-center bg-white hover:bg-detail text-accent font-bold py-3 px-6 rounded transition-colors uppercase tracking-widest text-sm"
                >
                  {t.nav.quote}
                </Link>
              </div>

              {/* SEO Keyword Cloud (Visible) */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
                <h4 className="flex items-center gap-2 font-normal text-corporate mb-4 text-sm uppercase tracking-wider">
                  <Tag size={16} className="text-brand-light" /> Áreas de Foco
                </h4>
                <div className="flex flex-wrap gap-2">
                  {serviceData.keywords.map((keyword: string, index: number) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full hover:bg-brand-light/20 transition-colors">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Downloads / Tech Specs Placeholder */}
              <div className="bg-detail p-6 rounded-lg border border-gray-200">
                  <h4 className="flex items-center gap-2 font-normal text-corporate mb-4 text-sm uppercase tracking-wider">
                     <FileText size={16} className="text-brand-light" /> Documentação
                  </h4>
                  <ul className="space-y-3">
                     <li className="flex items-center justify-between text-sm text-gray-600 border-b border-gray-200 pb-2">
                        <span>Ficha Técnica</span>
                        <span className="text-xs bg-gray-200 px-2 py-0.5 rounded">PDF</span>
                     </li>
                     <li className="flex items-center justify-between text-sm text-gray-600">
                        <span>Portefólio J&F</span>
                        <span className="text-xs bg-gray-200 px-2 py-0.5 rounded">PDF</span>
                     </li>
                  </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
      
      {/* Footer Navigation Area - Centered Content with Blue Background */}
      <div className="w-full py-16 bg-[#3B455B] md:bg-[linear-gradient(105deg,#3B455B_60%,#252B3B_60.1%)] text-center">
        <div className="container mx-auto px-4 md:px-6">
           <h3 className="text-xl md:text-2xl font-normal text-white mb-6 uppercase tracking-wide">
             Explore outros serviços
           </h3>
           <CTAButton 
             to="/services" 
             text="Ver todos os serviços" 
             variant="outline" 
             className="text-white border-white hover:bg-white hover:text-[#3B455B]" 
           />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;