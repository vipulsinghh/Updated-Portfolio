
"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Mesh } from "three"; // Using import type for Mesh
import React, { useRef, useState, useEffect } from "react";

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
  const groupRef = useRef<any>(null); // Using any for groupRef as type can be complex
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.x += 0.003;
    }
  });

  const positions: [number, number, number][] = [];
  // Create a 3x3 grid of cubes, centered at (0,0,0) in the XY plane
  const gridSize = 3; // 3x3 grid
  const spacing = 1; // Spacing between cubes
  const offset = (gridSize - 1) * spacing / 2;

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Return null or a minimal placeholder
  }

  return (
    <Canvas style={{ height: 300, width: 300 }} camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 10]} intensity={1.5} />
      <CubeGroup />
    </Canvas>
  );
}
