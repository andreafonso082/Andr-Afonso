import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowLeft, ArrowRight, Tag } from 'lucide-react';
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
        case 'others': return "https://picsum.photos/seed/consulting/1920/1080";
        default: return "https://picsum.photos/seed/electricity/1920/1080";
    }
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
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={getImage(id || '')} 
            alt={serviceData.seoTitle} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-corporate/80"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal font-heading text-white mb-6 leading-tight max-w-4xl mx-auto">
              {serviceData.seoTitle}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              {serviceData.description}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-16">
        
        {/* Breadcrumb / Back Link */}
        <Link to="/services" className="inline-flex items-center text-gray-500 hover:text-accent mb-12 transition-colors font-semibold text-sm">
          <ArrowLeft size={16} className="mr-2" /> {t.nav.services}
        </Link>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Main Content Area */}
          <div className="lg:w-2/3">
            <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <h2 className="text-3xl font-normal text-corporate mb-8 border-l-4 border-accent pl-4">
                {serviceData.title}
              </h2>
              <div className="prose prose-lg text-gray-600 font-body leading-relaxed mb-12">
                <p>{serviceData.fullText}</p>
              </div>

              <h3 className="text-xl font-normal text-corporate mb-6">O que incluímos neste serviço:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {serviceData.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start gap-3 bg-detail p-4 rounded border border-gray-100">
                    <Check size={20} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar / CTA Area */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              {/* Call to Action Box */}
              <div className="bg-corporate text-white p-8 rounded-lg shadow-xl mb-8">
                <h3 className="text-2xl font-normal font-heading mb-4">Pronto para avançar?</h3>
                <p className="text-gray-400 mb-8 text-sm">
                  Fale com a nossa equipa técnica especializada para obter um orçamento personalizado para o seu projeto.
                </p>
                <Link 
                  to="/contact" 
                  className="block w-full text-center bg-brand-light hover:bg-white text-corporate font-bold py-3 px-6 rounded transition-colors uppercase tracking-widest text-sm"
                >
                  {t.nav.quote}
                </Link>
              </div>

              {/* SEO Keyword Cloud (Visible) */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h4 className="flex items-center gap-2 font-normal text-corporate mb-4 text-sm uppercase tracking-wider">
                  <Tag size={16} className="text-accent" /> Áreas de Foco
                </h4>
                <div className="flex flex-wrap gap-2">
                  {serviceData.keywords.map((keyword: string, index: number) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full hover:bg-brand-light/20 transition-colors">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Footer Navigation Area */}
      <div className="bg-detail py-12 border-t border-gray-200">
        <div className="container mx-auto px-6 text-center">
           <h3 className="text-2xl font-normal text-corporate mb-6">Explore outros serviços</h3>
           <CTAButton to="/services" text="Ver todos os serviços" variant="outline" className="text-corporate border-corporate hover:bg-corporate hover:text-white" />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;