import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Check, Upload, FileText, X } from 'lucide-react';
import CTAButton from '../components/CTAButton';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    interest: [] as string[], 
    selectedJobs: [] as string[],
    message: '',
    cvFile: null as File | null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handler for interest checkboxes
  const handleInterestToggle = (value: string) => {
    setFormData(prev => {
      const currentInterests = prev.interest;
      if (currentInterests.includes(value)) {
        return { ...prev, interest: currentInterests.filter(i => i !== value) };
      } else {
        return { ...prev, interest: [...currentInterests, value] };
      }
    });
  };

  // Handler for Job vacancies (Recrutamento)
  const handleJobToggle = (value: string) => {
    setFormData(prev => {
      const currentJobs = prev.selectedJobs;
      if (currentJobs.includes(value)) {
        return { ...prev, selectedJobs: currentJobs.filter(j => j !== value) };
      } else {
        return { ...prev, selectedJobs: [...currentJobs, value] };
      }
    });
  };

  // Handler for File Upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type === 'application/pdf') {
        setFormData(prev => ({ ...prev, cvFile: file }));
      } else {
        alert("Por favor, selecione apenas ficheiros PDF. / Please select PDF files only.");
      }
    }
  };

  const removeFile = () => {
    setFormData(prev => ({ ...prev, cvFile: null }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    if(formData.cvFile) {
        console.log("File attached:", formData.cvFile.name);
    }
    alert('Obrigado pelo seu contacto! / Thank you for contacting us!');
    
    // Reset form
    setFormData({ 
      name: '', email: '', phone: '', subject: '', 
      interest: [], selectedJobs: [], message: '', cvFile: null 
    });
  };

  return (
    <div className="pt-24 pb-12 bg-white">
      <SEO 
        title={t.seo.contact.title} 
        description={t.seo.contact.description} 
      />

      {/* Header */}
      <div className="bg-corporate py-16 mb-16 text-center text-white">
        <h1 className="text-4xl font-normal font-heading mb-4">{t.contact.heroTitle}</h1>
        <p className="text-gray-300 max-w-2xl mx-auto font-light">
          {t.contact.heroDesc}
        </p>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info Side */}
          <div className="lg:w-1/3">
            <h2 className="text-2xl font-normal text-corporate mb-8 border-b-2 border-brand-light inline-block pb-2">
              {t.contact.infoTitle}
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-detail p-3 rounded text-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-normal text-corporate mb-1">{t.contact.labels.address}</h3>
                  <p className="text-gray-600 text-sm">
                    {t.common.address}<br />
                    {t.common.city}<br />
                    Portugal
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-detail p-3 rounded text-accent">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-normal text-corporate mb-1">{t.contact.labels.phone}</h3>
                  <p className="text-gray-600 text-sm mb-1">+351 210 000 000</p>
                  <p className="text-gray-500 text-xs">{t.contact.labels.callCost}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-detail p-3 rounded text-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-normal text-corporate mb-1">{t.contact.labels.email}</h3>
                  <p className="text-gray-600 text-sm">geral@joaquimefernandes.pt</p>
                  <p className="text-gray-600 text-sm">orcamentos@joaquimefernandes.pt</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-detail p-3 rounded text-accent">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-normal text-corporate mb-1">{t.contact.labels.schedule}</h3>
                  <p className="text-gray-600 text-sm">{t.contact.labels.weekdays}</p>
                  <p className="text-gray-600 text-sm">{t.contact.labels.weekend}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-detail rounded border border-gray-200">
               <h4 className="font-normal text-corporate mb-2">{t.contact.labels.emergency}</h4>
               <p className="text-sm text-gray-600 mb-4">{t.contact.labels.emergencyDesc}</p>
               <span className="font-bold text-accent text-lg">800 000 000</span>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-normal text-corporate mb-8 border-b-2 border-brand-light inline-block pb-2">
              {t.contact.formTitle}
            </h2>
            
            <form onSubmit={handleSubmit} className="bg-white rounded shadow-sm border border-gray-100 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">{t.contact.form.name}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-300 rounded p-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">{t.contact.form.email}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-300 rounded p-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">{t.contact.form.phone}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-300 rounded p-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">{t.contact.form.subject}</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-300 rounded p-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  >
                    <option value="">{t.contact.form.subjectPlaceholder}</option>
                    <option value="orcamento">{t.contact.form.optQuote}</option>
                    <option value="informacao">{t.contact.form.optInfo}</option>
                    <option value="recrutamento">{t.contact.form.optRecruitment}</option>
                    <option value="outros">{t.contact.form.optOther}</option>
                  </select>
                </div>
              </div>

              {/* Conditional Field: Area of Interest (for 'orcamento') */}
              <AnimatePresence>
                {formData.subject === 'orcamento' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-6 overflow-hidden"
                  >
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                      {t.contact.form.interest} <span className="text-gray-400 font-normal text-xs ml-1">(Selecione múltiplas opções)</span>
                    </label>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-1">
                      {Object.entries(t.contact.form.optsInterest).map(([key, label]) => {
                         const isSelected = formData.interest.includes(key);
                         return (
                           <div 
                              key={key} 
                              onClick={() => handleInterestToggle(key)}
                              className={`
                                cursor-pointer rounded border p-3 flex items-center gap-3 transition-all duration-200 select-none
                                ${isSelected 
                                  ? 'bg-brand-light/20 border-accent text-corporate shadow-sm' 
                                  : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'}
                              `}
                           >
                             <div className={`
                               w-5 h-5 rounded border flex items-center justify-center transition-colors
                               ${isSelected ? 'bg-accent border-accent' : 'bg-white border-gray-300'}
                             `}>
                               {isSelected && <Check size={14} className="text-white" />}
                             </div>
                             <span className="text-sm font-medium">{label as string}</span>
                           </div>
                         );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Conditional Fields: Recruitment (Job Selection & File Upload) */}
              <AnimatePresence>
                {formData.subject === 'recrutamento' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-6 overflow-hidden space-y-6"
                  >
                    {/* Job Selection */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">
                        {t.contact.form.jobPosition}
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-1">
                        {t.careers.jobs.map((job: any) => {
                          const isSelected = formData.selectedJobs.includes(job.title);
                          return (
                            <div 
                                key={job.id} 
                                onClick={() => handleJobToggle(job.title)}
                                className={`
                                  cursor-pointer rounded border p-3 flex items-center gap-3 transition-all duration-200 select-none
                                  ${isSelected 
                                    ? 'bg-brand-light/20 border-accent text-corporate shadow-sm' 
                                    : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'}
                                `}
                            >
                              <div className={`
                                w-5 h-5 rounded border flex items-center justify-center transition-colors shrink-0
                                ${isSelected ? 'bg-accent border-accent' : 'bg-white border-gray-300'}
                              `}>
                                {isSelected && <Check size={14} className="text-white" />}
                              </div>
                              <div className="flex flex-col">
                                <span className="text-sm font-medium leading-tight">{job.title}</span>
                                <span className="text-xs text-gray-400 mt-0.5">{job.location}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* CV Upload */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">
                         {t.contact.form.cv}
                      </label>
                      
                      {!formData.cvFile ? (
                        <div className="relative border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg p-6 text-center group cursor-pointer">
                           <input 
                             type="file" 
                             accept="application/pdf"
                             onChange={handleFileChange}
                             className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                           />
                           <div className="flex flex-col items-center justify-center pointer-events-none">
                              <Upload className="text-gray-400 group-hover:text-accent mb-2 transition-colors" size={24} />
                              <span className="text-sm font-semibold text-gray-600 group-hover:text-corporate transition-colors">
                                {t.contact.form.uploadFile}
                              </span>
                              <span className="text-xs text-gray-400 mt-1">PDF (Max. 5MB)</span>
                           </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between bg-brand-light/10 border border-brand-light/50 rounded p-3">
                           <div className="flex items-center gap-3 overflow-hidden">
                              <div className="bg-red-100 p-2 rounded text-red-500">
                                 <FileText size={20} />
                              </div>
                              <span className="text-sm font-medium text-gray-700 truncate max-w-[200px] sm:max-w-xs">
                                {formData.cvFile.name}
                              </span>
                           </div>
                           <button 
                             type="button" 
                             onClick={removeFile}
                             className="p-1 hover:bg-red-100 rounded-full text-gray-400 hover:text-red-500 transition-colors"
                           >
                             <X size={18} />
                           </button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">{t.contact.form.message}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-300 rounded p-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto bg-accent hover:bg-[#2A3345] text-white font-bold py-3 px-8 rounded shadow-lg uppercase tracking-widest text-sm transition-all duration-300 flex items-center justify-center gap-2"
              >
                {t.contact.form.submit} <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-normal text-corporate mb-8">{t.contact.locationTitle}</h2>
          <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden relative shadow-inner">
             {/* Iframe for Google Maps visualization (Pointing to Moncarapacho/Olhão) */}
             <iframe 
                src="https://maps.google.com/maps?q=Estrada+Nacional+125+Bias+Norte+Moncarapacho,+8700-066+Olhão&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Localização"
             ></iframe>
             {/* Overlay to ensure scrolling page works unless interacting directly */}
             <div className="absolute inset-0 pointer-events-none border-4 border-white/50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;