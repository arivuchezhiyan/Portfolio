'use client';

import React, { useState, useRef, useEffect } from 'react';
import { usePortfolio } from '@/context/PortfolioContext';
import { handleTerminalCommand } from '@/data/terminalCommands';
import { Terminal, X, Minimize2, Maximize2 } from 'lucide-react';
import { soundEngine } from '../audio/SoundController';

export const TerminalDrawer: React.FC = () => {
  const { terminalOpen, setTerminalOpen, setMode, triggerEasterEgg } = usePortfolio();
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<{ cmd: string; output: string | string[]; type?: string }[]>([
    {
      cmd: 'init',
      output: [
        'ARIVUCHEZHIYAN E // SYSTEM TERMINAL v4.2.0',
        'Type "help" to view all available commands.',
        'Type "mode gamedev" or "mode software" to switch identities.',
      ],
      type: 'system',
    },
  ]);
  const [isExpanded, setIsExpanded] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalOpen) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalOpen, history]);

  if (!terminalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    soundEngine.playKeypress();
    const result = handleTerminalCommand(inputVal, setMode, triggerEasterEgg);

    if (result.output === 'CLEAR') {
      setHistory([]);
    } else {
      setHistory(prev => [...prev, { cmd: inputVal, output: result.output, type: result.type }]);
    }
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-2 sm:p-6 bg-black/70 backdrop-blur-md">
      <div className={`w-full max-w-4xl bg-dark-900 border border-cyber-cyan/30 rounded-2xl shadow-[0_0_30px_rgba(0,243,255,0.2)] overflow-hidden flex flex-col transition-all duration-300 ${
        isExpanded ? 'h-[90vh]' : 'h-[500px]'
      }`}>
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-dark-800 border-b border-white/10 select-none">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
            </div>
            <div className="flex items-center gap-2 pl-3 border-l border-white/10 text-xs font-mono text-gray-300">
              <Terminal className="w-4 h-4 text-cyber-cyan" />
              <span>arivuchezhiyan@ssn-node:~</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 rounded text-gray-400 hover:text-white"
            >
              {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setTerminalOpen(false)}
              className="p-1 rounded text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Output Console Body */}
        <div className="flex-1 p-4 overflow-y-auto font-mono text-xs md:text-sm space-y-3 bg-dark-900/90 text-gray-200 leading-relaxed">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              {item.cmd !== 'init' && (
                <div className="flex items-center gap-2 text-cyber-cyan font-bold">
                  <span>arivuchezhiyan@ssn:~$</span>
                  <span>{item.cmd}</span>
                </div>
              )}
              <div className={`pl-2 border-l-2 ${
                item.type === 'error' ? 'border-red-500 text-red-400' :
                item.type === 'success' ? 'border-green-400 text-emerald-400' :
                item.type === 'system' ? 'border-cyber-cyan text-cyber-cyan' :
                'border-gray-700 text-gray-300'
              }`}>
                {Array.isArray(item.output) ? (
                  item.output.map((line, i) => <div key={i}>{line}</div>)
                ) : (
                  <div>{item.output}</div>
                )}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Line Input */}
        <form onSubmit={handleSubmit} className="p-3 bg-dark-800/80 border-t border-white/10 flex items-center gap-2 font-mono">
          <span className="text-cyber-cyan font-bold text-sm">arivuchezhiyan@ssn:~$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type command ('help', 'mode gamedev', 'projects', 'matrix')..."
            className="flex-1 bg-transparent text-white font-mono text-xs md:text-sm focus:outline-none placeholder-gray-500"
            autoFocus
          />
          <button
            type="submit"
            className="px-3 py-1 bg-cyber-cyan/20 border border-cyber-cyan/40 rounded text-cyber-cyan text-xs hover:bg-cyber-cyan/30 transition-colors"
          >
            Run
          </button>
        </form>
      </div>
    </div>
  );
};
