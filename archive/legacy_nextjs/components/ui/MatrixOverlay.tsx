'use client';

import React, { useEffect, useRef } from 'react';
import { usePortfolio } from '@/context/PortfolioContext';
import { X, Sparkles } from 'lucide-react';

export const MatrixOverlay: React.FC = () => {
  const { easterEggActive, setEasterEggActive } = usePortfolio();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!easterEggActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphabet = katakana.split('');

    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const rainDrops: number[] = [];

    for (let x = 0; x < columns; x++) {
      rainDrops[x] = Math.floor(Math.random() * -100);
    }

    let animationId: number;

    const draw = () => {
      ctx.fillStyle = 'rgba(4, 7, 13, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff9d';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet[Math.floor(Math.random() * alphabet.length)];
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [easterEggActive]);

  if (!easterEggActive) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-auto bg-black/80 flex flex-col justify-between p-6">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Top Banner */}
      <div className="relative z-10 flex items-center justify-between px-6 py-4 bg-dark-900/90 border border-cyber-emerald/50 rounded-2xl shadow-[0_0_30px_rgba(0,255,157,0.3)] max-w-4xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 h-6 text-cyber-emerald animate-pulse" />
          <div>
            <h2 className="text-lg font-bold text-white font-mono uppercase tracking-widest">
              [KONAMI CODE ACTIVATED] — CYBER MATRIX UNLOCKED
            </h2>
            <p className="text-xs text-cyber-emerald font-mono">
              Welcome, Arivuchezhiyan E. Secret Cyberpunk Matrix stream rendered at 60 FPS.
            </p>
          </div>
        </div>
        <button
          onClick={() => setEasterEggActive(false)}
          className="p-2 rounded-xl bg-cyber-emerald/20 border border-cyber-emerald/50 text-cyber-emerald hover:bg-cyber-emerald/30 font-mono text-xs flex items-center gap-2"
        >
          <X className="w-4 h-4" /> Exit Stream
        </button>
      </div>

      {/* Footer Banner */}
      <div className="relative z-10 text-center font-mono text-xs text-cyber-emerald bg-dark-900/90 py-3 rounded-xl border border-cyber-emerald/30 max-w-md mx-auto w-full">
        Press ESC or click button above to return to Portfolio
      </div>
    </div>
  );
};
