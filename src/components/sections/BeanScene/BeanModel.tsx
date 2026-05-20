import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import type { MotionValue } from 'motion/react';
import * as THREE from 'three';

const MODEL_URL = `${import.meta.env.BASE_URL}models/Coffee_bean.glb`;

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

interface Props {
  scrollYProgress: MotionValue<number>;
}

export function BeanModel({ scrollYProgress }: Props) {
  const groupRef    = useRef<THREE.Group>(null);
  const smoothP     = useRef(0);
  const baseScale   = useRef(0);
  const initialized = useRef(false);
  const { scene }   = useGLTF(MODEL_URL);

  useFrame((state) => {
    if (!groupRef.current) return;

    // ── One-time auto-scale + center ─────────────────────────────────────────
    // Normalises any GLB to ~1.6 world units and centers it on the origin.
    if (!initialized.current) {
      const box    = new THREE.Box3().setFromObject(scene);
      const size   = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      baseScale.current = maxDim > 0 ? 1.6 / maxDim : 1;
      // Offset the primitive so its bounding-box center sits at the group origin.
      scene.position.sub(center);
      initialized.current = true;
    }

    // ── Smooth scroll progress ────────────────────────────────────────────────
    smoothP.current = lerp(smoothP.current, scrollYProgress.get(), 0.08);
    const p = smoothP.current;
    const t = state.clock.elapsedTime;

    // ── POSITION ─────────────────────────────────────────────────────────────
    // Bean stays on the central axis at all times.
    // No lateral drift, no mouse follow.
    // Tiny Y float (±0.08 units) driven by time for organic life.
    groupRef.current.position.x = 0;
    groupRef.current.position.y = Math.sin(t * 0.35) * 0.08;
    groupRef.current.position.z = 0;

    // ── SCALE ─────────────────────────────────────────────────────────────────
    // Ease-in (p²): visible shrink throughout, ends tiny at bottom.
    // At last BeanStage (p≈0.85): scale≈0.28×. At p=1: 0.02×.
    const scaleFactor = lerp(1.0, 0.02, p * p);
    groupRef.current.scale.setScalar(baseScale.current * scaleFactor);

    // ── ROTATION ─────────────────────────────────────────────────────────────
    // All rotation is driven purely by scroll progress — no auto-spin.
    // smoothP already provides organic lag, so transitions feel fluid.
    groupRef.current.rotation.y = p * Math.PI * 3;
    groupRef.current.rotation.x = p * 0.4;
    groupRef.current.rotation.z = 0;
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload(MODEL_URL);
