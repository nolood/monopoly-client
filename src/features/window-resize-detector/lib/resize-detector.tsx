import { onResize } from '@/features/window-resize-detector/model/resize/resize-events.ts';
import { useEffect } from 'react';

const ResizeDetector = () => {
  const resizeHandler = () => {
    onResize();
  };
  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);
  return null;
};

export default ResizeDetector;
