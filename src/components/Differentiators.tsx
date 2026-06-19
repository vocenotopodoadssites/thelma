/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { differentiatorsList } from '../data.ts';
import { Sparkles } from 'lucide-react';
import LucideIcon from './LucideIcon.tsx';

export default function Differentiators() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 } 
    }
  };

  return (
    <section id="diferenciais" className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Decorative top wave/glow border */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 px-3.5 py-1 rounded-full text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
            <Sparkles className="h-3 w-3 text-gold-400" />
            <span>Por que nos escolher?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-100 tracking-tight">
            Nossos Pilares de Excelência Clínica
          </h2>
          <div className="h-1 w-16 bg-gold-400 mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 font-sans mt-4 font-light text-base sm:text-lg">
            Muito além do básico. Estruturamos nosso consultório de fisioterapia na Aclimação para oferecer uma experiência verdadeiramente individualizada e resolutiva de reabilitação.
          </p>
        </div>

        {/* Bento/Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6lg:gap-8"
        >
          {differentiatorsList.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                borderColor: "rgba(222, 193, 125, 0.45)",
                backgroundColor: "rgba(15, 23, 42, 0.8)"
              }}
              className="group p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Dynamically mapped Lucide Icon with rich gold borders */}
                <div className="h-12 w-12 rounded-xl bg-slate-800 flex items-center justify-center text-gold-400 mb-6 group-hover:bg-gold-500 group-hover:text-slate-950 transition-all duration-500">
                  <LucideIcon name={item.icon} className="h-5 w-5" />
                </div>
                
                <h3 className="text-lg font-bold font-sans text-slate-100 mb-2.5 group-hover:text-gold-400 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-slate-400 font-light text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom decorative anchor indicator */}
              <div className="h-[2px] w-0 bg-gold-500 mt-6 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
