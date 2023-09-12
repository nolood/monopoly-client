import { dataBoard } from '@/shared/lib/mockBoardData.ts';
import { BoardCard } from '@/entities/board-card/ui';

const Board = () => {
  return (
    <div className='flex gap-10'>
      {dataBoard.map(({ id, title, price, group, variant }) => (
        <BoardCard key={id} title={title} price={price} group={group} variant={variant} />
      ))}
    </div>
  );
};

export default Board;
