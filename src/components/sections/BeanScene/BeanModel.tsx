import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import type { MotionValue } from 'motion/react';
import * as THREE from 'three';

const MODEL_URL = '/models/Coffee_bean.glb';

// Approximate page layout (in scroll-progress units p = 0…1):
//
//   Hero          p = 0.00 → 0.10
//   BeanStage 1   p = 0.10 → 0.21   midpoint ≈ 0.155
//   About         p = 0.21 → 0.28
//   BeanStage 2   p = 0.28 → 0.37   midpoint ≈ 0.325
//   Menu          p = 0.37 → 0.44
//   BeanStage 3   p = 0.44 → 0.53   midpoint ≈ 0.485
//   Gallery       p = 0.53 → 0.62
//   BeanStage 4   p = 0.62 → 0.71   midpoint ≈ 0.665
//   Experience    p = 0.71 → 0.78
//   BeanStage 5   p = 0.78 → 0.87   midpoint ≈ 0.825
//   Location      p = 0.87 → 0.94
//
// cos² with period 0.165 and first peak at 0.155 gives peaks at:
//   0.155 / 0.32 / 0.485 / 0.65 / 0.815 — closely aligned.
//
const STAGE_FIRST_MID = 0.155; // p at first BeanStage midpoint
const STAGE_PERIOD    = 0.165; // distance between midpoints

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

  useFrame((state, delta) => {
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
    // Lerp factor 0.032 ≈ pleasant organic lag (~30 frames to settle).
    smoothP.current = lerp(smoothP.current, scrollYProgress.get(), 0.032);
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
    // cos² wave with peaks aligned with each BeanStage midpoint:
    //   min 0.90 × base  (between stages — never disappears)
    //   max 1.05 × base  (at stage centre — slightly larger)
    //
    // The 0.90 floor guarantees the bean is always a presence,
    // even when the math phase drifts slightly due to different screen sizes.
    const phase       = Math.cos(Math.PI * (p - STAGE_FIRST_MID) / STAGE_PERIOD);
    const scaleFactor = 0.90 + 0.15 * phase * phase;
    groupRef.current.scale.setScalar(baseScale.current * scaleFactor);

    // ── ROTATION ─────────────────────────────────────────────────────────────
    // Y: continuous slow spin — frame-rate independent, always dignified.
    groupRef.current.rotation.y += delta * 0.18;

    // X / Z: time-driven organic tilt — no sharp changes tied to scroll position,
    // just a gentle, living presence.
    groupRef.current.rotation.x = Math.sin(t * 0.25) * 0.06;
    groupRef.current.rotation.z = Math.cos(t * 0.20) * 0.04;
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload(MODEL_URL);
