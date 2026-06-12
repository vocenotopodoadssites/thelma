/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Logo from './Logo.tsx';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF8F5]">
      <div className="relative flex flex-col items-center max-w-md px-6 text-center">
        
        {/* Animated wellness ripple circle enclosing the logo */}
        <div className="relative mb-6 flex items-center justify-center">
          <motion.div
            className="absolute h-36 w-36 rounded-full border border-[#b59ed2]/20 bg-[#b59ed2]/5"
            animate={{ scale: [0.95, 1.15, 0.95], opacity: [0.4, 0.8, 0.4] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
          <Logo variant="full" monogramSize={70} className="relative z-10 scale-95 md:scale-100" />
        </div>

        {/* Loading Bar with brand Lavender */}
        <div className="w-48 sm:w-56 h-1.5 bg-brand-100 rounded-full mt-6 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-brand-400 to-brand-600 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>

        <span className="text-[10px] font-mono text-[#71a369] font-bold tracking-widest mt-2 uppercase">
          Carregando clínica... {Math.min(progress, 100)}%
        </span>
      </div>
    </div>
  );
}
