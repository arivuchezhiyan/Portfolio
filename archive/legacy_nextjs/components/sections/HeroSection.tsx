'use client';

import React from 'react';
import { usePortfolio } from '@/context/PortfolioContext';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Gamepad2, Cpu, ShieldCheck, Sparkles } from 'lucide-react';
import { soundEngine } from '../audio/SoundController';

export const HeroSection: React.FC = () => {
  const { mode, setMode, setTerminalOpen, setCommandPaletteOpen } = usePortfolio();

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Institution Credentials Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-800/90 border border-white/10 text-xs font-mono text-gray-300 mb-8 backdrop-blur-md shadow-lg"
      >
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-white font-semibold">{PERSONAL_INFO.name}</span>
        <span className="text-gray-500">•</span>
        <span className="text-cyber-cyan">{PERSONAL_INFO.degree}</span>
        <span className="text-gray-500">•</span>
        <span>SSN College of Engineering</span>
      </motion.div>

      {/* Main Dual Identity Dynamic Title */}
      <motion.div
        key={mode}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto space-y-6"
      >
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tight text-white leading-none">
          {mode === 'software' ? (
            <>
              ARCHITECTING <br />
              <span className="bg-gradient-to-r from-cyber-cyan via-blue-400 to-cyber-emerald bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,243,255,0.4)]">
                HIGH-THROUGHPUT AI
              </span> <br />
              & DISTRIBUTED SYSTEMS
            </>
          ) : (
            <>
              CRAFTING <br />
              <span className="bg-gradient-to-r from-gamedev-crimson via-gamedev-amber to-gamedev-fire bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(255,0,85,0.4)]">
                AAA UNREAL ENGINE 5
              </span> <br />
              VIRTUAL WORLDS & SHADERS
            </>
          )}
        </h1>

        {/* Dynamic Subtitle */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 font-sans leading-relaxed">
          {mode === 'software' ? PERSONAL_INFO.bioSoftware : PERSONAL_INFO.bioGameDev}
        </p>
      </motion.div>

      {/* Call To Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap items-center justify-center gap-4 mt-10"
      >
        <a
          href="#showcase"
          onClick={() => soundEngine.playClick()}
          className={`px-8 py-4 rounded-2xl font-semibold text-sm md:text-base flex items-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-2xl ${
            mode === 'software'
              ? 'bg-cyber-cyan text-black hover:bg-cyber-cyan/90 shadow-[0_0_25px_rgba(0,243,255,0.5)]'
              : 'bg-gamedev-crimson text-white hover:bg-gamedev-crimson/90 shadow-[0_0_25px_rgba(255,0,85,0.5)]'
          }`}
        >
          <span>Explore Showcase</span>
          <ArrowRight className="w-5 h-5" />
        </a>

        <button
          onClick={() => {
            soundEngine.playClick();
            setTerminalOpen(true);
          }}
          className="px-6 py-4 rounded-2xl font-mono text-sm bg-dark-800/90 border border-white/15 text-gray-200 hover:text-white hover:border-cyber-cyan/50 flex items-center gap-3 transition-all duration-300 backdrop-blur-md"
        >
          <Terminal className="w-5 h-5 text-cyber-cyan" />
          <span>Launch CLI Terminal (`)</span>
        </button>

        <button
          onClick={() => {
            soundEngine.playClick();
            setCommandPaletteOpen(true);
          }}
          className="px-4 py-4 rounded-2xl font-mono text-xs bg-dark-800/90 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 flex items-center gap-2 transition-all backdrop-blur-md"
        >
          <kbd className="px-2 py-1 rounded bg-black/50 text-gray-300 font-bold">⌘K</kbd>
          <span className="hidden sm:inline">Palette</span>
        </button>
      </motion.div>

      {/* Live Performance & Credential Stats Ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-16 w-full"
      >
        <div className="p-4 rounded-2xl bg-dark-800/60 border border-white/10 backdrop-blur-md text-center space-y-1">
          <div className="text-xs font-mono text-gray-400">Academic Excellence</div>
          <div className="text-xl md:text-2xl font-bold font-mono text-cyber-cyan">{PERSONAL_INFO.stats.gpa}</div>
          <div className="text-[10px] text-gray-500">M.Tech CSE SSN</div>
        </div>

        <div className="p-4 rounded-2xl bg-dark-800/60 border border-white/10 backdrop-blur-md text-center space-y-1">
          <div className="text-xs font-mono text-gray-400">Code Contributions</div>
          <div className="text-xl md:text-2xl font-bold font-mono text-cyber-emerald">{PERSONAL_INFO.stats.commits}</div>
          <div className="text-[10px] text-gray-500">Git Systems Repos</div>
        </div>

        <div className="p-4 rounded-2xl bg-dark-800/60 border border-white/10 backdrop-blur-md text-center space-y-1">
          <div className="text-xs font-mono text-gray-400">Rendering Target</div>
          <div className="text-xl md:text-2xl font-bold font-mono text-gamedev-amber">{PERSONAL_INFO.stats.fpsTarget}</div>
          <div className="text-[10px] text-gray-500">Unreal Engine 5</div>
        </div>

        <div className="p-4 rounded-2xl bg-dark-800/60 border border-white/10 backdrop-blur-md text-center space-y-1">
          <div className="text-xs font-mono text-gray-400">Draw Call Efficiency</div>
          <div className="text-xl md:text-2xl font-bold font-mono text-gamedev-crimson">{PERSONAL_INFO.stats.shaderOptimization}</div>
          <div className="text-[10px] text-gray-500">Custom HLSL Shaders</div>
        </div>
      </motion.div>
    </section>
  );
};
