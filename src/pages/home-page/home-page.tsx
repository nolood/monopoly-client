import { ChipContainer } from '@/entities/chip/ui';
import { useStore } from 'effector-react';
import { $boardStore } from '@/shared/store/model/board/boardStore.ts';
import { createChips } from '@/shared/lib/createChips.ts';
import { ResizeDetector } from '@/features/window-resize-detector/lib';
import { MonopolyBoard } from '@/widgets/board/ui';

const HomePage = () => {
  const board = useStore($boardStore);
  return (
    <div className=''>
      <ResizeDetector />
      <ChipContainer chips={createChips({ count: board.chipsCount })}>
        <MonopolyBoard>
          <div>Chat</div>
        </MonopolyBoard>
      </ChipContainer>
    </div>
  );
};

export default HomePage;
