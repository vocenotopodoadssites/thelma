/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Calendar, ShieldCheck, MapPin, Award } from 'lucide-react';
import clinicHero from '../assets/images/clinic_hero_1781281818546.jpg';

export default function Hero() {
  const handleWhatsApp = (text: string) => {
    const msg = encodeURIComponent(text);
    window.open(`https://wa.me/5511960403390?text=${msg}`, '_blank');
  };

  return (
    <section id="inicio" className="relative bg-gradient-to-b from-brand-50 via-white to-white pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background Decorative Ripples */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-brand-100/30 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gold-100/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-8 text-left">
            
            {/* Main Brand Title */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-[54px] font-serif font-bold text-slate-900 leading-[1.12] tracking-tight"
              >
                Recupere Seus Movimentos e <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
                  Viva Totalmente Sem Dor
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-slate-600 font-sans text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-2xl"
              >
                Tratamentos personalizados com atendimento individualizado para aliviar dores, recuperar movimentos e devolver sua qualidade de vida, de forma humanizada e focada em reabilitação de excelência.
              </motion.p>
            </div>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
            >
              <button
                onClick={() => handleWhatsApp('Olá! Vi o site e gostaria de conversar com a Dra. Thelma sobre os tratamentos.')}
                className="group flex items-center justify-center space-x-2 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-medium px-8 py-4 rounded-full shadow-xl shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <Calendar className="h-5 w-5" />
                <span>Falar no WhatsApp</span>
              </button>

              <button
                onClick={() => handleWhatsApp('Olá, gostaria de tirar algumas dúvidas sobre os tratamentos de fisioterapia.')}
                className="flex items-center justify-center space-x-2 bg-white border-2 border-brand-200 text-brand-600 hover:text-brand-700 hover:bg-brand-50/50 font-semibold px-8 py-3.5 rounded-full shadow-sm hover:border-brand-300 transition-all cursor-pointer"
              >
                <MessageSquare className="h-5 w-5 text-brand-500" />
                <span>Falar no WhatsApp</span>
              </button>
            </motion.div>
          </div>

          {/* Hero Right Media (Staggered layered cards styling for Premium vibes) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7, type: 'spring' }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            {/* The main high-end clinical mockup illustration frame */}
            <div className="relative w-full max-w-md lg:max-w-none aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 z-10 group">
              <img
                src={clinicHero}
                alt="Clínica Fisioterapia Premium na Aclimação"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
              />
              
              {/* Soft overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent pointer-events-none" />
              
              {/* Dr. Name Label overlay */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 flex justify-between items-center">
                <div>
                  <h4 className="text-sm font-bold text-slate-800 font-serif leading-none">Dra. Thelma S. Soares</h4>
                  <p className="text-[10px] text-brand-500 uppercase font-bold tracking-wider mt-1.5">CREFITO-3 21.590-F</p>
                </div>
                <div className="h-9 w-9 rounded-full bg-brand-50 flex items-center justify-center">
                  <Award className="h-5 w-5 text-brand-500" />
                </div>
              </div>
            </div>

            {/* Secondary layered badge behind */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold-100/40 border border-gold-200/50 rounded-full blur-xl z-0" />
            <div className="absolute -bottom-6 -right-6 w-44 h-44 bg-brand-100/30 rounded-3xl -rotate-12 transform scale-100 z-0 pointer-events-none" />
            
            {/* Real-time scheduling slot notification snippet overlay */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -top-4 right-4 bg-amber-50 border border-amber-200 px-4 py-2.5 rounded-2xl shadow-lg z-20 flex items-center space-x-2"
            >
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-slate-700">Vagas abertas p/ esta semana</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
