'use client';

import React from 'react';
import { GAME_DEV_PROJECTS } from '@/data/portfolioData';
import { Gamepad2, Github, Cpu, Layers, Monitor, Flame } from 'lucide-react';
import { motion } from 'framer-motion';
import { soundEngine } from '../audio/SoundController';

export const GameDevSection: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-gamedev-crimson uppercase tracking-widest">
          <Gamepad2 className="w-4 h-4" />
          <span>[ AAA UNREAL ENGINE 5 & GRAPHICS ]</span>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold font-display text-white">
          AAA GAME DEVELOPMENT SHOWCASE
        </h3>
        <p className="text-sm md:text-base text-gray-400 max-w-2xl font-sans">
          C++ Gameplay Ability Systems (GAS), OpenXR spatial physics, HLSL procedural shaders, and Nanite/Lumen 60 FPS real-time rendering.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {GAME_DEV_PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -6 }}
            className="bg-dark-800/80 border border-white/10 hover:border-gamedev-crimson/40 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl group"
          >
            {/* Game Card Header Media */}
            <div className="relative h-64 w-full overflow-hidden bg-dark-900">
              {project.videoUrl ? (
                <div className="relative w-full h-full">
                  <video
                    src={project.videoUrl}
                    poster={project.image}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 pointer-events-none">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-black/80 backdrop-blur-md text-gamedev-amber border border-gamedev-amber/40 flex items-center gap-1.5 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      UNREAL ENGINE 5 FOOTAGE
                    </span>
                  </div>
                </div>
              ) : (
                <>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-transparent to-transparent" />
                </>
              )}
              <div className="absolute top-4 left-4 pointer-events-none">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-black/70 backdrop-blur-md text-gamedev-amber border border-gamedev-amber/30 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-gamedev-crimson" />
                  {project.engine}
                </span>
              </div>
            </div>

            {/* Game Project Specs */}
            <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <h4 className="text-2xl font-bold font-display text-white group-hover:text-gamedev-crimson transition-colors">
                  {project.title}
                </h4>
                <p className="text-xs font-mono text-gamedev-amber font-semibold">
                  {project.subtitle}
                </p>
                <p className="text-sm text-gray-300 leading-relaxed font-sans">
                  {project.description}
                </p>

                {/* Features */}
                <div className="space-y-1.5 pt-2">
                  {project.features.map((f, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-mono text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-gamedev-crimson shrink-0 mt-1.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ratio & Performance Bar */}
              <div className="space-y-3 p-4 bg-dark-900/60 rounded-2xl border border-white/5">
                <div className="flex items-center justify-between text-xs font-mono text-gray-300">
                  <span className="flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-gamedev-amber" /> Architecture
                  </span>
                  <span className="text-gamedev-amber font-semibold">{project.blueprintVsCppRatio}</span>
                </div>

                {/* Performance Grid */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10 text-center font-mono text-xs">
                  <div>
                    <div className="text-[10px] text-gray-400">FPS</div>
                    <div className="font-bold text-gamedev-crimson">{project.performanceMetrics.fps}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400">Resolution</div>
                    <div className="font-bold text-gray-200">{project.performanceMetrics.resolution}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400">Draw Calls</div>
                    <div className="font-bold text-gamedev-amber">{project.performanceMetrics.drawCalls}</div>
                  </div>
                </div>
              </div>

              {/* Rendering Tech & Github */}
              <div className="space-y-4 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.renderingTech.map((r, idx) => (
                    <span key={idx} className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-gamedev-crimson/10 text-gamedev-crimson border border-gamedev-crimson/30">
                      {r}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs font-mono text-gray-400">
                    Engine Pipeline Verified
                  </span>
                  <div className="flex items-center gap-2">
                    {project.videoUrl && (
                      <a
                        href={project.videoUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => soundEngine.playClick()}
                        className="px-3.5 py-2 rounded-xl bg-gamedev-crimson/20 border border-gamedev-crimson/50 text-xs font-mono text-gamedev-amber hover:text-white hover:bg-gamedev-crimson/30 transition-all flex items-center gap-1.5"
                      >
                        <Monitor className="w-3.5 h-3.5 text-gamedev-amber" />
                        <span>Watch Demo</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => soundEngine.playClick()}
                        className="px-4 py-2 rounded-xl bg-dark-900 border border-white/10 text-xs font-mono text-gray-300 hover:text-white hover:border-gamedev-crimson/50 transition-all flex items-center gap-2"
                      >
                        <Github className="w-4 h-4 text-gamedev-amber" />
                        <span>C++ Source</span>
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
