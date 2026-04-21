interface BeanStageProps {
  height?: string;
}

// Transparent spacer — shows the fixed canvas (bean + warm background) through it.
// No background, no content. The 3D scene does all the work here.
export function BeanStage({ height = '100vh' }: BeanStageProps) {
  return <div style={{ height, background: 'transparent' }} aria-hidden="true" />;
}
