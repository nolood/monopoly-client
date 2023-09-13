import { Board } from '@/widgets/board/ui';
import { Chip } from '@/entities/chip/ui';

const HomePage = () => {
  return (
    <div className='w-screen h-screen p-10'>
      <Chip />
      <Board>
        <div>chat</div>
      </Board>
    </div>
  );
};

export default HomePage;
