
'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import type { Mesh } from 'three'; // Ensuring type-only import for Mesh
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
  const groupRef = useRef<any>(null); // Using any as per user example for now
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
      groupRef.current.rotation.x += 0.005;
    }
  });

  const positions: [number, number, number][] = [];
  // Create a 3x3 grid of cubes, centered at (0,0,0) in the XY plane
  const gridSize = 3; // 3x3 grid
  const spacing = 1; // Spacing between cubes
  const offset = (gridSize - 1) * spacing / 2;

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        // Centering the grid
        positions.push([i * spacing - offset, j * spacing - offset, 0]);
    }
  }


  return (
    <group ref={groupRef} scale={0.75}> {/* Slightly scale down the group for better fit */}
      {positions.map((pos, idx) => (
        <Cube key={idx} position={pos} />
      ))}
    </group>
  );
}

export default function CubeGrid() {
  // No client-side mount check needed here as dynamic import with ssr:false handles it
  return (
    <Canvas style={{ height: 300, width: 300 }} camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.3} /> {/* Adjusted from user example for potentially better visibility */}
      <directionalLight position={[5, 5, 5]} intensity={1} /> {/* Adjusted light for better visibility */}
      <CubeGroup />
    </Canvas>
  );
}
