'use client';

import React from 'react';
import { usePortfolio } from '@/context/PortfolioContext';
import { Cpu, Gamepad2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const ModeToggle: React.FC = () => {
  const { mode, setMode } = usePortfolio();

  return (
    <div className="relative inline-flex items-center bg-dark-800/80 p-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-2xl">
      <button
        onClick={() => setMode('software')}
        className={`relative z-10 flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-semibold rounded-full transition-colors duration-300 ${
          mode === 'software' ? 'text-black' : 'text-gray-400 hover:text-white'
        }`}
      >
        <Cpu className="w-4 h-4" />
        <span>Software Engineer</span>
      </button>

      <button
        onClick={() => setMode('gamedev')}
        className={`relative z-10 flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-semibold rounded-full transition-colors duration-300 ${
          mode === 'gamedev' ? 'text-white' : 'text-gray-400 hover:text-white'
        }`}
      >
        <Gamepad2 className="w-4 h-4" />
        <span>AAA Game Dev</span>
      </button>

      {/* Dynamic Animated Pill Indicator */}
      <motion.div
        className={`absolute top-1.5 bottom-1.5 rounded-full shadow-lg ${
          mode === 'software'
            ? 'bg-gradient-to-r from-cyber-cyan to-cyber-emerald shadow-[0_0_15px_rgba(0,243,255,0.6)]'
            : 'bg-gradient-to-r from-gamedev-crimson to-gamedev-amber shadow-[0_0_15px_rgba(255,0,85,0.6)]'
        }`}
        initial={false}
        animate={{
          left: mode === 'software' ? '6px' : '50%',
          width: 'calc(50% - 9px)',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      />
    </div>
  );
};
