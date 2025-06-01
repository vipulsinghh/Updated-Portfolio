// components/ThreeCube.tsx
"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Mesh } from "three"; // Using import type for Mesh

function RotatingCube() {
  const cubeRef = useRef<Mesh>(null!);

  useFrame((_state, delta) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += delta * 0.5; // Slower rotation
      cubeRef.current.rotation.y += delta * 0.5; // Slower rotation
    }
  });

  return (
    <mesh ref={cubeRef} scale={1.8}> {/* Increased scale */}
      <boxGeometry args={[1, 1, 1]} />
      {/* Using a color that can be themed or directly using accent */}
      <meshStandardMaterial color={"hsl(var(--accent))"} emissive={"hsl(var(--accent))"} emissiveIntensity={0.2} metalness={0.3} roughness={0.4} />
    </mesh>
  );
}

export default function ThreeCube() {
  return (
    <Canvas style={{ height: "400px", width: "100%" }} camera={{ position: [0, 0, 2.5], fov: 75 }}>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <RotatingCube />
    </Canvas>
  );
}
