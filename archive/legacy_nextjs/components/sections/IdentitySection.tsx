'use client';

import React from 'react';
import { usePortfolio } from '@/context/PortfolioContext';
import { Cpu, Gamepad2, Layers, ShieldCheck, Zap, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { soundEngine } from '../audio/SoundController';

export const IdentitySection: React.FC = () => {
  const { mode, setMode } = usePortfolio();

  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-xs font-mono tracking-widest text-cyber-cyan uppercase">
          [ DUAL ENGINEERING PERSPECTIVE ]
        </h2>
        <h3 className="text-3xl md:text-5xl font-black font-display text-white">
          TWO DISCIPLINES. ONE UNIFIED ARCHITECTURE.
        </h3>
        <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-400 font-sans">
          Building resilient backends and distributed AI models shares the same core foundation as real-time 60 FPS graphics optimization: hardware precision, lock-free memory, and clean software patterns.
        </p>
      </div>

      {/* Dual Cards Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Software Identity Card */}
        <motion.div
          whileHover={{ y: -5 }}
          onClick={() => {
            soundEngine.playClick();
            setMode('software');
          }}
          className={`p-8 rounded-3xl border transition-all duration-500 cursor-pointer relative overflow-hidden group ${
            mode === 'software'
              ? 'bg-dark-800/90 border-cyber-cyan shadow-[0_0_30px_rgba(0,243,255,0.2)]'
              : 'bg-dark-800/40 border-white/10 opacity-70 hover:opacity-100 hover:border-cyber-cyan/50'
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="p-3 rounded-2xl bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan">
              <Cpu className="w-8 h-8" />
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/30">
              Identity 01
            </span>
          </div>

          <h4 className="text-2xl font-bold font-display text-white mb-3 group-hover:text-cyber-cyan transition-colors">
            Software Systems & AI Architect
          </h4>
          <p className="text-sm text-gray-300 leading-relaxed mb-6 font-sans">
            Specializing in high-throughput distributed state machines, autonomous multi-agent context loops, microservice topologies, and high-performance Web platforms built with Next.js 15, Rust, and TypeScript.
          </p>

          <div className="space-y-3 font-mono text-xs">
            <div className="flex items-center gap-2 text-gray-300">
              <Zap className="w-4 h-4 text-cyber-cyan" />
              <span>Multi-Agent AI Orchestration & Local LLMs</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <ShieldCheck className="w-4 h-4 text-cyber-emerald" />
              <span>C++ / Rust Raft Consensus & In-Memory KV Stores</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Layers className="w-4 h-4 text-blue-400" />
              <span>Enterprise Next.js 15, GraphQL & Docker Mesh</span>
            </div>
          </div>
        </motion.div>

        {/* AAA Game Dev Identity Card */}
        <motion.div
          whileHover={{ y: -5 }}
          onClick={() => {
            soundEngine.playClick();
            setMode('gamedev');
          }}
          className={`p-8 rounded-3xl border transition-all duration-500 cursor-pointer relative overflow-hidden group ${
            mode === 'gamedev'
              ? 'bg-dark-800/90 border-gamedev-crimson shadow-[0_0_30px_rgba(255,0,85,0.2)]'
              : 'bg-dark-800/40 border-white/10 opacity-70 hover:opacity-100 hover:border-gamedev-crimson/50'
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="p-3 rounded-2xl bg-gamedev-crimson/10 border border-gamedev-crimson/30 text-gamedev-crimson">
              <Gamepad2 className="w-8 h-8" />
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-gamedev-crimson/10 text-gamedev-crimson border border-gamedev-crimson/30">
              Identity 02
            </span>
          </div>

          <h4 className="text-2xl font-bold font-display text-white mb-3 group-hover:text-gamedev-crimson transition-colors">
            AAA Game Developer & Technical Artist
          </h4>
          <p className="text-sm text-gray-300 leading-relaxed mb-6 font-sans">
            Engineered AAA open-world frameworks, C++ Gameplay Ability System (GAS) combat pipelines, HLSL procedural terrain shaders, OpenXR VR interaction loops, and real-time Lumen/Nanite rendering in Unreal Engine 5.4.
          </p>

          <div className="space-y-3 font-mono text-xs">
            <div className="flex items-center gap-2 text-gray-300">
              <Gamepad2 className="w-4 h-4 text-gamedev-crimson" />
              <span>Unreal Engine 5.4 C++ Gameplay Ability System (GAS)</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Layers className="w-4 h-4 text-gamedev-amber" />
              <span>Procedural HLSL Shaders & Niagara Particle Systems</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Terminal className="w-4 h-4 text-gamedev-fire" />
              <span>VR OpenXR Spatial Interaction & Inverse Kinematics</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
