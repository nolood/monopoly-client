import { MonopolyCell } from '@/features/monopoly-cell/ui';
import styles from './monopoly-board.module.css';
import { ReactNode, useEffect, useState } from 'react';
import { Board } from '@/widgets/board/model/board.ts';
import { refactorBoardData } from '@/widgets/board/lib/refactorBoardData.ts';

const MonopolyBoard = ({ children }: { children: ReactNode }) => {
  const [board, setBoard] = useState<Board>(new Board());

  const restart = () => {
    const newBoard = new Board();
    newBoard.initCells();
    setBoard(newBoard);
  };

  useEffect(() => {
    restart();
  }, []);

  console.log(board);
  const refactorBoard = refactorBoardData(board.cells);
  return (
    <div className='max-w-[1500px] min-w-[1500px] w-[1500px]'>
      <div className='flex flex-col'>
        <div className={styles.upper}>
          {refactorBoard.upper.map((item) => (
            <MonopolyCell key={item.id} item={item} />
          ))}
        </div>
        <div className='flex justify-between'>
          <div>
            {refactorBoard.left.map((item) => (
              <MonopolyCell key={item.id} item={item} />
            ))}
          </div>
          <div className='flex-1'>{children}</div>
          <div>
            {refactorBoard.right.map((item) => (
              <MonopolyCell key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        {refactorBoard.bottom.map((item) => (
          <MonopolyCell key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MonopolyBoard;
