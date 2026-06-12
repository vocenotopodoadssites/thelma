/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { statistics } from '../data.ts';
import { Award, ShieldCheck, HeartPulse } from 'lucide-react';

function AnimateNumber({ value, suffix, duration = 1500 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 16);
    
    // Quick ramp up
    const startTime = performance.now();

    const updateTimer = (now: number) => {
      const progress = Math.min((now - startTime) / totalMiliseconds, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeProgress * end);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateTimer);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateTimer);
  }, [value, isInView, duration]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-slate-900 tracking-tight">
      {count.toLocaleString('pt-BR')}
      <span className="text-brand-500 font-sans ml-1 text-3xl sm:text-4xl">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="resultados" className="relative py-20 bg-slate-950 text-white overflow-hidden">
      {/* Intricate subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gold-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Decorative badge above */}
        <div className="flex justify-center items-center space-x-2.5 mb-12">
          <HeartPulse className="h-6 w-6 text-brand-400 animate-pulse" />
          <span className="text-[11px] uppercase tracking-widest text-slate-400 font-extrabold">Estatísticas Reais e Comprovadas</span>
          <div className="h-[1px] w-12 bg-slate-800" />
        </div>

        {/* Counters Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-center"
        >
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col space-y-3 p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm shadow-xl"
            >
              {/* Animated component */}
              <div className="h-16 flex items-center justify-center">
                <AnimateNumber value={stat.value} suffix={stat.suffix} />
              </div>

              <div className="h-[2px] w-8 bg-gold-500/40 mx-auto rounded-full" />

              <div>
                <h4 className="text-sm font-bold text-slate-100 font-sans tracking-wide">
                  {stat.label}
                </h4>
                <p className="text-[11px] text-slate-400 font-light mt-1">
                  {stat.subtext}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quality signature block */}
        <div className="mt-16 pt-8 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3 text-left">
            <div className="h-10 w-10 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800">
              <ShieldCheck className="h-5 w-5 text-gold-400" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-300">Respeito Ético ao Custo do Tratamento</p>
              <p className="text-[10px] text-slate-500">Alinhamento rigoroso com as normas de conduta profissional.</p>
            </div>
          </div>
          <p className="text-slate-400 font-light text-xs max-w-sm sm:text-right font-serif italic">
            "A maior satisfação é ver um idoso voltando a caminhar confiante ou um jovem se livrando de uma cirurgia." - Dra. Thelma Soares
          </p>
        </div>

      </div>
    </section>
  );
}
