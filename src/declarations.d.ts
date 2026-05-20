/// <reference types="vite/client" />
/// <reference types="@react-three/fiber" />

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.glb' {
  const src: string;
  export default src;
}

declare module '*.glb?url' {
  const src: string;
  export default src;
}
