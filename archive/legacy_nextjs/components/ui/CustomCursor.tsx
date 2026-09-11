'use client';

import React, { useEffect, useState } from 'react';
import { usePortfolio } from '@/context/PortfolioContext';

export const CustomCursor: React.FC = () => {
  const { mode } = usePortfolio();
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a'))) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const follow = requestAnimationFrame(() => {
      setTrailingPos(prev => ({
        x: prev.x + (pos.x - prev.x) * 0.25,
        y: prev.y + (pos.y - prev.y) * 0.25,
      }));
    });
    return () => cancelAnimationFrame(follow);
  }, [pos, trailingPos]);

  return (
    <>
      {/* Primary Dot */}
      <div
        className={`fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-colors duration-300 ${
          mode === 'software' ? 'bg-cyber-cyan shadow-[0_0_10px_#00f3ff]' : 'bg-gamedev-crimson shadow-[0_0_10px_#ff0055]'
        }`}
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      />
      {/* Trailing Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-40 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150 border ${
          isHovered ? 'w-12 h-12 scale-125 opacity-80' : 'w-8 h-8 opacity-40'
        } ${
          mode === 'software' ? 'border-cyber-cyan' : 'border-gamedev-crimson'
        }`}
        style={{ left: `${trailingPos.x}px`, top: `${trailingPos.y}px` }}
      />
    </>
  );
};
