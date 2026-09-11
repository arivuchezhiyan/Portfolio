'use client';

import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { usePortfolio } from '@/context/PortfolioContext';
import { SoftwareNodes } from './SoftwareNodes';
import { GameTerrain } from './GameTerrain';

export const DualSceneCanvas: React.FC = () => {
  const { mode } = usePortfolio();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className="fixed inset-0 bg-[#04070d] -z-10" />;

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 transition-opacity duration-1000">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        {mode === 'software' ? <SoftwareNodes /> : <GameTerrain />}
      </Canvas>
      {/* Dynamic Ambient Blur Backdrop */}
      <div
        className={`absolute inset-0 transition-colors duration-700 pointer-events-none opacity-40 ${
          mode === 'software'
            ? 'bg-radial-gradient from-cyber-cyan/10 via-transparent to-background'
            : 'bg-radial-gradient from-gamedev-crimson/10 via-transparent to-background'
        }`}
      />
    </div>
  );
};
