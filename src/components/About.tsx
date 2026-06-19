/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { therapistData } from '../data.ts';
import { Award, GraduationCap, CheckCircle2, ShieldAlert } from 'lucide-react';
import thelmaPortrait from '../assets/images/thelma_face_1781281835065.jpg';

export default function About() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá, Dra. Thelma! Gostaria de conversar sobre meu caso clínico e agendar uma consulta.');
    window.open(`https://wa.me/5511960403390?text=${message}`, '_blank');
  };

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white overflow-hidden relative">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-gold-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Professional Portrait Frame with badges */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-sm"
            >
              {/* Gold backing border design */}
              <div className="absolute inset-4 rounded-3xl border-2 border-gold-400 transform rotate-3 scale-102 -z-10" />
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-50">
                <img
                  src={thelmaPortrait}
                  alt={therapistData.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto aspect-square object-cover"
                />
                
                {/* Floating Experience Badge */}
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md text-white px-3 py-2 rounded-2xl flex items-center space-x-2 border border-white/20">
                  <Award className="h-5 w-5 text-gold-400" />
                  <div className="text-left">
                    <span className="block text-base font-bold font-serif leading-none">10+ Anos</span>
                    <span className="block text-[9px] uppercase tracking-wider text-slate-300 font-medium">De Atuação</span>
                  </div>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="absolute -bottom-5 -right-4 bg-white shadow-xl rounded-2xl p-4 border border-slate-100 flex items-center space-x-3 max-w-xs">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-slate-800">Dra. Regularizada</h5>
                  <p className="text-[10px] text-slate-500">{therapistData.crefito}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Narrative Story & Credentials */}
          <div className="lg:col-span-7 flex flex-col space-y-6 lg:space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-brand-500 font-extrabold block mb-2">Quem Cuidará de Você</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
                Fisioterapia Humanizada, Científica e Sem Pressa
              </h2>
              <div className="h-1 w-16 bg-brand-500 mt-3 rounded-full" />
            </div>

            <div className="space-y-4 text-slate-600 font-light text-base leading-relaxed">
              <p>
                Acreditamos em uma abordagem séria e minuciosa. Sua primeira consulta é uma <strong>Avaliação Biomecânica Detalhada de 1 hora</strong> para identificar os desequilíbrios mecânicos estruturais e a causa primária das dores.
              </p>
              <p className="font-medium text-slate-800 font-sans italic border-l-2 border-gold-400 pl-4 bg-gold-50/45 py-3 rounded-r-xl">
                "Aqui, você nunca será 'abandonado debaixo de um choquinho' enquanto o profissional atende outras salas. Meu consultório na Aclimação promove um tratamento 100% individual, combinando terapias manuais refinadas e exercícios terapêuticos inteligentes específicos para você."
              </p>
              <p>
                O foco é a <strong>fisioterapia ativa</strong>. Prescrevemos movimentos direcionados ao invés de tratamentos passivos genéricos, fornecendo o fortalecimento exato para blindar sua coluna e articulações, devolvendo a autonomia que você de fato merece.
              </p>
            </div>

            {/* Specialty List */}
            <div className="space-y-3.5 bg-brand-50/40 p-6 rounded-2xl border border-brand-100/50">
              <h4 className="text-sm font-bold text-brand-900 flex items-center space-x-2">
                <GraduationCap className="h-5 w-5 text-brand-500" />
                <span>Formação & Especialidades Clínicas:</span>
              </h4>
              <ul className="grid sm:grid-cols-2 gap-3 pl-1">
                {therapistData.specialties.map((spec, index) => (
                  <li key={index} className="flex items-start space-x-2 text-xs text-slate-700">
                    <span className="text-gold-500 font-bold shrink-0 mt-0.5">✓</span>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Call Action inside section */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <button
                onClick={handleWhatsApp}
                className="bg-brand-900 hover:bg-brand-950 text-white font-medium text-sm px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center space-x-2"
              >
                <span>Falar Diretamente com a Dra. Thelma</span>
                <span className="text-gold-400">→</span>
              </button>
              <div className="text-xs text-slate-400 max-w-xs font-light">
                Agende uma conversa prévia gratuita via mensagem para relatar rapidamente suas dores.
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
