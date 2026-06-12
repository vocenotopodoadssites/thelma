/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { benefitsList } from '../data.ts';
import LucideIcon from './LucideIcon.tsx';

export default function Benefits() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 100, damping: 15 } 
    }
  };

  return (
    <section id="beneficios" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative side shape */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-brand-500 font-bold mb-3">Benefícios Clínicos</h2>
          <p className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Excelência no Tratamento para uma Vida Plena e Ativa
          </p>
          <div className="h-1 w-20 bg-gold-400 mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 font-sans mt-4 font-light text-base sm:text-lg">
            Combinamos conhecimento acadêmico sólido com uma estrutura acolhedora para oferecer a você uma jornada de reabilitação eficiente, agradável e duradoura.
          </p>
        </div>

        {/* Benefits Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefitsList.map((benefit) => (
            <motion.div
              key={benefit.id}
              variants={cardVariants}
              whileHover={{ 
                y: -6, 
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.05)",
                borderColor: "rgba(14, 165, 233, 0.25)"
              }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon wrapper with gold gradient ring */}
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center text-brand-600 mb-6 group-hover:from-brand-500 group-hover:to-brand-600 group-hover:text-white group-hover:scale-105 transition-all duration-500">
                  <LucideIcon name={benefit.icon} className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-bold text-slate-800 font-sans mb-3 group-hover:text-brand-600 transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  {benefit.description}
                </p>
              </div>

              {/* Minimalist interactive visual touch */}
              <div className="mt-6 flex items-center space-x-1 text-slate-300 group-hover:text-brand-500 transition-colors">
                <span className="text-[10px] uppercase font-bold tracking-widest opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">Saber Mais</span>
                <span className="text-lg">→</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA bottom hook */}
        <div className="text-center mt-12">
          <p className="text-sm text-slate-500">
            Deseja compreender como esses benefícios se aplicam ao seu quadro doloroso?{" "}
            <a href="#contato" className="text-brand-500 font-semibold underline hover:text-brand-600">
              Solicite uma triagem rápida.
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
