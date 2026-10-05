import { useEffect, useRef, useState } from 'react';
import type { Group, Material, Object3D, PerspectiveCamera, Scene, WebGLRenderer } from 'three';

const stages = [
  { short: 'Materials', kicker: 'Fundamentals', title: 'Structure sets the starting point', text: 'Halide perovskites anchor the solar work. Composition, processing, and interfaces decide how the material behaves.' },
  { short: 'Solar', kicker: 'Generation', title: 'A good film is only the start', text: 'The next question is what gets lost between a promising perovskite film and a solar module that lasts.' },
  { short: 'Batteries', kicker: 'Diagnostics', title: 'Follow what changes inside the cell', text: 'Graduate work uses impedance and physical checks to study interfaces, degradation, and which signals can be trusted.' },
  { short: 'Systems', kicker: 'Scale', title: 'The questions meet at the grid', text: 'Solar makes energy. Storage makes it available when it is needed. Better systems depend on understanding both.' },
] as const;

type StageIndex = 0 | 1 | 2 | 3;

function disposeObject(object: Object3D) {
  object.traverse(child => {
    const mesh = child as Object3D & { geometry?: { dispose: () => void }; material?: Material | Material[] };
    mesh.geometry?.dispose();
    if (Array.isArray(mesh.material)) mesh.material.forEach(material => material.dispose());
    else mesh.material?.dispose();
  });
}

export default function EnergyVision() {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const groupsRef = useRef<Group[]>([]);
  const cameraRef = useRef<PerspectiveCamera | null>(null);
  const [stage, setStage] = useState<StageIndex>(0);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const observer = new IntersectionObserver(entries => {
      if (entries[0]?.isIntersecting) { setShouldLoad(true); observer.disconnect(); }
    }, { rootMargin: '220px' });
    observer.observe(host);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad || !canvasRef.current || !hostRef.current) return;
    let stopped = false;
    let frame = 0;
    let renderer: WebGLRenderer | undefined;
    let scene: Scene | undefined;
    let resizeObserver: ResizeObserver | undefined;
    let controls: { update: () => void; dispose: () => void; enableDamping: boolean; autoRotate: boolean; autoRotateSpeed: number; enablePan: boolean; minDistance: number; maxDistance: number; target: { set: (x: number, y: number, z: number) => void } } | undefined;

    Promise.all([import('three'), import('three/addons/controls/OrbitControls.js')]).then(([THREE, controlsModule]) => {
      if (stopped || !canvasRef.current || !hostRef.current) return;
      const canvas = canvasRef.current;
      const host = hostRef.current;
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xe9e4d8);
      const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
      camera.position.set(7.4, 5.2, 9.4);
      camera.lookAt(0, 0, 0);
      cameraRef.current = camera;
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      controls = new controlsModule.OrbitControls(camera, canvas);
      controls.enableDamping = !reduceMotion;
      controls.autoRotate = false;
      controls.autoRotateSpeed = 0;
      controls.enablePan = false;
      controls.minDistance = 7;
      controls.maxDistance = 14;
      controls.target.set(0, 0, 0);
      scene.add(new THREE.HemisphereLight(0xfffbef, 0x776b5d, 2.8));
      const key = new THREE.DirectionalLight(0xfff2d2, 4.2);
      key.position.set(5, 8, 7); key.castShadow = true; scene.add(key);
      const rim = new THREE.DirectionalLight(0x9e6651, 1.8);
      rim.position.set(-6, 2, -4); scene.add(rim);

      const rust = 0x9d4e35, gold = 0xd1a24c, graphite = 0x364344, sage = 0x6b7d69, cream = 0xf3eddf;
      const sphere = (radius: number, color: number) => new THREE.Mesh(new THREE.SphereGeometry(radius, 24, 16), new THREE.MeshStandardMaterial({ color, roughness: 0.42 }));
      const box = (size: [number, number, number], color: number, metalness = 0.05) => {
        const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), new THREE.MeshStandardMaterial({ color, roughness: 0.55, metalness }));
        mesh.castShadow = true; mesh.receiveShadow = true; return mesh;
      };
      const makePerovskiteNetwork = () => {
        const group = new THREE.Group();
        const lattice = 1.55;
        const half = lattice / 2;
        const offsets = [
          new THREE.Vector3(half, 0, 0), new THREE.Vector3(-half, 0, 0),
          new THREE.Vector3(0, half, 0), new THREE.Vector3(0, -half, 0),
          new THREE.Vector3(0, 0, half), new THREE.Vector3(0, 0, -half),
        ];
        const faces = [0, 2, 4, 2, 1, 4, 1, 3, 4, 3, 0, 4, 2, 0, 5, 1, 2, 5, 3, 1, 5, 0, 3, 5];
        const iodideSites = new Map<string, InstanceType<typeof THREE.Vector3>>();
        const polyhedronMaterial = new THREE.MeshPhysicalMaterial({ color: rust, transparent: true, opacity: 0.36, roughness: 0.5, side: THREE.DoubleSide, depthWrite: false });
        const edgeMaterial = new THREE.LineBasicMaterial({ color: 0x7f3826, transparent: true, opacity: 0.76 });

        for (let ix = 0; ix < 2; ix += 1) for (let iy = 0; iy < 2; iy += 1) for (let iz = 0; iz < 2; iz += 1) {
          const center = new THREE.Vector3((ix - 0.5) * lattice, (iy - 0.5) * lattice, (iz - 0.5) * lattice);
          const lead = sphere(0.105, graphite); lead.position.copy(center); group.add(lead);
          const vertices = offsets.map(offset => center.clone().add(offset));
          const geometry = new THREE.BufferGeometry();
          geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices.flatMap(vertex => vertex.toArray()), 3));
          geometry.setIndex(faces);
          geometry.computeVertexNormals();
          group.add(new THREE.Mesh(geometry, polyhedronMaterial));
          group.add(new THREE.LineSegments(new THREE.EdgesGeometry(geometry), edgeMaterial));
          vertices.forEach(site => {
            iodideSites.set(site.toArray().map(value => value.toFixed(3)).join(':'), site);
          });
        }

        iodideSites.forEach(site => { const iodine = sphere(0.12, rust); iodine.position.copy(site); group.add(iodine); });
        [-lattice, 0, lattice].forEach(x => [-lattice, 0, lattice].forEach(y => [-lattice, 0, lattice].forEach(z => {
          const cesium = sphere(0.145, gold); cesium.position.set(x, y, z); group.add(cesium);
        })));
        group.add(new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(lattice * 2, lattice * 2, lattice * 2)), new THREE.LineBasicMaterial({ color: 0x756f66, transparent: true, opacity: 0.5 })));
        group.scale.setScalar(0.88);
        return group;
      };
      const makePanel = (scale = 1) => {
        const group = new THREE.Group();
        const panel = box([4.6, 0.16, 2.7], graphite, 0.15); panel.rotation.x = -0.2; group.add(panel);
        const cellMaterial = new THREE.MeshStandardMaterial({ color: 0x566f70, roughness: 0.36, metalness: 0.28 });
        for (let x = -4; x <= 4; x += 1) for (let z = -2; z <= 2; z += 1) { const cell = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.03, 0.42), cellMaterial); cell.position.set(x * 0.49, 0.1 + z * 0.02, z * 0.48); cell.rotation.x = -0.2; group.add(cell); }
        const stand = box([0.12, 1.5, 0.12], 0x7b7369, 0.35); stand.position.y = -0.85; group.add(stand); group.scale.setScalar(scale); return group;
      };
      const makeBatteryModule = () => {
        const group = new THREE.Group();
        group.add(new THREE.Mesh(new THREE.BoxGeometry(4.6, 2.6, 2.5), new THREE.MeshPhysicalMaterial({ color: 0xd9d4c8, transparent: true, opacity: 0.26, roughness: 0.45 })));
        for (let x = -3; x <= 3; x += 1) { const cell = box([0.48, 2.05, 1.95], x % 2 ? rust : sage, 0.12); cell.position.x = x * 0.58; group.add(cell); }
        const electrolyte = box([0.08, 2.22, 2.08], gold); group.add(electrolyte); return group;
      };
      const makeSystem = () => {
        const group = new THREE.Group();
        const panelA = makePanel(0.47); panelA.position.set(-2.1, 0.45, 0.2); panelA.rotation.y = 0.18;
        const panelB = makePanel(0.47); panelB.position.set(-2.1, 0.45, -1.75); panelB.rotation.y = 0.18; group.add(panelA, panelB);
        const container = box([3.7, 2.35, 2.25], cream, 0.25); container.position.set(2.2, 0.05, 0); group.add(container);
        for (let x = 0.8; x <= 3.6; x += 0.56) { const seam = box([0.025, 1.8, 2.27], x === 0.8 ? rust : 0xa8a197); seam.position.set(x, 0.05, 0); group.add(seam); }
        const cable = new THREE.CatmullRomCurve3([new THREE.Vector3(-0.2, -0.55, 0), new THREE.Vector3(0.2, -1.05, 0.15), new THREE.Vector3(0.55, -0.45, 0)]);
        group.add(new THREE.Mesh(new THREE.TubeGeometry(cable, 24, 0.045, 8, false), new THREE.MeshStandardMaterial({ color: rust, roughness: 0.5 })));
        return group;
      };

      const crystalStage = new THREE.Group();
      crystalStage.add(makePerovskiteNetwork());
      const solarStage = makePanel(0.92); solarStage.rotation.y = -0.18; solarStage.position.y = 0.25;
      const groups = [crystalStage, solarStage, makeBatteryModule(), makeSystem()];
      groups.forEach((group, index) => { group.visible = index === 0; scene?.add(group); });
      groupsRef.current = groups;
      const size = () => { if (!renderer) return; const width = host.clientWidth; const height = Math.max(280, Math.min(410, width * 0.72)); renderer.setSize(width, height, false); camera.aspect = width / height; camera.updateProjectionMatrix(); };
      resizeObserver = new ResizeObserver(size); resizeObserver.observe(host); size(); setReady(true);
      const render = () => { if (stopped || !renderer || !scene) return; controls?.update(); renderer.render(scene, camera); frame = requestAnimationFrame(render); };
      render();
    }).catch(() => setReady(false));

    return () => { stopped = true; cancelAnimationFrame(frame); resizeObserver?.disconnect(); controls?.dispose(); if (scene) disposeObject(scene); renderer?.dispose(); groupsRef.current = []; cameraRef.current = null; };
  }, [shouldLoad]);

  useEffect(() => {
    groupsRef.current.forEach((group, index) => { group.visible = index === stage; });
    const camera = cameraRef.current;
    if (camera) camera.position.set(stage === 3 ? 8.2 : 7.4, stage === 3 ? 5.7 : 5.2, stage === 3 ? 10.2 : 9.4);
  }, [stage]);

  const active = stages[stage];
  return <div className="energy-vision" ref={hostRef}>
    <div className={`energy-canvas-shell${ready ? ' is-ready' : ''}`}>
      <div className="energy-fallback" aria-hidden="true"><span className="fallback-crystal">ABX₃</span><span>→</span><span>Solar</span><span>+</span><span>Batteries</span><span>→</span><span>Systems</span></div>
      <canvas ref={canvasRef} className="energy-canvas" aria-hidden="true" />
      <div className={`energy-scene-labels stage-${stage}`} aria-hidden="true">
        {stage === 0 ? <><span className="species-cs">Cs · A site</span><span className="species-pb">Pb · B site</span><span className="species-i">I · X site</span></> : <span>{stage === 1 ? 'Thin film → solar module' : stage === 2 ? 'Cell interfaces → impedance → degradation' : 'Solar generation + battery storage'}</span>}
      </div>
      <p className="energy-drag" aria-hidden="true">Drag to rotate</p>
    </div>
    <div className="energy-controls" role="group" aria-label="Explore the research vision">
      {stages.map((item, index) => <button key={item.short} type="button" className={stage === index ? 'is-active' : ''} aria-pressed={stage === index} onClick={() => setStage(index as StageIndex)}><span>0{index + 1}</span>{item.short}</button>)}
    </div>
    <div className="energy-caption" aria-live="polite"><p className="energy-kicker">{active.kicker}</p><p className="energy-title">{active.title}</p><p>{active.text}</p></div>
  </div>;
}
