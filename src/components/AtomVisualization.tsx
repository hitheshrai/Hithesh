// src/components/AtomVisualization.tsx

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function Electron({ radius, speed }) {
  const electronRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    electronRef.current.position.set(
      radius * Math.cos(t),
      radius * Math.sin(t),
      0
    );
  });

  return (
    <mesh ref={electronRef}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}

function AtomNucleus() {
  return (
    <mesh>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}

export default function AtomVisualization() {
  return (
    <Canvas style={{ height: '100vh', width: '100%' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      <AtomNucleus />
      <Electron radius={1} speed={1} />
      <Electron radius={1.5} speed={0.7} />
      <Electron radius={2} speed={1.2} />
    </Canvas>
  );
}
