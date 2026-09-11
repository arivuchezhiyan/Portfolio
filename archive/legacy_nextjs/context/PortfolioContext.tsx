'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { PortfolioMode, SoftwareProject } from '@/types';
import { soundEngine } from '@/components/audio/SoundController';

interface PortfolioContextType {
  mode: PortfolioMode;
  setMode: (mode: PortfolioMode) => void;
  toggleMode: () => void;
  audioMuted: boolean;
  toggleAudio: () => void;
  commandPaletteOpen: boolean;
  setCommandPaletteOpen: (open: boolean) => void;
  terminalOpen: boolean;
  setTerminalOpen: (open: boolean) => void;
  easterEggActive: boolean;
  setEasterEggActive: (active: boolean) => void;
  triggerEasterEgg: () => void;
  activeArchitectureProject: SoftwareProject | null;
  setActiveArchitectureProject: (project: SoftwareProject | null) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setModeState] = useState<PortfolioMode>('software');
  const [audioMuted, setAudioMuted] = useState<boolean>(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState<boolean>(false);
  const [terminalOpen, setTerminalOpen] = useState<boolean>(false);
  const [easterEggActive, setEasterEggActive] = useState<boolean>(false);
  const [activeArchitectureProject, setActiveArchitectureProject] = useState<SoftwareProject | null>(null);

  const setMode = (newMode: PortfolioMode) => {
    setModeState(newMode);
    soundEngine.playModeSwitch(newMode);
    if (typeof document !== 'undefined') {
      if (newMode === 'gamedev') {
        document.documentElement.classList.add('mode-gamedev');
        document.documentElement.classList.remove('mode-software');
      } else {
        document.documentElement.classList.add('mode-software');
        document.documentElement.classList.remove('mode-gamedev');
      }
    }
  };

  const toggleMode = () => {
    setMode(mode === 'software' ? 'gamedev' : 'software');
  };

  const toggleAudio = () => {
    const nextState = !audioMuted;
    setAudioMuted(nextState);
    soundEngine.setMuted(nextState);
    if (!nextState) soundEngine.playClick();
  };

  const triggerEasterEgg = () => {
    setEasterEggActive(true);
    soundEngine.playEasterEgg();
  };

  // Keyboard shortcut listener for Cmd+K and `~` for terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        soundEngine.playClick();
        setCommandPaletteOpen(prev => !prev);
      }
      if (e.key === '`' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        soundEngine.playClick();
        setTerminalOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setCommandPaletteOpen(false);
        setTerminalOpen(false);
        setEasterEggActive(false);
        setActiveArchitectureProject(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <PortfolioContext.Provider
      value={{
        mode,
        setMode,
        toggleMode,
        audioMuted,
        toggleAudio,
        commandPaletteOpen,
        setCommandPaletteOpen,
        terminalOpen,
        setTerminalOpen,
        easterEggActive,
        setEasterEggActive,
        triggerEasterEgg,
        activeArchitectureProject,
        setActiveArchitectureProject,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
