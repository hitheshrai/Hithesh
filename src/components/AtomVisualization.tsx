// src/components/AtomVisualization.tsx

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function Electron({ radius, speed }: { radius: number; speed: number }) {
  const electronRef = useRef<any>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    if (electronRef.current) {
      electronRef.current.position.set(
        radius * Math.cos(t),
        radius * Math.sin(t),
        0
      );
    }
  });

  return (
    <mesh ref={electronRef}>
      <sphereGeometry args={[0.1, 16, 16]} />
      {/* @ts-ignore */}
      <meshStandardMaterial attach="material" color={0x0000ff} />
    </mesh>
  );
}

function AtomNucleus() {
  return (
    <mesh>
      <sphereGeometry args={[0.3, 32, 32]} />
      {/* @ts-ignore */}
      <meshStandardMaterial attach="material" color={0xff0000} />
    </mesh>
  );
}

export default function AtomVisualization() {
  return (
    <Canvas className="atom-canvas">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      <AtomNucleus />
      <Electron radius={1} speed={1} />
      <Electron radius={1.5} speed={0.7} />
      <Electron radius={2} speed={1.2} />
    </Canvas>
  );
}
