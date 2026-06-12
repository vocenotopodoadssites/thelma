/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CalendarRange, Send, Lock, CheckCircle, ShieldCheck, Heart } from 'lucide-react';
import { servicesList } from '../data.ts';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    shift: '',
    symptoms: '',
    acceptTerms: true
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.service) {
      alert('Por favor, preencha os campos obrigatórios (Nome, Telefone e Serviço).');
      return;
    }

    setLoading(true);

    // Simulate clinical dispatch delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Generate the custom pre-formatted whatsapp text summarizing the booking!
      const titleText = `Pré-Agendamento Clínico:\n`;
      const nameText = `• Nome: ${formData.name}\n`;
      const phoneText = `• Contato: ${formData.phone}\n`;
      const serviceText = `• Tratamento: ${formData.service}\n`;
      const shiftText = formData.shift ? `• Turno de Preferência: ${formData.shift}\n` : '';
      const symptomText = formData.symptoms ? `• Sintomas relatados: ${formData.symptoms}` : '';
      
      const textMessage = encodeURIComponent(`${titleText}${nameText}${phoneText}${serviceText}${shiftText}${symptomText}`);
      
      // Auto-open WhatsApp after brief delay
      setTimeout(() => {
        window.open(`https://wa.me/5511987654321?text=${textMessage}`, '_blank');
      }, 1000);

    }, 1200);
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Visual glowing bubbles */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-gold-50/60 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Column Left: Visual hooks and support statements */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 text-left">
            <div>
              <span className="text-xs uppercase tracking-widest text-brand-500 font-extrabold block mb-2">Diga Não à Dor</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
                Dê o Primeiro Passo Para Sua Reabilitação
              </h2>
              <div className="h-1 w-16 bg-brand-500 mt-4 rounded-full" />
            </div>

            <p className="text-slate-600 font-sans text-base sm:text-lg font-light leading-relaxed">
              Preencha o formulário para enviar um pré-agendamento rápido. Suas informações serão analisadas cuidadosamente para agilizarmos seu atendimento via WhatsApp.
            </p>

            {/* Direct quick schedule list item panels */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3.5">
                <div className="h-9 w-9 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Heart className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Cuidado Integral e Individualizado</h4>
                  <p className="text-xs text-slate-500">Cada consulta é planejada para otimizar suas necessidades anatômicas.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="h-9 w-9 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CalendarRange className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Retorno de Triagem Agilizado</h4>
                  <p className="text-xs text-slate-500">Entramos em contato no mesmo dia para confirmar sua data ideal.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="h-9 w-9 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Conformidade e Sigilo Total</h4>
                  <p className="text-xs text-slate-500">Seus dados clínicos e sintomas sob total sigilo profissional ético.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center space-x-2 text-slate-400 text-xs">
              <Lock className="h-3.5 w-3.5 shrink-0 text-slate-400" />
              <span>Ambiente criptografado e seguro 256-bit</span>
            </div>
          </div>

          {/* Column Right: Elegant Clinical Appointment Form Card */}
          <div className="lg:col-span-7">
            
            <div className="bg-slate-50 border border-slate-100 p-6 sm:p-10 rounded-3xl shadow-xl shadow-slate-100/50">
              
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 text-left"
                  >
                    <div className="text-center sm:text-left border-b border-slate-200/50 pb-4">
                      <h3 className="text-lg font-bold font-sans text-slate-800">Formulário de Pré-Agendamento</h3>
                      <p className="text-xs text-slate-400 font-light">Os dados marcados com * são indispensáveis para entrarmos em contato.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div className="space-y-1.5 col-span-2 sm:col-span-1">
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest pl-1">Seu Nome *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Ex: João da Silva"
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-500 transition-colors"
                        />
                      </div>

                      {/* Phone WhatsApp */}
                      <div className="space-y-1.5 col-span-2 sm:col-span-1">
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest pl-1">WhatsApp / Telefone *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Ex: (11) 99999-9999"
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Email Address */}
                      <div className="space-y-1.5 col-span-2 sm:col-span-1">
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest pl-1">E-mail (opcional)</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Ex: joao@email.com"
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-500 transition-colors"
                        />
                      </div>

                      {/* Specialty / Service Interest */}
                      <div className="space-y-1.5 col-span-2 sm:col-span-1">
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest pl-1">Tratamento de Interesse *</label>
                        <select
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-500 transition-colors"
                        >
                          <option value="">Selecione o tratamento</option>
                          {servicesList.map(item => (
                            <option key={item.id} value={item.title}>{item.title}</option>
                          ))}
                          <option value="Outro assunto">Outras Dores / Outros Assuntos</option>
                        </select>
                      </div>
                    </div>

                    {/* Pre-arranged Shift Period Preference */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest pl-1">Turno de Preferência</label>
                      <div className="grid grid-cols-3 gap-3">
                        {['Manhã (08:00 - 12:00)', 'Tarde (13:00 - 18:00)', 'Noite (18:00 - 20:00)'].map((p) => (
                          <label
                            key={p}
                            className={`flex flex-col items-center justify-center p-3 border rounded-xl text-center cursor-pointer transition-all ${
                              formData.shift === p
                                ? 'bg-brand-500/10 border-brand-500 text-brand-700 font-semibold'
                                : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300'
                            }`}
                          >
                            <input
                              type="radio"
                              name="shift"
                              value={p}
                              checked={formData.shift === p}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            <span className="text-[11px] leading-tight">{p}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Symptoms Text area */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest pl-1">Relatar Sintomas / Informações (opcional)</label>
                      <textarea
                        name="symptoms"
                        value={formData.symptoms}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Descreva brevemente suas queixas clínicas ou dores para realizarmos um planejamento..."
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-500 transition-colors resize-none"
                      />
                    </div>

                    {/* Consent checkbox statement */}
                    <div className="flex items-start space-x-2.5 pt-1">
                      <input
                        type="checkbox"
                        name="acceptTerms"
                        id="acceptTerms"
                        checked={formData.acceptTerms}
                        onChange={handleChange}
                        className="h-4.5 w-4.5 accent-brand-500 mt-0.5 rounded cursor-pointer"
                      />
                      <label htmlFor="acceptTerms" className="text-[11px] text-slate-400 select-none">
                        Autorizo a utilização de meus contatos informados para agendamento presencial no consultório Dra. Thelma, seguindo as diretrizes de ética profissional do COFFITO.
                      </label>
                    </div>

                    {/* Submit action */}
                    <button
                      type="submit"
                      disabled={loading || !formData.acceptTerms}
                      className={`w-full py-4 text-white font-semibold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer ${
                        loading || !formData.acceptTerms
                          ? 'bg-slate-300 shadow-none cursor-not-allowed'
                          : 'bg-gradient-to-r from-brand-500 to-brand-600 hover:shadow-brand-500/35 hover:-translate-y-0.5'
                      }`}
                    >
                      {loading ? (
                        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="h-4.5 w-4.5 text-sky-100" />
                          <span>Prosseguir com WhatsApp</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-6"
                  >
                    <div className="h-16 w-16 bg-emerald-50 text-emerald-500 border border-emerald-200 rounded-full flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle className="h-8 w-8" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900 font-serif">Agradecemos Seu Contato!</h3>
                      <p className="text-sm text-slate-500 mt-2 font-light">
                        Seu pré-agendamento foi processado com absoluto sucesso.
                      </p>
                    </div>

                    <div className="p-4 bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs rounded-2xl max-w-sm mx-auto leading-relaxed">
                      Estamos abrindo seu WhatsApp com a mensagem pré-configurada para que você envie e conclua o contato de forma rápida. Caso não tenha aberto, clique no botão vermelho abaixo.
                    </div>

                    <button
                      onClick={() => {
                        const titleText = `Pré-Agendamento Clínico:\n`;
                        const nameText = `• Nome: ${formData.name}\n`;
                        const phoneText = `• Contato: ${formData.phone}\n`;
                        const serviceText = `• Tratamento: ${formData.service}\n`;
                        const shiftText = formData.shift ? `• Turno de Preferência: ${formData.shift}\n` : '';
                        const symptomText = formData.symptoms ? `• Sintomas relatados: ${formData.symptoms}` : '';
                        
                        const textMessage = encodeURIComponent(`${titleText}${nameText}${phoneText}${serviceText}${shiftText}${symptomText}`);
                        window.open(`https://wa.me/5511987654321?text=${textMessage}`, '_blank');
                      }}
                      className="inline-flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-xl text-xs sm:text-sm shadow-md transition-colors cursor-pointer"
                    >
                      <Send className="h-4 w-4" />
                      <span>Abrir WhatsApp Manualmente</span>
                    </button>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="block text-xs text-brand-500 underline mx-auto hover:text-brand-650 mt-4 cursor-pointer"
                    >
                      Preencher Nova Consulta
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
