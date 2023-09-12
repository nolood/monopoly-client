import { rightBoard, upperBoard } from '@/shared/lib/mockBoardData.ts';
import { BoardCard } from '@/entities/board-card/ui';

const Board = () => {
  return (
    <div className='relative w-full h-full'>
      <div className='w-full absolute top-0 left-0 h-[100px] flex w-full'>
        {upperBoard.map((item) => (
          <BoardCard
            key={item.id}
            title={item.title}
            price={item.price}
            group={item.group}
            variant={item.variant}
          />
        ))}
      </div>
      <div className='absolute top-[100px] right-0 flex flex-col-reverse max-w-[100px]'>
        {rightBoard.map((item) => (
          <BoardCard
            key={item.id}
            title={item.title}
            price={item.price}
            group={item.group}
            variant={item.variant}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
