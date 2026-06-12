/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { therapistData } from '../data.ts';
import Logo from './Logo.tsx';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'A Profissional', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Resultados', href: '#resultados' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'FAQ', href: '#faq' }
  ];

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá, Dra. Thelma! Gostaria de agendar uma avaliação na clínica da Aclimação.');
    window.open(`https://wa.me/5511987654321?text=${message}`, '_blank');
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-sky-100/50 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a href="#inicio" className="flex items-center space-x-3 group">
              <Logo variant="monogram" monogramSize={48} className="transition-transform group-hover:scale-105" />
              <div>
                <span className="block text-lg font-serif font-semibold tracking-wide text-brand-900 group-hover:text-brand-500 transition-colors">
                  Dra. Thelma Soares
                </span>
                <span className="block text-[9px] uppercase tracking-[0.12em] text-[#71a369] font-bold">
                  Fisioterapia Clínica • Aclimação
                </span>
              </div>
            </a>

            {/* Desktop Links */}
            <div className="hidden lg:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-brand-500 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-500 after:transition-all hover:after:w-full"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA and Phone */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:+5511987654321"
                className="flex items-center space-x-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors px-3 py-1.5 rounded-full hover:bg-brand-50"
              >
                <Phone className="h-4 w-4" />
                <span>(11) 98765-4321</span>
              </a>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsApp}
                className="flex items-center space-x-2 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-medium text-sm px-5 py-2.5 rounded-full shadow-lg shadow-brand-500/25 hover:shadow-brand-500/45 transition-all cursor-pointer"
              >
                <Calendar className="h-4 w-4" />
                <span>Agendar Avaliação</span>
              </motion.button>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex lg:hidden items-center space-x-2">
              <a
                href="tel:+5511987654321"
                className="flex items-center justify-center h-10 w-10 text-brand-600 bg-brand-50 rounded-full"
                title="Ligar para a clínica"
              >
                <Phone className="h-5 w-5" />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="h-10 w-10 flex items-center justify-center text-brand-900 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-30 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-white shadow-2xl z-30 p-6 flex flex-col justify-between border-l border-sky-100 lg:hidden"
            >
              <div className="mt-16">
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-slate-800 hover:text-brand-500 hover:pl-2 transition-all"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-4 border-t border-slate-100 pt-6">
                <a
                  href="tel:+5511987654321"
                  className="flex items-center space-x-3 text-slate-700 font-semibold p-3 rounded-xl bg-slate-50 hover:bg-slate-100"
                >
                  <Phone className="h-5 w-5 text-brand-500" />
                  <span>Ligar: (11) 98765-4321</span>
                </a>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    handleWhatsApp();
                  }}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-medium py-3.5 rounded-xl shadow-lg shadow-brand-500/25 cursor-pointer"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Agendar Avaliação</span>
                </button>
                <div className="text-center text-xs text-slate-400">
                  {therapistData.crefito}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
