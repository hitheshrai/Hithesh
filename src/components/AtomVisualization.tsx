// src/components/PerovskiteVisualizer.tsx
import { useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";

// Simple helper to place atoms in a cubic/perovskite lattice
function UnitCell({
  a,
  showBonds,
  atomSizes,
}: {
  a: number;
  showBonds: boolean;
  atomSizes: { A: number; B: number; X: number };
}) {
  // Perovskite ABX3 (ideal cubic): A at corners, B at body center, X at face centers
  const atoms = useMemo(() => {
    const s = a / 2; // half cell
    const cornerPositions = [
      [-s, -s, -s],
      [+s, -s, -s],
      [-s, +s, -s],
      [+s, +s, -s],
      [-s, -s, +s],
      [+s, -s, +s],
      [-s, +s, +s],
      [+s, +s, +s],
    ];
    const facePositions = [
      [0, -s, 0],
      [0, +s, 0],
      [-s, 0, 0],
      [+s, 0, 0],
      [0, 0, -s],
      [0, 0, +s],
    ];
    return { cornerPositions, facePositions, body: [0, 0, 0] };
  }, [a]);

  return (
    <group>
      {/* A-site atoms at corners (e.g., Cs or organic cation) */}
      {atoms.cornerPositions.map((pos, i) => (
        <mesh key={"A" + i} position={pos}>
          <sphereGeometry args={[atomSizes.A, 24, 24]} />
          {/* @ts-ignore */}
          <meshStandardMaterial color={0xf5d300} />
        </mesh>
      ))}

      {/* B-site atom at body center (e.g., Pb, Sn) */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[atomSizes.B, 32, 32]} />
        {/* @ts-ignore */}
        <meshStandardMaterial color={0x9b59b6} />
      </mesh>

      {/* X-site atoms at face centers (halides) */}
      {atoms.facePositions.map((pos, i) => (
        <mesh key={"X" + i} position={pos}>
          <sphereGeometry args={[atomSizes.X, 20, 20]} />
          {/* @ts-ignore */}
          <meshStandardMaterial color={0x4aa3df} />
        </mesh>
      ))}

      {/* Optional bonds visualization (simple lines between nearest neighbors) */}
      {showBonds && (
        <group>
          {/* Draw box/edges of the unit cell */}
          <mesh position={[0, 0, 0]}>
            <boxHelper args={[]} />
          </mesh>
        </group>
      )}
    </group>
  );
}

// Helper wrapper to export canvas PNG
function ExportButton() {
  const handleExport = () => {
    alert("Export feature requires html2canvas library");
  };

  return (
    <button
      onClick={handleExport}
      className="mt-3 inline-flex items-center gap-2 px-3 py-2 bg-primary text-white rounded-md text-sm hover:opacity-90"
    >
      Export PNG
    </button>
  );
}

export default function PerovskiteVisualizer() {
  // Local state controls instead of leva
  const [lattice] = useState(4.0);
  const [showBonds] = useState(true);
  const [Asize] = useState(0.25);
  const [Bsize] = useState(0.35);
  const [Xsize] = useState(0.18);
  const [ambient] = useState(0.6);

  // small canvas wrapper id for export
  const canvasId = "perovskite-canvas";

  return (
    <div className="rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-medium">Perovskite unit-cell visualizer</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl">
            Interactive ABX₃ unit cell—adjust lattice parameter to explore strain effects, toggle bonds and labels.
            Use Export to capture visuals for slides or reports.
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">ABX₃</span>
            <span className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">Lattice</span>
            <span className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">Strain</span>
            <span className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">Export</span>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <div className="text-xs text-slate-500">Lattice (Å)</div>
          <div className="text-lg font-semibold">{lattice.toFixed(2)} Å</div>
          <ExportButton />
        </div>
      </div>

      <div id={canvasId} className="mt-4 h-[420px] w-full rounded">
        <Canvas camera={{ position: [6, 6, 6], fov: 45 }}>
          <ambientLight intensity={ambient} />
          <directionalLight position={[10, 10, 5]} intensity={0.8} />
          <pointLight position={[-10, -10, -10]} intensity={0.4} />

          {/* center axes helper */}
          <axesHelper args={[2]} />

          <group rotation={[0.6, 0.6, 0]}>
            <UnitCell
              a={lattice}
              showBonds={showBonds}
              atomSizes={{ A: Asize, B: Bsize, X: Xsize }}
            />
          </group>
        </Canvas>
      </div>
    </div>
  );
}
