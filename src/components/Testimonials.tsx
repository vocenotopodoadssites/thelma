/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { testimonialsList } from '../data.ts';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1: left, 1: right

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsList.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsList.length) % testimonialsList.length);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 150 : -150,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -150 : 150,
      opacity: 0,
      transition: { duration: 0.4, ease: 'easeIn' }
    })
  };

  const current = testimonialsList[currentIndex];

  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-100/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-96 h-96 bg-gold-100/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-brand-500 font-extrabold block mb-2">Relatos de Superação</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Depoimentos de Quem Voltou a Viver Sem Dor
          </h2>
          <div className="h-1 w-16 bg-gold-400 mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 font-sans mt-4 font-light text-base max-w-2xl mx-auto">
            Acompanhe o testemunho real de moradores da Aclimação e de outras regiões de São Paulo que confiaram sua recuperação ao nosso plano de atendimento individualizado.
          </p>
        </div>

        {/* Carousel Slider Card Wrapper */}
        <div className="relative min-h-[380px] sm:min-h-[320px] bg-slate-50 rounded-3xl border border-slate-100 p-8 sm:p-12 shadow-xl shadow-slate-100/30 flex flex-col justify-between">
          <div className="absolute top-8 right-8 text-brand-200 pointer-events-none">
            <Quote className="h-20 w-20 stroke-[1.5]" />
          </div>

          <div className="overflow-hidden relative flex-grow">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-6 flex flex-col h-full"
              >
                {/* Visual Ratings */}
                <div className="flex space-x-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-amber-400 text-amber-400 shrink-0" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-slate-700 italic font-medium font-serif text-lg sm:text-xl leading-relaxed">
                  "{current.text}"
                </p>

                {/* Profile Meta info */}
                <div className="flex items-center space-x-4 pt-4 mt-auto">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    referrerPolicy="no-referrer"
                    className="h-14 w-14 rounded-full border-2 border-brand-200 object-cover shrink-0"
                  />
                  <div>
                    <h4 className="text-base font-bold text-slate-900 font-sans leading-tight">
                      {current.name}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">
                      {current.age} anos • Tratamento de <strong className="text-brand-600 font-medium">{current.condition}</strong>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-slate-200/60 z-20">
            {/* Dots */}
            <div className="flex space-x-2">
              {testimonialsList.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx ? 'w-6 bg-brand-500' : 'w-2.5 bg-slate-300'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev/Next circle buttons */}
            <div className="flex space-x-3">
              <button
                onClick={handlePrev}
                className="h-10 w-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-brand-500 hover:border-brand-300 shadow-sm hover:shadow active:scale-95 transition-all cursor-pointer"
                aria-label="Anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNext}
                className="h-10 w-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-brand-500 hover:border-brand-300 shadow-sm hover:shadow active:scale-95 transition-all cursor-pointer"
                aria-label="Próximo"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

        </div>

        {/* Verification citation badge */}
        <div className="mt-8 text-center text-xs text-slate-400">
          Avaliações coletadas com consentimento explícito dos pacientes para fins informativos de melhora de qualidade assistencial.
        </div>

      </div>
    </section>
  );
}
