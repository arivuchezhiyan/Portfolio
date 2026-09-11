'use client';

import React from 'react';
import { usePortfolio } from '@/context/PortfolioContext';
import { X, Cpu, Database, Network, ShieldCheck } from 'lucide-react';
import { soundEngine } from '../audio/SoundController';

export const ArchitectureModal: React.FC = () => {
  const { activeArchitectureProject, setActiveArchitectureProject } = usePortfolio();

  if (!activeArchitectureProject) return null;

  const { title, subtitle, architecture, tags } = activeArchitectureProject;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-3xl bg-dark-900 border border-cyber-cyan/40 rounded-2xl shadow-[0_0_40px_rgba(0,243,255,0.25)] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-dark-800 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{title} — Architecture Spec</h3>
              <p className="text-xs text-cyber-cyan font-mono">{subtitle}</p>
            </div>
          </div>
          <button
            onClick={() => {
              soundEngine.playClick();
              setActiveArchitectureProject(null);
            }}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-dark-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2">
            {tags.map((t, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded-md text-xs font-mono bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/30">
                {t}
              </span>
            ))}
          </div>

          {/* Component Breakdown */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-white font-mono uppercase tracking-wider">
              <Network className="w-4 h-4 text-cyber-cyan" />
              <span>Modular Components</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {architecture.components.map((comp, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-dark-800 border border-white/5 text-xs font-mono text-gray-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyber-cyan" />
                  {comp}
                </div>
              ))}
            </div>
          </div>

          {/* Data Flow Diagram */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-white font-mono uppercase tracking-wider">
              <Cpu className="w-4 h-4 text-cyber-emerald" />
              <span>Data Flow Pipeline</span>
            </div>
            <div className="p-4 rounded-xl bg-dark-800/80 border border-cyber-emerald/30 font-mono text-xs text-cyber-emerald leading-relaxed">
              {architecture.dataFlow}
            </div>
          </div>

          {/* Database Schema (If present) */}
          {architecture.databaseSchema && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-white font-mono uppercase tracking-wider">
                <Database className="w-4 h-4 text-purple-400" />
                <span>Database & Persistence Architecture</span>
              </div>
              <div className="p-4 rounded-xl bg-dark-800/80 border border-purple-500/30 font-mono text-xs text-purple-300">
                {architecture.databaseSchema}
              </div>
            </div>
          )}

          {/* Performance Optimization Highlights */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-white font-mono uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Systems Optimization & Benchmarks</span>
            </div>
            <div className="p-4 rounded-xl bg-dark-800/80 border border-amber-500/30 font-mono text-xs text-amber-200">
              {architecture.optimization}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-dark-800 border-t border-white/10 flex justify-end">
          <button
            onClick={() => setActiveArchitectureProject(null)}
            className="px-4 py-2 rounded-xl bg-cyber-cyan text-black font-semibold text-xs hover:bg-cyber-cyan/90 transition-colors"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
