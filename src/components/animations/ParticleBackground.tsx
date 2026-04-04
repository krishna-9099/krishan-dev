import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface GridNetworkProps {
  mousePosition: { x: number; y: number };
}

// Technical blueprint grid network
function GridNetwork({ mousePosition }: GridNetworkProps) {
  const linesRef = useRef<THREE.LineSegments>(null);
  const nodesRef = useRef<THREE.Points>(null);

  // Create grid nodes at intersections
  const { nodePositions, linePositions } = useMemo(() => {
    const gridSize = 8;
    const spacing = 2.5;
    const nodes: number[] = [];
    const lines: number[] = [];

    // Create grid nodes
    for (let x = -gridSize; x <= gridSize; x++) {
      for (let y = -gridSize; y <= gridSize; y++) {
        // Add some randomness for organic feel
        const offsetX = (Math.random() - 0.5) * 0.3;
        const offsetY = (Math.random() - 0.5) * 0.3;

        nodes.push(
          x * spacing + offsetX,
          y * spacing + offsetY,
          (Math.random() - 0.5) * 2
        );
      }
    }

    // Create horizontal and vertical lines
    for (let i = 0; i < nodes.length / 3; i++) {
      const x = nodes[i * 3];
      const y = nodes[i * 3 + 1];
      const z = nodes[i * 3 + 2];

      // Connect to nearby nodes (create network effect)
      for (let j = i + 1; j < nodes.length / 3; j++) {
        const x2 = nodes[j * 3];
        const y2 = nodes[j * 3 + 1];
        const z2 = nodes[j * 3 + 2];

        const distance = Math.sqrt(
          Math.pow(x2 - x, 2) + Math.pow(y2 - y, 2) + Math.pow(z2 - z, 2)
        );

        // Only connect nearby nodes
        if (distance < spacing * 1.5 && Math.random() > 0.6) {
          lines.push(x, y, z, x2, y2, z2);
        }
      }
    }

    return {
      nodePositions: new Float32Array(nodes),
      linePositions: new Float32Array(lines),
    };
  }, []);

  useFrame((state) => {
    if (!linesRef.current || !nodesRef.current) return;

    const time = state.clock.getElapsedTime();

    // Very slow rotation
    linesRef.current.rotation.z = time * 0.01;
    nodesRef.current.rotation.z = time * 0.01;

    // Subtle mouse influence
    if (linesRef.current) {
      linesRef.current.rotation.x = mousePosition.y * 0.05;
      linesRef.current.rotation.y = mousePosition.x * 0.05;
    }
    if (nodesRef.current) {
      nodesRef.current.rotation.x = mousePosition.y * 0.05;
      nodesRef.current.rotation.y = mousePosition.x * 0.05;
    }
  });

  return (
    <>
      {/* Network lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#22c55e"
          transparent
          opacity={0.08}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* Grid nodes */}
      <points ref={nodesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={nodePositions.length / 3}
            array={nodePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          color="#22c55e"
          transparent
          opacity={0.4}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
  );
}

// Subtle connecting lines that pulse
function PulseLines() {
  const linesRef = useRef<THREE.LineSegments>(null);

  const positions = useMemo(() => {
    const lines: number[] = [];
    const numLines = 20;

    for (let i = 0; i < numLines; i++) {
      const startX = (Math.random() - 0.5) * 20;
      const startY = (Math.random() - 0.5) * 15;
      const startZ = (Math.random() - 0.5) * 5;

      const endX = startX + (Math.random() - 0.5) * 8;
      const endY = startY + (Math.random() - 0.5) * 8;
      const endZ = startZ + (Math.random() - 0.5) * 2;

      lines.push(startX, startY, startZ, endX, endY, endZ);
    }

    return new Float32Array(lines);
  }, []);

  useFrame((state) => {
    if (!linesRef.current) return;
    const time = state.clock.getElapsedTime();

    // Subtle pulsing opacity
    const material = linesRef.current.material as THREE.LineBasicMaterial;
    material.opacity = 0.03 + Math.sin(time * 0.5) * 0.02;
  });

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial
        color="#22c55e"
        transparent
        opacity={0.05}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  );
}

export default function ParticleBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Don't render 3D canvas if reduced motion is preferred
  if (isReducedMotion) {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Static blueprint grid fallback */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(rgba(34, 197, 94, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 20% 30%, rgba(34, 197, 94, 0.05) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 70%, rgba(34, 197, 94, 0.03) 0%, transparent 50%)
            `,
          }}
        />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <GridNetwork mousePosition={mousePosition} />
        <PulseLines />
      </Canvas>

      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 30% 20%, rgba(34, 197, 94, 0.03) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 80%, rgba(34, 197, 94, 0.02) 0%, transparent 50%)
          `,
        }}
      />
    </div>
  );
}
