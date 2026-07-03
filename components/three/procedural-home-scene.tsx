"use client";

import { Html, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

import { ExplorerHotspotPanel } from "@/components/three/explorer-fallback";
import type { Product, ProductHotspot } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

type CameraPreset = {
  position: [number, number, number];
  target: [number, number, number];
};

const cameraPresets: CameraPreset[] = [
  { position: [7.5, 4.2, 8.2], target: [0, 1, 0] },
  { position: [2.4, 2.6, 4.4], target: [-0.5, 1, 0] },
  { position: [-1.2, 2.15, 3.5], target: [-1.3, 1, 0] },
  { position: [-3.8, 2.3, 2.7], target: [-2.6, 1, -0.15] },
  { position: [3.5, 2.25, 2.5], target: [2.3, 0.95, -0.2] },
  { position: [6.6, 3.6, 5.7], target: [0.2, 1.25, 0] },
];

const hotspotPoints: [number, number, number][] = [
  [0, 2.45, -1.05],
  [-0.8, 1.35, 0.55],
  [-2.25, 1.25, 0.55],
  [1.45, 1.3, 0.42],
  [2.95, 1.05, 0.42],
  [0.25, 2.95, 0],
];

function CameraRig({ activeIndex }: { activeIndex: number }) {
  const { camera } = useThree();
  const controlsRef = useRef<React.ElementRef<typeof OrbitControls>>(null);
  const target = useMemo(() => new THREE.Vector3(), []);

  useFrame(() => {
    const preset = cameraPresets[activeIndex] ?? cameraPresets[0];
    camera.position.lerp(new THREE.Vector3(...preset.position), 0.045);
    target.lerp(new THREE.Vector3(...preset.target), 0.055);
    controlsRef.current?.target.copy(target);
    controlsRef.current?.update();
  });

  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={false}
      enableDamping
      dampingFactor={0.08}
      minDistance={4}
      maxDistance={12}
      maxPolarAngle={Math.PI / 2.08}
    />
  );
}

function GroundPlane() {
  return (
    <group>
      <mesh rotation-x={-Math.PI / 2} position={[0, -0.04, 0]}>
        <planeGeometry args={[18, 14, 1, 1]} />
        <meshStandardMaterial color="#748064" roughness={0.95} />
      </mesh>
      <mesh rotation-x={-Math.PI / 2} position={[0, -0.02, 0]}>
        <ringGeometry args={[4.6, 5.2, 96]} />
        <meshStandardMaterial
          color="#d8d0c3"
          roughness={0.9}
          transparent
          opacity={0.42}
        />
      </mesh>
    </group>
  );
}

function HomeModel() {
  return (
    <group position={[0, 0, 0]}>
      <mesh position={[0, 1.05, 0]}>
        <boxGeometry args={[5.7, 2.1, 2.7]} />
        <meshStandardMaterial color="#d8d0c3" roughness={0.82} />
      </mesh>

      <mesh position={[0, 2.28, 0]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[4.15, 4.15, 2.86]} />
        <meshStandardMaterial color="#202421" roughness={0.78} />
      </mesh>

      <mesh position={[0, 2.08, 0]}>
        <boxGeometry args={[6.05, 0.24, 3.05]} />
        <meshStandardMaterial color="#17382d" roughness={0.72} />
      </mesh>

      <mesh position={[0, 0.82, 1.39]}>
        <boxGeometry args={[5.85, 1.72, 0.08]} />
        <meshStandardMaterial color="#17382d" roughness={0.7} />
      </mesh>

      <mesh position={[-1.95, 1.05, 1.46]}>
        <boxGeometry args={[1.45, 1.2, 0.08]} />
        <meshStandardMaterial
          color="#fffaf0"
          roughness={0.2}
          metalness={0.05}
          emissive="#fff0c2"
          emissiveIntensity={0.14}
        />
      </mesh>

      <mesh position={[0.15, 1.05, 1.46]}>
        <boxGeometry args={[1.9, 1.2, 0.08]} />
        <meshStandardMaterial
          color="#fffaf0"
          roughness={0.2}
          emissive="#fff0c2"
          emissiveIntensity={0.12}
        />
      </mesh>

      <mesh position={[2.35, 0.92, 1.47]}>
        <boxGeometry args={[0.95, 1.62, 0.09]} />
        <meshStandardMaterial color="#5a3f29" roughness={0.62} />
      </mesh>

      <mesh position={[-1.65, 0.28, 1.58]}>
        <boxGeometry args={[1.65, 0.18, 1.12]} />
        <meshStandardMaterial color="#b9925a" roughness={0.65} />
      </mesh>

      <mesh position={[0.35, 0.34, 0.45]}>
        <boxGeometry args={[1.55, 0.36, 0.82]} />
        <meshStandardMaterial color="#748064" roughness={0.86} />
      </mesh>

      <mesh position={[-2.02, 0.46, 0.3]}>
        <boxGeometry args={[1.28, 0.92, 0.36]} />
        <meshStandardMaterial color="#d2b47c" roughness={0.58} />
      </mesh>

      <mesh position={[1.5, 0.38, -0.2]}>
        <boxGeometry args={[1.45, 0.35, 1.05]} />
        <meshStandardMaterial color="#f6f0e6" roughness={0.78} />
      </mesh>

      <mesh position={[2.75, 0.52, -0.25]}>
        <boxGeometry args={[0.78, 0.96, 0.78]} />
        <meshStandardMaterial color="#d8d0c3" roughness={0.5} />
      </mesh>
    </group>
  );
}

function HotspotMarker({
  hotspot,
  index,
  active,
  onSelect,
}: {
  hotspot: ProductHotspot;
  index: number;
  active: boolean;
  onSelect: (index: number) => void;
}) {
  const point = hotspotPoints[index] ?? hotspotPoints[0];

  return (
    <Html position={point} center distanceFactor={7}>
      <button
        aria-label={`View ${hotspot.title}`}
        className={cn(
          "flex size-9 items-center justify-center rounded-full border border-ivory/80 bg-forest-950/82 text-xs font-bold text-ivory shadow-xl shadow-slate-950/25 backdrop-blur transition hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass-300",
          active && "bg-brass-400 text-slate-950",
        )}
        onClick={() => onSelect(index)}
        type="button"
      >
        {index + 1}
      </button>
    </Html>
  );
}

function SceneContent({
  product,
  activeIndex,
  onSelect,
}: {
  product: Product;
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <>
      <color attach="background" args={["#0c211b"]} />
      <fog attach="fog" args={["#0c211b", 10, 18]} />
      <ambientLight intensity={0.82} />
      <directionalLight position={[5, 7, 4]} intensity={2.3} />
      <pointLight position={[-3, 2.5, 3]} intensity={1.2} color="#d2b47c" />
      <GroundPlane />
      <HomeModel />
      {product.hotspots.map((hotspot, index) => (
        <HotspotMarker
          key={hotspot.title}
          hotspot={hotspot}
          index={index}
          active={activeIndex === index}
          onSelect={onSelect}
        />
      ))}
      <CameraRig activeIndex={activeIndex} />
    </>
  );
}

export function ProceduralHomeScene({
  product,
  activeIndex,
  onSelect,
  fullscreen = false,
}: {
  product: Product;
  activeIndex: number;
  onSelect: (index: number) => void;
  fullscreen?: boolean;
}) {
  const activeHotspot = product.hotspots[activeIndex] ?? product.hotspots[0];

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-forest-950",
        fullscreen ? "min-h-[78vh]" : "min-h-[420px] md:min-h-[520px]",
      )}
      data-three-explorer="true"
    >
      <Canvas
        className="!absolute inset-0"
        camera={{ position: [7.5, 4.2, 8.2], fov: 42 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <SceneContent
          product={product}
          activeIndex={activeIndex}
          onSelect={onSelect}
        />
      </Canvas>
      <div className="absolute left-4 top-4 rounded-full border border-ivory/20 bg-forest-950/80 px-3 py-1 text-xs font-semibold text-ivory/82 backdrop-blur">
        Interactive 3D scene
      </div>
      <ExplorerHotspotPanel hotspot={activeHotspot} compact />
    </div>
  );
}
