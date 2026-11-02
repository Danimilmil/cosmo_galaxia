import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Html } from "@react-three/drei";
import * as THREE from "three";
import { PLANETS, SUN_DATA, type PlanetData } from "@/data/planets";

function Sun() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta * 0.05;
    if (glowRef.current) {
      const s = 1 + Math.sin(performance.now() * 0.001) * 0.03;
      glowRef.current.scale.set(s, s, s);
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <sphereGeometry args={[SUN_DATA.radius, 64, 64]} />
        <meshBasicMaterial color="#FDB813" />
      </mesh>
      <mesh ref={glowRef} scale={1.15}>
        <sphereGeometry args={[SUN_DATA.radius, 32, 32]} />
        <meshBasicMaterial
          color="#FF8C00"
          transparent
          opacity={0.25}
          side={THREE.BackSide}
        />
      </mesh>
      <pointLight
        position={[0, 0, 0]}
        intensity={3}
        distance={200}
        decay={0.5}
        color="#FFF5E6"
      />
      <Html position={[0, SUN_DATA.radius + 1.2, 0]} center distanceFactor={20}>
        <div className="pointer-events-none select-none text-amber-300/90 text-xs font-semibold tracking-widest uppercase whitespace-nowrap">
          Sol
        </div>
      </Html>
    </group>
  );
}

function OrbitLine({ radius }: { radius: number }) {
  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= 128; i++) {
      const angle = (i / 128) * Math.PI * 2;
      pts.push(
        new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius)
      );
    }
    return pts;
  }, [radius]);

  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry().setFromPoints(points);
    return g;
  }, [points]);

  return (
    <line>
      <primitive object={geometry} attach="geometry" />
      <lineBasicMaterial color="#ffffff" transparent opacity={0.08} />
    </line>
  );
}

function Planet({
  planet,
  onSelect,
  isSelected,
}: {
  planet: PlanetData;
  onSelect: (p: PlanetData) => void;
  isSelected: boolean;
}) {
  const orbitRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((_, delta) => {
    if (orbitRef.current) {
      orbitRef.current.rotation.y += planet.orbitSpeed * delta * 10;
    }
    if (meshRef.current) {
      meshRef.current.rotation.y += planet.rotationSpeed * delta * 20;
    }
  });

  return (
    <>
      <OrbitLine radius={planet.distance} />
      <group ref={orbitRef}>
        <group
          position={[planet.distance, 0, 0]}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(planet);
          }}
          onPointerOver={(e) => {
            e.stopPropagation();
            setHovered(true);
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            setHovered(false);
            document.body.style.cursor = "default";
          }}
        >
          <mesh ref={meshRef}>
            <sphereGeometry args={[planet.radius, 48, 48]} />
            <meshStandardMaterial
              color={planet.color}
              emissive={planet.emissive}
              emissiveIntensity={hovered || isSelected ? 0.6 : 0.25}
              roughness={0.7}
              metalness={0.1}
            />
          </mesh>

          {planet.hasRings && planet.ringInner && planet.ringOuter && (
            <mesh rotation={[Math.PI / 2.2, 0, 0]}>
              <ringGeometry
                args={[planet.ringInner, planet.ringOuter, 64]}
              />
              <meshStandardMaterial
                color={planet.ringColor ?? "#c4a86a"}
                side={THREE.DoubleSide}
                transparent
                opacity={0.7}
                roughness={0.8}
              />
            </mesh>
          )}

          {(hovered || isSelected) && (
            <mesh>
              <sphereGeometry args={[planet.radius * 1.4, 32, 32]} />
              <meshBasicMaterial
                color={planet.color}
                transparent
                opacity={0.15}
                side={THREE.BackSide}
              />
            </mesh>
          )}

          <Html
            position={[0, planet.radius + 0.5, 0]}
            center
            distanceFactor={15}
          >
            <div
              className={`pointer-events-none select-none whitespace-nowrap text-[10px] font-semibold tracking-widest uppercase transition-opacity ${
                hovered || isSelected
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-60"
              }`}
              style={{ color: planet.color }}
            >
              {planet.name}
            </div>
          </Html>
        </group>
      </group>
    </>
  );
}

export default function SolarSystem3D({
  selectedPlanet,
  onSelectPlanet,
}: {
  selectedPlanet: PlanetData | null;
  onSelectPlanet: (p: PlanetData) => void;
}) {
  return (
    <Canvas
      camera={{ position: [0, 30, 55], fov: 50 }}
      className="!absolute inset-0"
      dpr={[1, 2]}
    >
      <color attach="background" args={["#01010a"]} />
      <ambientLight intensity={0.08} />
      <Sun />
      <Stars
        radius={300}
        depth={80}
        count={6000}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />
      {PLANETS.map((p) => (
        <Planet
          key={p.id}
          planet={p}
          onSelect={onSelectPlanet}
          isSelected={selectedPlanet?.id === p.id}
        />
      ))}
      <OrbitControls
        enablePan={false}
        minDistance={15}
        maxDistance={120}
        autoRotate
        autoRotateSpeed={0.3}
        enableZoom
      />
    </Canvas>
  );
}
