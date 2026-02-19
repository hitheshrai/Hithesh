// src/components/PerovskiteVisualizer.tsx
import { useMemo, useState, useCallback, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// ─── Types ────────────────────────────────────────────────────────────────────

type AtomSizes = { A: number; B: number; X: number };

// ─── Unit Cell ────────────────────────────────────────────────────────────────

function UnitCell({
  a,
  showBonds,
  atomSizes,
}: {
  a: number;
  showBonds: boolean;
  atomSizes: AtomSizes;
}) {
  const s = a / 2;

  const { cornerPositions, facePositions, edgeGeometry } = useMemo(() => {
    const half = a / 2;

    const cornerPositions: [number, number, number][] = [
      [-half, -half, -half],
      [+half, -half, -half],
      [-half, +half, -half],
      [+half, +half, -half],
      [-half, -half, +half],
      [+half, -half, +half],
      [-half, +half, +half],
      [+half, +half, +half],
    ];

    const facePositions: [number, number, number][] = [
      [0, -half, 0],
      [0, +half, 0],
      [-half, 0, 0],
      [+half, 0, 0],
      [0, 0, -half],
      [0, 0, +half],
    ];

    // Build cell edge lines from a BoxGeometry's edges
    const box = new THREE.BoxGeometry(a, a, a);
    const edgeGeometry = new THREE.EdgesGeometry(box);
    box.dispose();

    return { cornerPositions, facePositions, edgeGeometry };
  }, [a]);

  return (
    <group>
      {/* A-site: corners (e.g. Cs, organic cation) — gold */}
      {cornerPositions.map((pos, i) => (
        <mesh key={"A" + i} position={pos}>
          <sphereGeometry args={[atomSizes.A, 24, 24]} />
          <meshStandardMaterial color="#f5d300" roughness={0.3} metalness={0.2} />
        </mesh>
      ))}

      {/* B-site: body center (e.g. Pb, Sn) — purple */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[atomSizes.B, 32, 32]} />
        <meshStandardMaterial color="#9b59b6" roughness={0.3} metalness={0.3} />
      </mesh>

      {/* X-site: face centers (halides) — blue */}
      {facePositions.map((pos, i) => (
        <mesh key={"X" + i} position={pos}>
          <sphereGeometry args={[atomSizes.X, 20, 20]} />
          <meshStandardMaterial color="#4aa3df" roughness={0.4} metalness={0.1} />
        </mesh>
      ))}

      {/* Cell edges — rendered with EdgesGeometry + lineSegments */}
      {showBonds && (
        <lineSegments geometry={edgeGeometry}>
          <lineBasicMaterial color="#94a3b8" transparent opacity={0.6} />
        </lineSegments>
      )}
    </group>
  );
}

// ─── Export Button (uses R3F gl directly — no extra library needed) ───────────

function ExportCapture({ triggerRef }: { triggerRef: React.MutableRefObject<(() => void) | null> }) {
  const { gl, scene, camera } = useThree();

  triggerRef.current = useCallback(() => {
    gl.render(scene, camera);
    const dataURL = gl.domElement.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = "perovskite-unit-cell.png";
    link.href = dataURL;
    link.click();
  }, [gl, scene, camera]);

  return null;
}

// ─── Slider control ───────────────────────────────────────────────────────────

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  display,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  display?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
        <span>{label}</span>
        <span className="font-medium text-slate-700 dark:text-slate-200">
          {display ?? value.toFixed(2)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-violet-500"
      />
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function PerovskiteVisualizer() {
  const [lattice, setLattice] = useState(4.0);
  const [showBonds, setShowBonds] = useState(true);
  const [Asize, setAsize] = useState(0.25);
  const [Bsize, setBsize] = useState(0.35);
  const [Xsize, setXsize] = useState(0.18);
  const [ambient, setAmbient] = useState(0.6);

  // Ref to capture function injected by ExportCapture inside Canvas
  const exportTrigger = useRef<(() => void) | null>(null);

  const handleExport = () => {
    exportTrigger.current?.();
  };

  return (
    <div className="rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-medium">Perovskite unit-cell visualizer</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl">
            Interactive ABX₃ unit cell — adjust lattice parameter to explore strain effects,
            toggle bonds, and tune atom radii. Drag to orbit. Export captures the current view.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {["ABX₃", "Lattice", "Strain", "Export"].map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-end gap-2 shrink-0">
          <div className="text-xs text-slate-500">Lattice (Å)</div>
          <div className="text-lg font-semibold">{lattice.toFixed(2)} Å</div>
          <button
            onClick={handleExport}
            className="inline-flex items-center gap-2 px-3 py-2 bg-violet-600 text-white rounded-md text-sm hover:bg-violet-700 transition-colors"
          >
            Export PNG
          </button>
        </div>
      </div>

      {/* Canvas */}
      <div className="mt-4 h-[380px] w-full rounded bg-slate-950">
        <Canvas
          camera={{ position: [6, 6, 6], fov: 45 }}
          // preserveDrawingBuffer is required for toDataURL to work
          gl={{ preserveDrawingBuffer: true }}
        >
          <ambientLight intensity={ambient} />
          <directionalLight position={[10, 10, 5]} intensity={0.8} />
          <pointLight position={[-10, -10, -10]} intensity={0.4} />

          <axesHelper args={[2]} />
          <OrbitControls enablePan={false} />

          <UnitCell
            a={lattice}
            showBonds={showBonds}
            atomSizes={{ A: Asize, B: Bsize, X: Xsize }}
          />

          {/* Injects the export function from inside the R3F context */}
          <ExportCapture triggerRef={exportTrigger} />
        </Canvas>
      </div>

      {/* Controls */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
        <Slider
          label="Lattice parameter (Å)"
          value={lattice}
          min={3.0}
          max={6.5}
          step={0.05}
          onChange={setLattice}
          display={`${lattice.toFixed(2)} Å`}
        />
        <Slider
          label="A-site radius"
          value={Asize}
          min={0.1}
          max={0.5}
          step={0.01}
          onChange={setAsize}
        />
        <Slider
          label="B-site radius"
          value={Bsize}
          min={0.1}
          max={0.5}
          step={0.01}
          onChange={setBsize}
        />
        <Slider
          label="X-site radius"
          value={Xsize}
          min={0.05}
          max={0.4}
          step={0.01}
          onChange={setXsize}
        />
        <Slider
          label="Ambient light"
          value={ambient}
          min={0.1}
          max={1.5}
          step={0.05}
          onChange={setAmbient}
        />

        {/* Bond toggle */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-500 dark:text-slate-400">Show cell edges</span>
          <button
            onClick={() => setShowBonds((v) => !v)}
            className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
              showBonds ? "bg-violet-500" : "bg-slate-300 dark:bg-slate-700"
            }`}
            aria-pressed={showBonds}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
                showBonds ? "translate-x-4" : "translate-x-0.5"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-600 dark:text-slate-300">
        {[
          { color: "#f5d300", label: "A-site (e.g. Cs⁺)" },
          { color: "#9b59b6", label: "B-site (e.g. Pb²⁺)" },
          { color: "#4aa3df", label: "X-site (halide)" },
        ].map(({ color, label }) => (
          <div key={label} className="flex items-center gap-1.5">
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ backgroundColor: color }}
            />
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}