import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

function GalaxyArm({
  count,
  radius,
  angleOffset,
  height,
  color,
}: {
  count: number;
  radius: number;
  angleOffset: number;
  height: number;
  color: string;
}) {
  const pointsRef = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = Math.pow(Math.random(), 0.5) * radius;
      const angle =
        angleOffset + r * 0.5 + (Math.random() - 0.5) * 0.3;
      const spread = (Math.random() - 0.5) * 1.5;
      arr[i * 3] = Math.cos(angle) * r + spread;
      arr[i * 3 + 1] = (Math.random() - 0.5) * height * (1 - r / radius);
      arr[i * 3 + 2] = Math.sin(angle) * r + spread;
    }
    return arr;
  }, [count, radius, angleOffset, height]);

  useFrame((_, delta) => {
    if (pointsRef.current) pointsRef.current.rotation.y += delta * 0.03;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={0.08}
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function GalaxyCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta * 0.02;
  });
  return (
    <mesh ref={meshRef} rotation={[0.2, 0, 0]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshBasicMaterial color="#FFD700" transparent opacity={0.3} />
    </mesh>
  );
}

function GalaxyScene() {
  const arms = 4;
  const armCount = 2500;

  return (
    <>
      <color attach="background" args={["#000005"]} />
      <ambientLight intensity={0.1} />
      <GalaxyCore />
      {Array.from({ length: arms }).map((_, i) => (
        <GalaxyArm
          key={i}
          count={armCount}
          radius={8}
          angleOffset={(i / arms) * Math.PI * 2}
          height={1.2}
          color={i % 2 === 0 ? "#6ba6ff" : "#b478ff"}
        />
      ))}
      <Stars radius={50} depth={30} count={1500} factor={2} fade speed={1} />
    </>
  );
}

export default function Galaxy3D() {
  return (
    <Canvas
      camera={{ position: [0, 6, 12], fov: 50 }}
      className="!absolute inset-0"
      dpr={[1, 2]}
    >
      <GalaxyScene />
      <OrbitControls
        enablePan={false}
        minDistance={8}
        maxDistance={30}
        autoRotate
        autoRotateSpeed={0.4}
      />
    </Canvas>
  );
}
