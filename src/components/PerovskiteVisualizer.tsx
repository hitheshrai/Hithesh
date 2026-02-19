// src/components/BackgroundPerovskite.tsx
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useReducedMotion } from "framer-motion";

/**
 * Decorative background 3D object for pages.
 * - Full-bleed absolute canvas
 * - Low contrast, desaturated colors
 * - Pointer-events disabled so it doesn't block UI
 * - Rotates slowly; respects prefers-reduced-motion
 */

// --- Local simplified UnitCell for background ---
function BgUnitCell({ a = 4.0 }: { a?: number }) {
  const half = a / 2;
  const cornerPositions = useMemo(
    () =>
      [
        [-half, -half, -half],
        [half, -half, -half],
        [-half, half, -half],
        [half, half, -half],
        [-half, -half, half],
        [half, -half, half],
        [-half, half, half],
        [half, half, half],
      ] as [number, number, number][],
    [half]
  );

  const facePositions = useMemo(
    () =>
      [
        [0, -half, 0],
        [0, half, 0],
        [-half, 0, 0],
        [half, 0, 0],
        [0, 0, -half],
        [0, 0, half],
      ] as [number, number, number][],
    [half]
  );

  const edgeGeo = useMemo(() => {
    const box = new THREE.BoxGeometry(a, a, a);
    const eg = new THREE.EdgesGeometry(box);
    box.dispose();
    return eg;
  }, [a]);

  return (
    <group>
      {/* corners (A-site) */}
      {cornerPositions.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial
            color={"#d9d6c9"}
            metalness={0.05}
            roughness={0.7}
            opacity={0.85}
            transparent
          />
        </mesh>
      ))}

      {/* body center (B-site) */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.22, 20, 20]} />
        <meshStandardMaterial
          color={"#bdb7c8"}
          metalness={0.05}
          roughness={0.7}
          opacity={0.9}
          transparent
        />
      </mesh>

      {/* face centers (X-site) */}
      {facePositions.map((p, i) => (
        <mesh key={"f" + i} position={p}>
          <sphereGeometry args={[0.12, 12, 12]} />
          <meshStandardMaterial
            color={"#c7d3df"}
            metalness={0.02}
            roughness={0.75}
            opacity={0.9}
            transparent
          />
        </mesh>
      ))}

      {/* subtle edges */}
      <lineSegments geometry={edgeGeo}>
        <lineBasicMaterial color={"#94a3b8"} transparent opacity={0.12} />
      </lineSegments>
    </group>
  );
}

// --- Rotating wrapper that respects reduced motion ---
function RotatingUnit({ speed = 0.02 }: { speed?: number }) {
  const ref = useRef<THREE.Group | null>(null);
  const shouldReduce = useReducedMotion();

  useFrame((_state, delta) => {
    if (!ref.current) return;
    const s = shouldReduce ? 0 : speed;
    ref.current.rotation.y += delta * s;
    ref.current.rotation.x += delta * s * 0.3;
  });

  return (
    <group ref={ref} position={[0, -0.4, 0]} scale={[0.9, 0.9, 0.9]}>
      <BgUnitCell a={4.0} />
    </group>
  );
}

/**
 * BackgroundPerovskite
 * Props:
 *  - dpr: pixel ratio (number or [min,max]) to control canvas resolution for perf
 */
export default function BackgroundPerovskite({
  dpr = 1.0,
}: {
  dpr?: number | [number, number];
}) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      style={{ opacity: 0.32 }}
    >
      <Canvas
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [6, 6, 6], fov: 35 }}
        dpr={dpr}
      >
        {/* soft lights to create a gentle, desaturated look */}
        <ambientLight intensity={0.9} color={"#ffffff"} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={0.6}
          color={"#fff7ef"}
        />
        <pointLight position={[-10, -10, -10]} intensity={0.2} color={"#cfe8ff"} />

        {/* OrbitControls disabled (decorative only) */}
        <OrbitControls enabled={false} />

        {/* center, rotated, low-contrast unit cell */}
        <RotatingUnit speed={0.025} />
      </Canvas>
    </div>
  );
}
