// Importing this module triggers @react-three/fiber's global JSX augmentation
// (declare global { namespace JSX { interface IntrinsicElements extends ThreeElements } })
import '@react-three/fiber';
import type { ThreeElements } from '@react-three/fiber';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
}

declare module 'react/jsx-runtime' {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
}

export {};
