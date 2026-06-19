/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, HeartHandshake, Dumbbell, Award, Landmark } from 'lucide-react';

export default function Philosophy() {
  const values = [
    {
      icon: HeartHandshake,
      title: "Atendimento Individualizado",
      text: "Atenção exclusiva e sem pressa durante 100% do tempo. Sem dividir sessões ou delegar exercícios."
    },
    {
      icon: Award,
      title: "Cuidado Científico Contínuo",
      text: "Tratamento guiado por evidências clínicas rigorosas para hérnias, lombalgias e desgastes articulares."
    },
    {
      icon: Dumbbell,
      title: "Fisioterapia Ativa",
      text: "Fortalecimento focado e movimentos prescritos sob medida para blindar suas vértebras e articulações."
    },
    {
      icon: Landmark,
      title: "Acolhimento na Aclimação",
      text: "Um refúgio com tranquilidade acústica, térmica e conforto máximo para a reabilitação de alto padrão."
    }
  ];

  return (
    <section id="filosofia" className="py-20 bg-gradient-to-b from-white to-slate-50/50 overflow-hidden relative">
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-brand-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-gold-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#71a369] font-extrabold block mb-2">A Essência do Nosso Cuidado</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            Nossa Missão, Visão e Valores
          </h2>
          <div className="h-1 w-16 bg-gold-400 mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 font-sans mt-4 font-light text-base sm:text-lg">
            Diretrizes éticas e profissionais que sustentam cada consulta e norteiam a recuperação dos nossos pacientes.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/40 relative group overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-brand-500" />
            <div className="flex items-center space-x-4 mb-6">
              <div className="h-12 w-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 shrink-0">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-800">Nossa Missão</h3>
            </div>
            <p className="text-slate-600 font-light leading-relaxed text-base sm:text-lg">
              Oferecer reabilitação física de excelência e alívio cirúrgico de patologias musculoesqueléticas complexas com foco em <strong>tratamento 100% individual</strong>. Nossa meta é resolver a origem da dor na coluna e articulações, devolvendo autonomia aos movimentos com absoluto respeito e amparo.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/40 relative group overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-gold-400" />
            <div className="flex items-center space-x-4 mb-6">
              <div className="h-12 w-12 bg-gold-50 rounded-2xl flex items-center justify-center text-gold-600 shrink-0">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-800">Nossa Visão</h3>
            </div>
            <p className="text-slate-600 font-light leading-relaxed text-base sm:text-lg">
              Consolidar o consultório na Aclimação como o principal polo de referência de fisioterapia clínica personalizada em São Paulo, reconhecido pela alta acurácia no diagnóstico funcional de um único paciente por vez e por metodologias ativas que encurtam o tempo de alta com biossegurança.
            </p>
          </motion.div>
        </div>

        {/* Values Segment */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/40">
          <div className="flex items-center space-x-3 mb-8">
            <ShieldCheck className="h-6 w-6 text-brand-500 shrink-0" />
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-800">Valores Essenciais</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col space-y-3"
              >
                <div className="h-10 w-10 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-brand-500">
                  <v.icon className="h-5 w-5" />
                </div>
                <h4 className="font-sans font-bold text-slate-800 text-sm sm:text-base leading-snug">{v.title}</h4>
                <p className="text-xs text-slate-500 font-light leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
