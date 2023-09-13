import { ChipContainer } from '@/entities/chip/ui';
import { Board } from '@/widgets/board/ui';

const HomePage = () => {
  return (
    <div className='w-screen h-screen p-10'>
      <ChipContainer chips={[{ id: 1 }]}>
        <Board>
          <div>Chat</div>
        </Board>
      </ChipContainer>
    </div>
  );
};

export default HomePage;
