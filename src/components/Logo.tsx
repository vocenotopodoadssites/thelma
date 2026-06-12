/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'monogram' | 'full';
  monogramSize?: number;
}

export default function Logo({ className = '', variant = 'full', monogramSize = 50 }: LogoProps) {
  // SVG Monogram (T & S with Spine)
  // Lavender/Lilac color from the logo image: #b59ed2
  // Organic Spine therapy green color from the logo image: #8ebf87
  const LogoMonogramSVG = () => (
    <svg
      width={monogramSize}
      height={monogramSize}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block"
    >
      {/* "T" & "S" monogram - Lavender/Lilac Accent */}
      {/* Vertical Stem of "T" */}
      <path
        d="M60 30 V88"
        stroke="#ab93d3"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.8"
      />
      {/* Top bar of "T" with elegant serifs */}
      <path
        d="M28 33 H92"
        stroke="#ab93d3"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {/* Left serif of "T" */}
      <path
        d="M28 29 V37"
        stroke="#ab93d3"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* Right serif of "T" */}
      <path
        d="M92 29 V37"
        stroke="#ab93d3"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Styled S winding through the T */}
      <path
        d="M86 48 C83 38, 48 38, 43 54 C37 72, 85 75, 78 92 C73 104, 40 102, 36 94"
        stroke="#ab93d3"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Spine Illustration (vertebrae structure in green winding inside) */}
      <g stroke="#97ca90" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Vertebral column curve aligning with the S line */}
        <path d="M50 42 C51 46, 54 50, 56 55 C58 59, 58 64, 56 68 C54 72, 49 76, 45 80 C41 84, 40 88, 42 92" fill="none" opacity="0.9" strokeWidth="2" strokeDasharray="1 3" />
        
        {/* Discrete vertebra segments / ribs */}
        {/* Top vertebrae */}
        <path d="M47 43 C50 42, 53 43, 56 44" />
        <path d="M49 48 C52 47, 55 48, 58 49" />
        {/* Mid vertebrae */}
        <path d="M51 54 C54 53, 58 54, 61 56" />
        <path d="M52 60 C55 60, 59 61, 62 63" />
        {/* Lower mid vertebrae */}
        <path d="M50 67 C53 68, 56 70, 59 72" />
        <path d="M46 73 C49 75, 52 77, 54 80" />
        {/* Low vertebrae */}
        <path d="M42 79 C45 82, 47 85, 48 88" />
        <path d="M39 85 C42 88, 44 91, 45 94" />
      </g>
    </svg>
  );

  if (variant === 'monogram') {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <LogoMonogramSVG />
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Large visual Monogram */}
      <LogoMonogramSVG />

      {/* Primary Brand Text in elegant lavender */}
      <h1 className="mt-2 text-2xl md:text-3xl font-serif text-[#ab93d3] tracking-wide font-medium text-center">
        Dra. Thelma Soares
      </h1>

      {/* Subtitle / Tagline from the Logo image in soft sage-olive therapy green */}
      <p className="mt-1.5 max-w-sm text-[8px] md:text-[9px] uppercase tracking-[0.16em] leading-relaxed text-[#8ebf87] font-semibold text-center font-sans">
        Venha sentir em seu corpo e em sua vida os benefícios da fisioterapia
      </p>
    </div>
  );
}
