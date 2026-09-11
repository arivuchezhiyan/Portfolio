'use client';

import React from 'react';
import { SOFTWARE_PROJECTS } from '@/data/portfolioData';
import { usePortfolio } from '@/context/PortfolioContext';
import { Github, ExternalLink, Cpu, CheckCircle2, Network } from 'lucide-react';
import { motion } from 'framer-motion';
import { soundEngine } from '../audio/SoundController';

export const SoftwareSection: React.FC = () => {
  const { setActiveArchitectureProject } = usePortfolio();

  return (
    <div className="space-y-12">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-cyber-cyan uppercase tracking-widest">
          <Cpu className="w-4 h-4" />
          <span>[ SYSTEMS, AI & CLOUD PROJECTS ]</span>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold font-display text-white">
          SOFTWARE ENGINEERING ARCHITECTURE
        </h3>
        <p className="text-sm md:text-base text-gray-400 max-w-2xl font-sans">
          Production-grade distributed backends, lock-free C++ data structures, and autonomous multi-agent AI frameworks.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {SOFTWARE_PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -6 }}
            className="bg-dark-800/80 border border-white/10 hover:border-cyber-cyan/40 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl group"
          >
            {/* Project Image Banner */}
            <div className="relative h-56 w-full overflow-hidden bg-dark-900">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-black/70 backdrop-blur-md text-cyber-cyan border border-cyber-cyan/30">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <h4 className="text-2xl font-bold font-display text-white group-hover:text-cyber-cyan transition-colors">
                  {project.title}
                </h4>
                <p className="text-xs font-mono text-cyber-cyan font-semibold">
                  {project.subtitle}
                </p>
                <p className="text-sm text-gray-300 leading-relaxed font-sans">
                  {project.description}
                </p>

                {/* Highlights list */}
                <div className="space-y-1.5 pt-2">
                  {project.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-mono text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyber-emerald shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/10 bg-dark-900/50 rounded-xl px-3 text-center">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <div className="text-[10px] font-mono text-gray-400">{m.label}</div>
                    <div className="text-xs font-bold font-mono text-cyber-cyan">{m.value}</div>
                  </div>
                ))}
              </div>

              {/* Tech Badges & Actions */}
              <div className="space-y-4 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-gray-300 border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-3 pt-2">
                  <button
                    onClick={() => {
                      soundEngine.playClick();
                      setActiveArchitectureProject(project);
                    }}
                    className="px-4 py-2 rounded-xl text-xs font-mono bg-cyber-cyan/10 border border-cyber-cyan/40 text-cyber-cyan hover:bg-cyber-cyan/20 transition-all flex items-center gap-2"
                  >
                    <Network className="w-3.5 h-3.5" />
                    <span>Inspect Architecture</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => soundEngine.playClick()}
                        className="p-2 rounded-xl bg-dark-900 border border-white/10 text-gray-300 hover:text-white hover:border-white/30 transition-all"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => soundEngine.playClick()}
                        className="p-2 rounded-xl bg-dark-900 border border-white/10 text-gray-300 hover:text-cyber-cyan hover:border-cyber-cyan/40 transition-all"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
