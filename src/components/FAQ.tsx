/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { faqList } from '../data.ts';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleOpen = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      {/* Decorative element background */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-brand-100/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-gold-100/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-brand-500 font-extrabold block mb-2">Esclarecendo Suas Dúvidas</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Perguntas Frequentes
          </h2>
          <div className="h-1 w-16 bg-brand-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 font-sans mt-4 font-light text-base sm:text-lg">
            Tem alguma pergunta sobre como funciona o atendimento? Compilamos abaixo as principais respostas para otimizar sua vinda.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {faqList.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleOpen(faq.id)}
                  className="w-full px-6 py-5 sm:py-6 flex justify-between items-center text-left focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center space-x-3.5 pr-2">
                    <HelpCircle className="h-5 w-5 text-brand-500 shrink-0" />
                    <span className="text-sm sm:text-base font-bold text-slate-800 font-sans">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                    isOpen ? 'bg-brand-500 border-brand-500 text-white rotate-180' : 'bg-slate-50 border-slate-200 text-slate-500'
                  }`}>
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                </button>

                {/* Animated content box */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-slate-50 text-slate-600 font-light text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* CTA prompt advice */}
        <div className="text-center mt-12 bg-white rounded-3xl border border-dashed border-slate-200 p-6 sm:p-8">
          <p className="text-sm sm:text-base text-slate-700 font-medium">
            Tem alguma outra dúvida específica sobre seu estado físico?
          </p>
          <button
            onClick={() => {
              const msg = encodeURIComponent("Olá, Dra. Thelma! Tenho uma dúvida sobre fisioterapia que não estava no FAQ: ");
              window.open(`https://wa.me/5511960403390?text=${msg}`, '_blank');
            }}
            className="mt-4 text-brand-600 font-bold hover:text-brand-700 text-sm flex items-center justify-center space-x-1 mx-auto group cursor-pointer"
          >
            <span>Falar no WhatsApp da Clínica</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

      </div>
    </section>
  );
}
