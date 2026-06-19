/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsappButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá, Dra. Thelma! Gostaria de tirar dúvidas / agendar uma avaliação física via WhatsApp.');
    window.open(`https://wa.me/5511960403390?text=${message}`, '_blank');
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-40 flex items-center group cursor-pointer"
          onClick={handleWhatsApp}
        >
          {/* Tooltip Box */}
          <div className="mr-3 bg-slate-900 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-slate-800">
            Falar no WhatsApp
          </div>

          {/* Floating Ripple Rings */}
          <div className="relative">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-ping opacity-35 z-0" />
            <div className="relative h-14 w-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-transform duration-300 z-10 border border-emerald-400/20">
              {/* Custom SVG of WhatsApp that looks extremely native */}
              <svg 
                className="h-7 w-7 fill-white" 
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.752.002-2.607-1.01-5.059-2.85-6.902C16.643 2.109 14.195.9 11.587.9c-5.442 0-9.866 4.372-9.87 9.754 0 1.737.472 3.435 1.369 4.947L2.096 21.3l5.962-1.559c-.588-.32-1.31-.692-1.411-.587zM17.65 14.49c-.33-.165-1.95-.963-2.253-1.073-.303-.11-.523-.165-.743.165-.22.33-.853 1.073-1.045 1.293-.193.22-.385.247-.715.082-.33-.165-1.393-.513-2.653-1.637-.98-.874-1.64-1.953-1.832-2.282-.193-.33-.02-.508.145-.671.148-.147.33-.385.495-.578.165-.192.22-.33.33-.55.11-.22.055-.412-.028-.577-.082-.165-.743-1.79-.102-2.143.11-.22.33-.275.55-.275.22 0 .44 0 .66.055.22 0 .495-.083.743.165.248.248.963 2.34 1.046 2.506.083.165.138.357.028.577-.11.22-.165.33-.33.522-.165.192-.344.4-.495.536-.165.165-.344.344-.138.687.206.344.918 1.513 1.966 2.445 1.352 1.205 2.486 1.58 2.844 1.76.358.18 1.157.082 1.32-.11.165-.193.715-.826.88-1.1.165-.275.33-.22.55-.138.22.083 1.376.65 1.623.77.247.12.412.18.467.275.05.09.05.523-.115.99-.16.467-1.1 1.01-1.376 1.046-.22.03-.44.055-.66 0z"/>
              </svg>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
