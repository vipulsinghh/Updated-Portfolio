// components/ThreeCube.tsx
"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Mesh } from "three"; // Using import type for Mesh

function RotatingCube() {
  const cubeRef = useRef<Mesh>(null!);

  useFrame((_state, delta) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += delta * 0.5; 
      cubeRef.current.rotation.y += delta * 0.5; 
    }
  });

  return (
    <mesh ref={cubeRef} scale={1.8}> 
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"hsl(var(--accent))"} emissive={"hsl(var(--accent))"} emissiveIntensity={0.2} metalness={0.3} roughness={0.4} />
    </mesh>
  );
}

export default function ThreeCube() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Return null or a placeholder while waiting for the client-side mount
    // This prevents the Canvas from attempting to render prematurely.
    return null; 
    // Alternatively, you could return a loading spinner or placeholder:
    // return <div style={{ height: "400px", width: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center' }}><p>Loading 3D model...</p></div>;
  }

  return (
    <Canvas style={{ height: "400px", width: "100%" }} camera={{ position: [0, 0, 2.5], fov: 75 }}>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <RotatingCube />
    </Canvas>
  );
}
