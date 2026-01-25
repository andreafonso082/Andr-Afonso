import React from 'react';
import { Briefcase, MapPin, Clock, ArrowRight, Mail, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import CTAButton from '../components/CTAButton';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

const Careers: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-12 bg-white">
      <SEO 
        title={t.seo.careers.title} 
        description={t.seo.careers.description} 
      />

      {/* Header */}
      <div className="bg-corporate py-16 mb-16 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <h1 className="text-4xl font-normal font-heading mb-4">{t.careers.heroTitle}</h1>
          <p className="text-gray-300 max-w-2xl mx-auto font-light">
            {t.careers.heroDesc}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        
        {/* Intro Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-normal text-corporate mb-6">{t.careers.introTitle}</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t.careers.introDesc}
            </p>
            <ul className="space-y-3">
              {t.careers.benefits.map((item: string, index: number) => (
                <li key={index} className="flex items-center gap-3 text-gray-700 font-semibold">
                  <CheckCircle size={18} className="text-brand-light" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/seed/teamwork/800/600" 
              alt="Equipa a trabalhar" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Job Listings (Blog Style) */}
        <div className="mb-24">
          <h2 className="text-2xl font-normal text-corporate mb-8 border-b-2 border-brand-light inline-block pb-2">
            {t.careers.openingsTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.careers.jobs.map((job: any, index: number) => (
              <motion.div 
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-100 rounded-lg p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-detail text-corporate text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
                    {job.type}
                  </span>
                  <Briefcase size={20} className="text-brand-light" />
                </div>
                
                <h3 className="text-xl font-normal text-corporate mb-2 group-hover:text-accent transition-colors">
                  {job.title}
                </h3>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                </div>

                <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                  {job.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-normal text-gray-400 uppercase mb-2">{t.careers.reqTitle}</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {job.requirements.slice(0, 2).map((req: string, i: number) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                        {req}
                      </li>
                    ))}
                    {job.requirements.length > 2 && <li className="text-xs text-gray-400 pt-1">{t.careers.otherReq}</li>}
                  </ul>
                </div>

                <a 
                  href={`mailto:recrutamento@joaquimefernandes.pt?subject=${encodeURIComponent(job.emailSubject)}`}
                  className="mt-auto w-full flex items-center justify-center gap-2 bg-white border-2 border-accent text-accent hover:bg-accent hover:text-white font-bold py-3 px-4 rounded transition-colors uppercase text-xs tracking-widest"
                >
                  {t.careers.applyBtn} <ArrowRight size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* General Application CTA */}
        <div className="bg-detail rounded-xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Decorative icons */}
          <Mail className="absolute top-10 left-10 text-gray-200 w-24 h-24 -rotate-12" />
          <div className="relative z-10">
            <h2 className="text-3xl font-normal text-corporate mb-4">{t.careers.spontaneousTitle}</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              {t.careers.spontaneousDesc}
            </p>
            
            <a 
              href="mailto:recrutamento@joaquimefernandes.pt?subject=Candidatura%20Espont%C3%A2nea"
              className="inline-flex items-center gap-3 bg-accent hover:bg-[#2A3345] text-white font-bold py-4 px-10 rounded shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 uppercase tracking-widest text-sm"
            >
              <Mail size={18} />
              {t.careers.spontaneousBtn}
            </a>
            
            <p className="mt-4 text-xs text-gray-400">
              {t.careers.spontaneousDisclaimer}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Careers;