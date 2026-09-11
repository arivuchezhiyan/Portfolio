'use client';

import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { usePortfolio } from '@/context/PortfolioContext';
import { Cpu, Gamepad2, Layers, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { soundEngine } from '../audio/SoundController';

export const SkillsSection: React.FC = () => {
  const { mode } = usePortfolio();
  const [selectedCat, setSelectedCat] = useState<string>('all');

  const filteredCategories = selectedCat === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.title === selectedCat);

  return (
    <section id="skills" className="py-24 px-4 max-w-7xl mx-auto space-y-12">
      <div className="text-center space-y-3">
        <h2 className="text-xs font-mono tracking-widest text-cyber-cyan uppercase">
          [ TECHNICAL CAPABILITIES ]
        </h2>
        <h3 className="text-3xl md:text-5xl font-black font-display text-white">
          SKILLS RADAR & MATRIX
        </h3>
        <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto font-sans">
          Proficiency evaluation spanning high-concurrency systems, C++20, Unreal Engine 5, multi-agent AI, and graphics shaders.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={() => {
            soundEngine.playClick();
            setSelectedCat('all');
          }}
          className={`px-4 py-2 rounded-xl text-xs font-mono transition-all border ${
            selectedCat === 'all'
              ? mode === 'software'
                ? 'bg-cyber-cyan text-black border-cyber-cyan font-bold shadow-[0_0_15px_rgba(0,243,255,0.4)]'
                : 'bg-gamedev-crimson text-white border-gamedev-crimson font-bold shadow-[0_0_15px_rgba(255,0,85,0.4)]'
              : 'bg-dark-800 border-white/10 text-gray-400 hover:text-white'
          }`}
        >
          All Domains
        </button>
        {SKILL_CATEGORIES.map((cat) => (
          <button
            key={cat.title}
            onClick={() => {
              soundEngine.playClick();
              setSelectedCat(cat.title);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all border ${
              selectedCat === cat.title
                ? 'bg-white text-black border-white font-bold'
                : 'bg-dark-800 border-white/10 text-gray-400 hover:text-white'
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredCategories.map((category) => (
          <div
            key={category.title}
            className="p-6 rounded-3xl bg-dark-800/80 border border-white/10 space-y-6 backdrop-blur-md"
          >
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <div className={`p-2.5 rounded-xl border ${
                mode === 'software' ? 'bg-cyber-cyan/10 border-cyber-cyan/30 text-cyber-cyan' : 'bg-gamedev-crimson/10 border-gamedev-crimson/30 text-gamedev-crimson'
              }`}>
                {category.title.includes('Game') ? <Gamepad2 className="w-5 h-5" /> : category.title.includes('Software') ? <Cpu className="w-5 h-5" /> : <Layers className="w-5 h-5" />}
              </div>
              <h4 className="font-bold text-base text-white font-display">
                {category.title}
              </h4>
            </div>

            {/* Individual Skills List */}
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-gray-200 flex items-center gap-1.5">
                      <CheckCircle2 className={`w-3.5 h-3.5 ${
                        skill.category === 'gamedev' ? 'text-gamedev-crimson' : 'text-cyber-cyan'
                      }`} />
                      {skill.name}
                    </span>
                    <span className="text-gray-400 font-bold">{skill.level}%</span>
                  </div>

                  {/* Animated Progress Bar */}
                  <div className="h-2 w-full bg-dark-900 rounded-full overflow-hidden p-0.5 border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className={`h-full rounded-full ${
                        skill.category === 'gamedev'
                          ? 'bg-gradient-to-r from-gamedev-crimson to-gamedev-amber'
                          : 'bg-gradient-to-r from-cyber-cyan to-cyber-emerald'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
