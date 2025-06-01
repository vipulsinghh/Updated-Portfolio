'use client';
import { useEffect, useState } from 'react';
import type { JSX } from 'react';

export default function SafeCube() {
  const [CubeComponent, setCubeComponent] = useState<null | JSX.Element>(null);

  useEffect(() => {
    async function loadCube() {
      try {
        // Dynamically import the CubeCanvas component
        const { default: LoadedCubeCanvas } = await import('@/components/CubeCanvas');
        setCubeComponent(<LoadedCubeCanvas />);
      } catch (error) {
        console.error("Failed to load CubeCanvas:", error);
        // Optionally set a fallback UI or error message
        setCubeComponent(<div className="text-muted-foreground">Error loading 3D model.</div>);
      }
    }

    loadCube();
  }, []); // Empty dependency array ensures this runs once on mount

  // Provide a consistent size for the container to avoid layout shifts
  return <div style={{ height: '300px', width: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{CubeComponent || <div className="text-muted-foreground">Loading 3D Grid...</div>}</div>;
}
