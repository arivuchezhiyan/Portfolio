'use client';

import React from 'react';
import { usePortfolio } from '@/context/PortfolioContext';
import { HeroSection } from '@/components/sections/HeroSection';
import { IdentitySection } from '@/components/sections/IdentitySection';
import { SoftwareSection } from '@/components/sections/SoftwareSection';
import { GameDevSection } from '@/components/sections/GameDevSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { TimelineSection } from '@/components/sections/TimelineSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { motion, AnimatePresence } from 'framer-motion';

export default function HomePage() {
  const { mode } = usePortfolio();

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 01. Hero Cinematic Section */}
      <HeroSection />

      {/* 02. Dual Identity Architecture Split */}
      <IdentitySection />

      {/* 03. Dual Showcase Section (Switches between Software and Game Dev) */}
      <section id="showcase" className="py-12 px-4 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {mode === 'software' ? <SoftwareSection /> : <GameDevSection />}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* 04. Visual Skills Radar & Proficiency Matrix */}
      <SkillsSection />

      {/* 05. Academic Timeline & SSN M.Tech Milestones */}
      <TimelineSection />

      {/* 06. Contact Section & Direct Communication */}
      <ContactSection />
    </div>
  );
}
