import { ReactNode, useRef } from 'react';
import { Chip } from '@/entities/chip/ui';
import { useAnimation } from 'framer-motion';

const ChipContainer = ({
  children,
  chips,
}: {
  children: ReactNode;
  chips: Array<{ id: number }>;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const anim = useAnimation();

  const handleAnimate = () => {
    anim.start({
      translateX: 820,
      transition: {
        duration: 1,
        type: 'tween',
      },
    });
  };

  return (
    <div className='w-full h-full' ref={containerRef}>
      {chips.map(({ id }) => (
        <Chip anim={anim} ref={ref} key={id} />
      ))}
      {children}
      <button
        onClick={handleAnimate}
        className='bg-slate-950 text-white px-12 py-2 mt-10 active:bg-slate-800'
      >
        Go
      </button>
    </div>
  );
};

export default ChipContainer;
