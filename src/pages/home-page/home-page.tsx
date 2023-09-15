import { ResizeDetector } from '@/features/window-resize-detector/lib';
import { MonopolyBoard } from '@/widgets/board/ui';

const HomePage = () => {
  const move = () => {
    const result = Math.random() * (12 - 2) + 2;
  };
  return (
    <div className=''>
      <ResizeDetector />
      <MonopolyBoard>
        <div>Chat</div>
      </MonopolyBoard>
      <button onClick={move}>Throw cubes</button>
    </div>
  );
};

export default HomePage;
