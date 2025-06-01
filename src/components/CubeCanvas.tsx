'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import type { Mesh } from 'three'; // Use import type for Three.js types

function Cube({ position }: { position: [number, number, number] }) {
  const ref = useRef<Mesh>(null!);
  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[0.9, 0.9, 0.9]} />
      <meshStandardMaterial color="#111" roughness={0.2} metalness={1} />
    </mesh>
  );
}

function CubeGroup() {
  const groupRef = useRef<any>(null); // Using any as per user's example
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.005;
      groupRef.current.rotation.y += 0.005;
    }
  });

  const positions: [number, number, number][] = [];
  const gridSize = 3; 
  const spacing = 1; 
  const offset = (gridSize - 1) * spacing / 2;

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        positions.push([i * spacing - offset, j * spacing - offset, 0]);
    }
  }
  
  return (
    <group ref={groupRef} scale={0.75}>
      {positions.map((pos, idx) => (
        <Cube key={idx} position={pos} />
      ))}
    </group>
  );
}

export default function CubeCanvas() {
  return (
    <Canvas style={{ height: '100%', width: '100%' }} camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <CubeGroup />
    </Canvas>
  );
}
