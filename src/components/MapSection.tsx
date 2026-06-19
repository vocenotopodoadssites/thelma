/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MapPin, Clock, ParkingSquare, Train, Phone, Map } from 'lucide-react';

export default function MapSection() {
  return (
    <section className="py-16 bg-slate-50 border-t border-slate-150 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Map details box */}
          <div className="lg:col-span-4 flex flex-col justify-between bg-white border border-slate-100 p-8 rounded-3xl shadow-lg">
            
            <div className="space-y-6 text-left">
              <div>
                <div className="inline-flex items-center space-x-1.5 text-brand-600 bg-brand-50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                  <Map className="h-3.5 w-3.5" />
                  <span>Localização Privilegiada</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 leading-tight">
                  Como Chegar ao Nosso Consultório
                </h3>
                <p className="text-slate-500 font-light text-xs sm:text-sm mt-2">
                  Localizada no nobre bairro da Aclimação, com total segurança, conveniência comercial e fácil acesso por vias rápidas ou linhas de transporte público.
                </p>
              </div>

              {/* Geographic specifications list */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                
                {/* Physical Address */}
                <div className="flex items-start space-x-3 text-slate-700">
                  <MapPin className="h-5 w-5 text-brand-500 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm leading-relaxed">
                    <strong className="block text-slate-900 font-bold">Endereço</strong>
                    Av. Aclimação, 450 - Sala 82 <br />
                    Aclimação, São Paulo - SP, CEP 01531-000
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start space-x-3 text-slate-700">
                  <Clock className="h-5 w-5 text-brand-500 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm leading-relaxed">
                    <strong className="block text-slate-900 font-bold">Horário de Funcionamento</strong>
                    Segunda a Sexta: 08h às 20h <br />
                    Sábados: Atendimento agendado sob consulta
                  </div>
                </div>

                {/* Transit tips */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100">
                  <div className="flex items-center space-x-2 text-[11px] font-semibold text-slate-600 bg-slate-50 p-2 rounded-lg">
                    <Train className="h-4 w-4 text-slate-500" />
                    <span>A 10 min a pé da Estação Ana Rosa (Metrô)</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[11px] font-semibold text-slate-600 bg-slate-50 p-2 rounded-lg">
                    <ParkingSquare className="h-4 w-4 text-slate-500" />
                    <span>Estacionamento conveniado de subsolo no local</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Contact Line */}
            <div className="pt-6 border-t border-slate-100 text-left">
              <a
                href="tel:+5511960403390" 
                className="flex items-center space-x-1.5 text-xs font-bold text-brand-600 hover:text-brand-700"
              >
                <Phone className="h-4 w-4" />
                <span>Telefone Direto: (11) 96040-3390</span>
              </a>
            </div>

          </div>

          {/* Interactive Responsive Iframe google Map */}
          <div className="lg:col-span-8 rounded-3xl overflow-hidden shadow-lg border border-slate-150 relative bg-slate-100 min-h-[350px] sm:min-h-[420px] lg:min-h-[auto]">
            {/* Elegant high quality Aclimação, SP google map embed coordinates */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14627.142512686776!2d-46.65096538059039!3d-23.576135893457193!2m3!1f0!2f0!3f0!3m2!1i1024|2i768|4f13.1|3m3!1m2!1s0x94ce5970c67ff619%3A0x6d9f58cb2cd40c00!2sAclima%C3%A7%C3%A3o%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1717804918512!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "350px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Fisioterapia Dra. Thelma Soares na Aclimação"
              className="absolute inset-0 w-full h-full"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
