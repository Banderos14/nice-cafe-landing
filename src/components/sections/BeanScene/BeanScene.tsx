import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useScroll } from 'motion/react';
import { BeanModel } from './BeanModel';

export function BeanScene() {
  // Track full-page scroll (no target = window scroll)
  const { scrollYProgress } = useScroll();

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 42 }}
        gl={{ antialias: true, alpha: false }}
        style={{ width: '100%', height: '100%' }}
      >
        {/* Exact site beige — seamless transition into About / Gallery / Location */}
        <color attach="background" args={['#F5F1ED']} />

        {/* Generous lighting so any GLB material is visible */}
        <ambientLight intensity={2.0} />
        <directionalLight position={[5, 8, 4]} intensity={3.5} color="#FFF5E0" />
        <directionalLight position={[-4, 2, -3]} intensity={1.2} color="#C8D8E8" />
        <pointLight position={[2, -3, 3]} intensity={2.0} color="#A0724A" />
        <pointLight position={[-2, 4, 2]} intensity={0.8} color="#F5ECD8" />

        <Suspense fallback={null}>
          {/*
            Future: add CupModel here — same scrollYProgress interface
            <CupModel scrollYProgress={scrollYProgress} />
          */}
          <BeanModel scrollYProgress={scrollYProgress} />
        </Suspense>
      </Canvas>
    </div>
  );
}
