import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay = 0 }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow group flex flex-col h-full rounded-sm"
    >
      <div className="bg-detail p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
        {/* Default icon is accent (dark blue), on hover it becomes white */}
        <div className="text-accent group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-normal mb-3 font-sans text-corporate">{title}</h3>
      <p className="text-gray-600 mb-6 font-body text-sm leading-relaxed flex-grow">
        {description}
      </p>
      <Link to="/services" className="inline-flex items-center text-accent font-bold uppercase text-xs tracking-wider group-hover:underline">
        Saber mais <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
};

export default ServiceCard;