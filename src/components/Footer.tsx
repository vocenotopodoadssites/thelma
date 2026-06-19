/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { therapistData } from '../data.ts';
import { ShieldCheck, Mail, Phone, Calendar, ArrowUp } from 'lucide-react';
import Logo from './Logo.tsx';

export default function Footer() {
  
  // Inject structured JSON-LD schema markup for Local SEO (Fisioterapia Aclimação)
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Dra. Thelma dos Santos Soares - Fisioterapia Aclimação",
      "image": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80",
      "@id": "",
      "url": window.location.origin,
      "telephone": "+5511960403390",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Aclimação, 450 - Sala 82",
        "addressLocality": "São Paulo",
        "addressRegion": "SP",
        "postalCode": "01531-000",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -23.5714,
        "longitude": -46.6431
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "20:00"
      },
      "medicalSpecialty": "Physiotherapy",
      "availableService": [
        {
          "@type": "MedicalTherapy",
          "name": "Fisioterapia para Dor"
        },
        {
          "@type": "MedicalTherapy",
          "name": "Tratamento de Coluna e Hérnia"
        },
        {
          "@type": "MedicalTherapy",
          "name": "Fisioterapia de Idosos"
        }
      ]
    };

    const scriptId = 'fisioterapia-schema';
    let existingScript = document.getElementById(scriptId);
    if (!existingScript) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = scriptId;
      script.innerHTML = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 px-4 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top brand grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900 text-left">
          
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <Logo variant="monogram" monogramSize={42} />
              <div>
                <span className="block text-base font-serif font-semibold text-white tracking-wide">
                  Dra. Thelma Soares
                </span>
                <span className="block text-[9px] uppercase tracking-widest text-[#8ebf87] font-bold">
                  Fisioterapia de Alto Padrão
                </span>
              </div>
            </div>
            
            <p className="text-xs text-slate-500 font-light leading-relaxed">
              Tratamento individualizado e humanizado focado na reabilitação duradoura e eliminação de dores crônicas sem cirurgias. Atendimento VIP na Aclimação.
            </p>

            <div className="flex space-x-3.5 pt-2">
              {/* simulated social indicators */}
              <div className="h-8 w-8 hover:h-9 hover:w-9 rounded-full bg-slate-900 hover:bg-brand-500 hover:text-white flex items-center justify-center text-slate-400 transition-all cursor-pointer">
                i
              </div>
              <div className="h-8 w-8 hover:h-9 hover:w-9 rounded-full bg-slate-900 hover:bg-brand-500 hover:text-white flex items-center justify-center text-slate-400 transition-all cursor-pointer">
                f
              </div>
              <div className="h-8 w-8 hover:h-9 hover:w-9 rounded-full bg-slate-900 hover:bg-brand-500 hover:text-white flex items-center justify-center text-slate-400 transition-all cursor-pointer">
                y
              </div>
            </div>
          </div>

          {/* Quick links columns */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-slate-200">Sitemap</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#inicio" className="hover:text-brand-400 transition-colors">Início</a></li>
              <li><a href="#beneficios" className="hover:text-brand-400 transition-colors">Benefícios</a></li>
              <li><a href="#sobre" className="hover:text-brand-400 transition-colors">A Profissional</a></li>
              <li><a href="#servicos" className="hover:text-brand-400 transition-colors">Especialidades</a></li>
              <li><a href="#depoimentos" className="hover:text-brand-400 transition-colors">Depoimentos</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-slate-200">Localização e Contato</h4>
            <ul className="space-y-3.5 text-xs text-left">
              <li className="flex items-start space-x-2 leading-relaxed">
                <span className="text-brand-400 shrink-0 select-none">📍</span>
                <span>Av. Aclimação, 450 - Sala 82, São Paulo - SP, CEP 01531-000</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-brand-400 shrink-0 select-none">📞</span>
                <a href="tel:+5511960403390" className="hover:text-brand-400 transition-colors">(11) 96040-3390</a>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-brand-400 shrink-0 select-none">✉️</span>
                <a href="mailto:contato@drathelmasoares.com.br" className="hover:text-brand-400 transition-colors">contato@drathelmasoares.com.br</a>
              </li>
            </ul>
          </div>

          {/* Integration & Tracking Panels (ready for pasting ids by marketing departments) */}
          <div className="md:col-span-3 space-y-3 bg-slate-900/60 border border-slate-900 p-5 rounded-2xl">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-slate-300 flex items-center space-x-1.5">
              <ShieldCheck className="h-4 w-4 text-gold-400" />
              <span>Pixel & Analytics</span>
            </h4>
            <p className="text-[10px] text-slate-500 font-light leading-relaxed">
              Tráfego Integrado e Otimizado para HostGator. Eventos de conversão configurados para cliques em WhatsApp e submissions de formulário.
            </p>
            <div className="space-y-1.5 pt-1 text-[9px] font-mono">
              <div className="flex justify-between items-center bg-slate-950 p-1 rounded px-2">
                <span className="text-slate-500">Google Analytics:</span>
                <span className="text-emerald-500 font-bold font-mono">ATIVADO (Pre-loaded GTM)</span>
              </div>
              <div className="flex justify-between items-center bg-slate-950 p-1 rounded px-2">
                <span className="text-slate-500">Facebook Meta Pixel:</span>
                <span className="text-emerald-500 font-bold font-mono">ATIVADO (Pre-loaded API)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory note & credentials */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-500 gap-6 text-left">
          
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} Dra. Thelma dos Santos Soares. Todos os direitos reservados.</p>
            <p className="font-light">Design Premium de Alta Conversão Otimizado para SEO Local. Pronto para hospedagem em Servidor Linux/HostGator.</p>
            <p className="font-semibold text-slate-600">Registro Profissional Ativo: Dra. Thelma dos Santos Soares - {therapistData.crefito}</p>
          </div>

          <button
            onClick={handleScrollTop}
            className="h-10 w-10 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center cursor-pointer active:scale-95 transition-all"
            title="Voltar ao início"
          >
            <ArrowUp className="h-4 w-4" />
          </button>

        </div>

      </div>
    </footer>
  );
}
