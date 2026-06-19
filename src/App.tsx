/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Loader from './components/Loader.tsx';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Benefits from './components/Benefits.tsx';
import About from './components/About.tsx';
import Philosophy from './components/Philosophy.tsx';
import Services from './components/Services.tsx';
import Stats from './components/Stats.tsx';
import Testimonials from './components/Testimonials.tsx';
import Differentiators from './components/Differentiators.tsx';
import FAQ from './components/FAQ.tsx';
import MapSection from './components/MapSection.tsx';
import ContactForm from './components/ContactForm.tsx';
import CtaFinal from './components/CtaFinal.tsx';
import Footer from './components/Footer.tsx';
import WhatsappButton from './components/WhatsappButton.tsx';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#fcfdfe] relative text-slate-800 antialiased font-sans flex flex-col justify-between selection:bg-brand-100 selection:text-brand-900">
      
      {/* Dynamic Welcome Preloader */}
      <AnimatePresence mode="wait">
        {loading && (
          <Loader onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col flex-grow"
        >
          {/* Header Navigation */}
          <Navbar />

          {/* Core Content Layout Sections */}
          <main className="w-full flex-grow">
            
            {/* 1. Welcoming Hero Segment */}
            <Hero />

            {/* 2. Structured Benefits Grid */}
            <Benefits />

            {/* 3. Authoritative Emotional Story (Sobre a Clínica) */}
            <About />

            {/* Philosophy: Mission, Vision, and Values */}
            <Philosophy />

            {/* 4. Filtered Interactive Services Catalog */}
            <Services />

            {/* 5. Animated Numbers Growth Indicators */}
            <Stats />

            {/* 6. Carousel Real Feedback Stories */}
            <Testimonials />

            {/* 7. Structured Core Differentiators */}
            <Differentiators />

            {/* 8. Interactive FAQs accordions */}
            <FAQ />

            {/* 9. Booking Quick Contact Form Wizard */}
            <ContactForm />

            {/* 10. Local Transit details & Geo Maps Iframe overlay */}
            <MapSection />

            {/* 11. Final High-Conversion Urgency CTA */}
            <CtaFinal />

          </main>

          {/* Localized SEO Footer and Structured Markup tags */}
          <Footer />

          {/* Floating native WhatsApp engagement shortcut */}
          <WhatsappButton />

        </motion.div>
      )}
    </div>
  );
}
