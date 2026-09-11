'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const GameTerrain: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Generate particle embers
  const particleCount = 120;
  const particlePositions = React.useMemo(() => {
    const arr = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      arr[i] = (Math.random() - 0.5) * 16;
      arr[i + 1] = Math.random() * 8 - 2;
      arr[i + 2] = (Math.random() - 0.5) * 16;
    }
    return arr;
  }, [particleCount]);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += delta * 0.03;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group position={[0, -2, -3]} rotation={[-Math.PI / 3.5, 0, 0]}>
      {/* Wireframe Terrain Grid */}
      <mesh ref={meshRef}>
        <planeGeometry args={[20, 20, 32, 32]} />
        <meshBasicMaterial color="#ff0055" wireframe opacity={0.3} transparent />
      </mesh>

      {/* Floating Ember Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial size={0.08} color="#ffaa00" transparent opacity={0.8} />
      </points>
    </group>
  );
};
