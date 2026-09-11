'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const SoftwareNodes: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const count = 75;

  // Generate node positions and random speeds
  const [positions, connections] = React.useMemo(() => {
    const posArr: [number, number, number][] = [];
    for (let i = 0; i < count; i++) {
      posArr.push([
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 8,
      ]);
    }

    const lines: [number, number][] = [];
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = posArr[i][0] - posArr[j][0];
        const dy = posArr[i][1] - posArr[j][1];
        const dz = posArr[i][2] - posArr[j][2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 3.2) {
          lines.push([i, j]);
        }
      }
    }
    return [posArr, lines];
  }, [count]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.06;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Node Spheres */}
      {positions.map((pos, idx) => (
        <mesh key={idx} position={pos}>
          <sphereGeometry args={[0.06, 12, 12]} />
          <meshBasicMaterial color="#00f3ff" />
        </mesh>
      ))}

      {/* Network Connections */}
      {connections.map(([i, j], idx) => {
        const p1 = new THREE.Vector3(...positions[i]);
        const p2 = new THREE.Vector3(...positions[j]);
        const points = [p1, p2];
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

        return (
          <primitive key={idx} object={new THREE.Line(lineGeometry, new THREE.LineBasicMaterial({ color: '#005577', opacity: 0.35, transparent: true }))} />
        );
      })}
    </group>
  );
};
