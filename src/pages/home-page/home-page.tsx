import { ChipContainer } from '@/entities/chip/ui';
import { Board } from '@/widgets/board/ui';
import { useStore } from 'effector-react';
import { $boardStore } from '@/shared/store/model/board/boardStore.ts';
import { createChips } from '@/shared/lib/createChips.ts';

const HomePage = () => {
  const board = useStore($boardStore);
  return (
    <div className='w-screen h-screen p-10'>
      <ChipContainer chips={createChips({ count: board.chipsCount })}>
        <Board>
          <div>Chat</div>
        </Board>
      </ChipContainer>
    </div>
  );
};

export default HomePage;
