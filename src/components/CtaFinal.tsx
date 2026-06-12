/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ArrowRight } from 'lucide-react';

export default function CtaFinal() {
  const handleWhatsApp = () => {
    const text = encodeURIComponent('Olá, gostaria de dar início ao meu tratamento e agendar uma primeira avaliação clínica.');
    window.open(`https://wa.me/5511987654321?text=${text}`, '_blank');
  };

  return (
    <section className="relative py-20 lg:py-28 bg-slate-900 border-t border-slate-800 text-white overflow-hidden text-center">
      {/* Decorative vector grids & ripples */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(#ffffff 2px, transparent 2.5px)", backgroundSize: "32px 32px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center space-y-6 sm:space-y-8">
        
        {/* Soft tag accent */}
        <span className="text-xs uppercase tracking-widest text-gold-400 font-extrabold bg-slate-800/80 px-4 py-1.5 rounded-full border border-slate-700/60">
          Chegou a hora de se cuidar
        </span>

        {/* Brand headline */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight text-white max-w-2xl mx-auto">
            Não Conviva Mais Com a Dor
          </h2>
          <p className="text-slate-400 font-sans text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-xl mx-auto">
            Agende sua avaliação hoje mesmo e descubra como recuperar integralmente seus movimentos, sua força articular e sua qualidade de vida.
          </p>
        </div>

        {/* Big Action Call */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleWhatsApp}
          className="group flex items-center space-x-3 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-bold py-4 px-8 rounded-full shadow-2xl shadow-brand-500/20 hover:shadow-brand-500/40 transition-all cursor-pointer text-sm sm:text-base"
        >
          <MessageSquare className="h-5.5 w-5.5 text-white/90" />
          <span>Falar com Fisioterapeuta via WhatsApp</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </motion.button>

        {/* Supporting trust copy */}
        <div className="grid grid-cols-2 gap-4 text-xs text-slate-400 pt-6 border-t border-slate-800 max-w-md w-full">
          <div>
            <strong className="block text-slate-300 font-bold">Sem filas</strong>
            <span>Triagem em menos de 1 hora</span>
          </div>
          <div>
            <strong className="block text-slate-300 font-bold">VIP & Privado</strong>
            <span>Sala exclusiva de atendimento</span>
          </div>
        </div>

      </div>
    </section>
  );
}
