'use client';

import React, { useState } from 'react';
import { usePortfolio } from '@/context/PortfolioContext';
import { ModeToggle } from './ModeToggle';
import { Volume2, VolumeX, Search, Terminal, Menu, X, ShieldAlert } from 'lucide-react';
import { soundEngine } from '../audio/SoundController';

export const Navbar: React.FC = () => {
  const { mode, audioMuted, toggleAudio, setCommandPaletteOpen, setTerminalOpen, triggerEasterEgg } = usePortfolio();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Overview', href: '#hero' },
    { name: mode === 'software' ? 'Architecture & Code' : 'Unreal 5 & C++', href: '#showcase' },
    { name: 'Skills Radar', href: '#skills' },
    { name: 'Education & Timeline', href: '#timeline' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 py-4 backdrop-blur-xl border-b border-white/10 bg-dark-900/70 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo & Institution Info */}
        <a
          href="#hero"
          onClick={() => soundEngine.playClick()}
          className="flex items-center gap-3 group"
        >
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-lg transition-transform duration-300 group-hover:scale-105 ${
            mode === 'software' ? 'bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan/40 shadow-[0_0_15px_rgba(0,243,255,0.3)]' : 'bg-gamedev-crimson/20 text-gamedev-crimson border border-gamedev-crimson/40 shadow-[0_0_15px_rgba(255,0,85,0.3)]'
          }`}>
            AE
          </div>
          <div className="hidden sm:block">
            <span className="block font-semibold text-sm tracking-wide text-white group-hover:text-cyber-cyan transition-colors">
              Arivuchezhiyan E
            </span>
            <span className="block text-[10px] text-gray-400 font-mono tracking-tighter">
              M.Tech Integrated CSE • SSN Chennai
            </span>
          </div>
        </a>

        {/* Mode Toggle Switch (Center Desktop) */}
        <div className="hidden lg:block">
          <ModeToggle />
        </div>

        {/* Desktop Navigation Links & Action Utilities */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-5 text-xs uppercase tracking-wider font-mono text-gray-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => soundEngine.playClick()}
                className="hover:text-white transition-colors duration-200 relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-current after:absolute after:bottom-0 after:left-0 after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-2 border-l border-white/10 pl-4">
            {/* Command Palette Button */}
            <button
              onClick={() => {
                soundEngine.playClick();
                setCommandPaletteOpen(true);
              }}
              title="Command Palette (Cmd + K)"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-800 border border-white/10 text-xs font-mono text-gray-300 hover:border-cyber-cyan/50 hover:text-white transition-all"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden xl:inline">Search</span>
              <kbd className="px-1.5 py-0.5 rounded bg-black/40 text-[10px] text-gray-400">⌘K</kbd>
            </button>

            {/* CLI Terminal Drawer Button */}
            <button
              onClick={() => {
                soundEngine.playClick();
                setTerminalOpen(true);
              }}
              title="CLI Terminal Drawer (`)"
              className="p-2 rounded-lg bg-dark-800 border border-white/10 text-gray-300 hover:border-cyber-cyan/50 hover:text-cyber-cyan transition-all"
            >
              <Terminal className="w-4 h-4" />
            </button>

            {/* Audio Toggle */}
            <button
              onClick={toggleAudio}
              title={audioMuted ? 'Unmute Procedural Audio' : 'Mute Procedural Audio'}
              className="p-2 rounded-lg bg-dark-800 border border-white/10 text-gray-300 hover:border-cyber-cyan/50 hover:text-white transition-all"
            >
              {audioMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-cyber-cyan" />}
            </button>

            {/* Konami Easter Egg Direct Trigger */}
            <button
              onClick={triggerEasterEgg}
              title="Unlock Easter Egg Mode"
              className="p-2 rounded-lg bg-dark-800 border border-white/10 text-gray-300 hover:text-gamedev-amber hover:border-gamedev-amber/50 transition-all"
            >
              <ShieldAlert className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-4 pb-6 px-4 border-t border-white/10 mt-3 bg-dark-900/95 space-y-4">
          <div className="flex justify-center pb-2">
            <ModeToggle />
          </div>
          <div className="flex flex-col gap-3 font-mono text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  soundEngine.playClick();
                  setMobileMenuOpen(false);
                }}
                className="text-gray-300 hover:text-cyber-cyan py-1"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3 pt-3 border-t border-white/10">
            <button
              onClick={() => {
                setCommandPaletteOpen(true);
                setMobileMenuOpen(false);
              }}
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-dark-800 text-xs font-mono border border-white/10 text-white"
            >
              <Search className="w-4 h-4" /> Cmd+K
            </button>
            <button
              onClick={() => {
                setTerminalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-dark-800 text-xs font-mono border border-white/10 text-white"
            >
              <Terminal className="w-4 h-4" /> Terminal
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
