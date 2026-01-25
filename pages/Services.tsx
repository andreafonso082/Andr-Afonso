import React from 'react';
import { Zap, Car, Lightbulb, HardHat, Check, FileText, Activity, Wrench, BatteryCharging, Layers } from 'lucide-react';
import CTAButton from '../components/CTAButton';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  // Mapping icons to category IDs for rendering
  const getIcon = (id: string) => {
     switch(id) {
         case 'projects': return <FileText className="w-12 h-12 text-accent" />;
         case 'plrs': return <Activity className="w-12 h-12 text-accent" />;
         case 'installations': return <Wrench className="w-12 h-12 text-accent" />;
         case 'substations': return <Zap className="w-12 h-12 text-accent" />;
         case 'ev_charging': return <BatteryCharging className="w-12 h-12 text-accent" />;
         case 'others': return <Layers className="w-12 h-12 text-accent" />;
         default: return <Zap className="w-12 h-12 text-accent" />;
     }
  };

  // Mapping images (could be in translation file or static, keeping static here but mapped by ID)
  const getImage = (id: string) => {
    switch(id) {
        case 'projects': return "https://picsum.photos/seed/blueprints/800/600";
        case 'plrs': return "https://picsum.photos/seed/electric_grid/800/600";
        case 'installations': return "https://picsum.photos/seed/electrician_work/800/600";
        case 'substations': return "https://picsum.photos/seed/transformer/800/600";
        case 'ev_charging': return "https://picsum.photos/seed/evcharging/800/600";
        case 'others': return "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop";
        default: return "https://picsum.photos/seed/electricity/800/600";
    }
  };

  return (
    <div className="pt-24 pb-12">
      <div className="bg-corporate py-16 mb-16 text-center text-white">
        <h1 className="text-4xl font-normal font-heading mb-4">{t.services.heroTitle}</h1>
        <p className="text-gray-300 max-w-2xl mx-auto font-light">
          {t.services.heroDesc}
        </p>
      </div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col gap-24">
        {t.services.categories.map((service: any, index: number) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
          >
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute top-4 left-4 w-full h-full border-2 border-brand-light rounded-sm z-0 transform translate-x-2 translate-y-2 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300"></div>
              <img 
                src={getImage(service.id)} 
                alt={service.title} 
                className="relative z-10 w-full rounded-sm shadow-lg grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2">
              <div className="mb-6">{getIcon(service.id)}</div>
              <h2 className="text-3xl font-normal text-corporate mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-8 leading-relaxed font-body">
                {service.description}
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {service.details.map((detail: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <span className="bg-detail p-1 rounded-full"><Check size={12} className="text-accent" /></span>
                    {detail}
                  </li>
                ))}
              </ul>

              <CTAButton to={`/services/${service.id}`} text={t.common.seeMore} variant="primary" />
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-24 bg-detail py-16 text-center">
        <div className="container mx-auto px-6">
           <h3 className="text-2xl font-normal text-corporate mb-4">{t.services.notFoundTitle}</h3>
           <p className="text-gray-600 mb-8">{t.services.notFoundDesc}</p>
           <CTAButton to="/contact" text={t.services.notFoundCta} variant="secondary" />
        </div>
      </div>
    </div>
  );
};

export default Services;