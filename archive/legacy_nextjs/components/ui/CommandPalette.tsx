'use client';

import React, { useState } from 'react';
import { usePortfolio } from '@/context/PortfolioContext';
import { Search, Cpu, Gamepad2, Terminal, Code, Phone, Sparkles, X } from 'lucide-react';
import { soundEngine } from '../audio/SoundController';

export const CommandPalette: React.FC = () => {
  const {
    commandPaletteOpen,
    setCommandPaletteOpen,
    setMode,
    setTerminalOpen,
    triggerEasterEgg,
  } = usePortfolio();

  const [query, setQuery] = useState('');

  if (!commandPaletteOpen) return null;

  const actions = [
    {
      label: 'Switch to Software Engineer Mode',
      icon: Cpu,
      category: 'Identity',
      action: () => setMode('software'),
    },
    {
      label: 'Switch to AAA Game Developer Mode',
      icon: Gamepad2,
      category: 'Identity',
      action: () => setMode('gamedev'),
    },
    {
      label: 'Launch Interactive CLI Terminal (`)',
      icon: Terminal,
      category: 'Tools',
      action: () => setTerminalOpen(true),
    },
    {
      label: 'Trigger Secret Cyber Matrix Easter Egg',
      icon: Sparkles,
      category: 'Easter Egg',
      action: () => triggerEasterEgg(),
    },
    {
      label: 'Jump to Software Showcase (AI / Systems)',
      icon: Code,
      category: 'Navigation',
      action: () => {
        setMode('software');
        window.location.hash = '#showcase';
      },
    },
    {
      label: 'Jump to Game Dev Showcase (UE5 / C++)',
      icon: Gamepad2,
      category: 'Navigation',
      action: () => {
        setMode('gamedev');
        window.location.hash = '#showcase';
      },
    },
    {
      label: 'Contact Arivuchezhiyan E (Email / Socials)',
      icon: Phone,
      category: 'Contact',
      action: () => {
        window.location.hash = '#contact';
      },
    },
  ];

  const filtered = actions.filter(item =>
    item.label.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-md">
      <div className="w-full max-w-xl bg-dark-900 border border-white/20 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* Search Bar Input */}
        <div className="flex items-center px-4 py-3 border-b border-white/10 gap-3">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              soundEngine.playKeypress();
            }}
            placeholder="Type a command or search project..."
            className="w-full bg-transparent text-white font-mono text-sm placeholder-gray-500 focus:outline-none"
            autoFocus
          />
          <button
            onClick={() => setCommandPaletteOpen(false)}
            className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-dark-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length > 0 ? (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    soundEngine.playClick();
                    item.action();
                    setCommandPaletteOpen(false);
                  }}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white/10 text-left transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-dark-800 border border-white/10 group-hover:border-cyber-cyan/50 text-gray-300 group-hover:text-cyber-cyan">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-cyber-cyan transition-colors">
                        {item.label}
                      </div>
                      <div className="text-[10px] font-mono text-gray-400">
                        {item.category}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-gray-500 group-hover:text-gray-300">
                    Select ↵
                  </span>
                </button>
              );
            })
          ) : (
            <div className="px-4 py-8 text-center text-sm font-mono text-gray-400">
              No matching commands found for "{query}".
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 border-t border-white/10 bg-dark-800/50 flex justify-between items-center text-[10px] font-mono text-gray-400">
          <span>Navigate with arrows or click</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
};
