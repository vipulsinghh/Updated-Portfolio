
'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three'; // Using direct import as per user's latest working example
import React, { useRef } from 'react';

function Cube({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<Mesh>(null!);

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.9, 0.9, 0.9]} />
      <meshStandardMaterial color="#111" roughness={0.2} metalness={1} />
    </mesh>
  );
}

function CubeGroup() {
  const groupRef = useRef<any>(null); // Keeping 'any' as per user's specific example
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.005;
      groupRef.current.rotation.y += 0.005;
    }
  });

  const positions: [number, number, number][] = [];
  // Create a 3x3 grid of cubes, centered at (0,0,0) in the XY plane
  // User's example: for (let x = -1; x <= 1; x++) { for (let y = -1; y <= 1; y++) { positions.push([x, y, 0]); } }
  // This creates a 3x3 grid. For a more centered appearance from previous versions:
  const gridSize = 3; 
  const spacing = 1; 
  const offset = (gridSize - 1) * spacing / 2;

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        positions.push([i * spacing - offset, j * spacing - offset, 0]);
    }
  }

  return (
    <group ref={groupRef} scale={0.75}> {/* Slightly scale down for better fit */}
      {positions.map((pos, idx) => (
        <Cube key={idx} position={pos} />
      ))}
    </group>
  );
}

export default function CubeGridClientOnly() {
  return (
    <Canvas style={{ height: 300, width: 300 }} camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} /> {/* Added intensity for better visibility */}
      <CubeGroup />
    </Canvas>
  );
}

