import { ReactNode, useRef } from 'react';
import { Chip } from '@/entities/chip/ui';
import { useAnimation } from 'framer-motion';
import { useStore } from 'effector-react';
import { $boardSize } from '@/shared/store/model';

const ChipContainer = ({
  children,
  chips,
}: {
  children: ReactNode;
  chips: Array<{ id: number }>;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const boardSize = useStore($boardSize);

  const anim = useAnimation();

  const onCompleteAnim = () => {
    if (boardSize.verticalSize.width && ref.current) {
      anim.set({
        translateX: 0,
        x: ref.current?.getBoundingClientRect().left - ref.current?.getBoundingClientRect().width,
      });
    }
  };

  const handleAnimate = () => {
    if (boardSize.verticalSize.width) {
      anim.start({
        translateX: boardSize.verticalSize.width * 2,
        transition: {
          duration: 1,
          type: 'tween',
        },
      });
    }
  };

  return (
    <div className='w-full h-full relative' ref={containerRef}>
      {chips.map(({ id }) => (
        <Chip anim={anim} onCompleteAnim={onCompleteAnim} ref={ref} key={id} />
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
