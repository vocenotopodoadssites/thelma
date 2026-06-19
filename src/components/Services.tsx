/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { servicesList } from '../data.ts';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import LucideIcon from './LucideIcon.tsx';

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', 'Diagnóstico', 'Coluna Vertebral', 'Articulações', 'Movimento Ativo', 'Reabilitação'];

  const filteredServices = selectedCategory === 'Todos'
    ? servicesList
    : servicesList.filter(service => service.category === selectedCategory);

  const handleBooking = (serviceName: string) => {
    const text = `Olá, Dra. Thelma! Gostaria de falar sobre o tratamento para: ${serviceName}.`;
    window.open(`https://wa.me/5511960403390?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="servicos" className="py-20 lg:py-28 bg-brand-50/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-brand-500 font-extrabold block mb-2">Sua Saúde sob Medida</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Especialidades Clínicas Integradas
          </h2>
          <div className="h-1 w-16 bg-gold-400 mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 font-sans mt-4 font-light text-base sm:text-lg">
            Oferecemos uma gama completa de especialidades clínicas em fisioterapia, utilizando recursos avançados e tratamentos com comprovação científica para assegurar sua excelência corporal.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                selectedCategory === category
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-100 hover:border-slate-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid with Framer Motion AnimatePresence */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                layout
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-slate-100/80 transition-all duration-300 flex flex-col justify-between h-full group"
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-50">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold text-brand-600 shadow-sm border border-brand-50">
                    {service.category}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Header with mini-icon mapping */}
                    <div className="flex items-center space-x-2.5 mb-3">
                      <div className="h-8 w-8 rounded-lg bg-brand-50 flex items-center justify-center text-brand-500 shrink-0">
                        <LucideIcon name={service.icon} className="h-4.5 w-4.5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold font-sans text-slate-800 leading-tight group-hover:text-brand-600 transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Bullet lists */}
                    <ul className="space-y-1.5 mb-6">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-1.5 text-[11px] sm:text-xs text-slate-600">
                          <Check className="h-3 w-3 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Dynamic Action Button */}
                  <button
                    onClick={() => handleBooking(service.title)}
                    className="w-full py-2.5 px-4 bg-brand-50 hover:bg-brand-500 text-brand-600 hover:text-white rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center justify-center space-x-1.5 cursor-pointer group/btn"
                  >
                    <span>Falar no WhatsApp</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
 
        {/* Informative advice */}
        <div className="mt-12 text-center text-xs text-slate-500 flex items-center justify-center space-x-2">
          <Sparkles className="h-4.5 w-4.5 text-gold-400" />
          <span>Sua dúvida não se encaixa nas categorias acima? Entre em contato para falar diretamente com a Dra. Thelma.</span>
        </div>

      </div>
    </section>
  );
}
