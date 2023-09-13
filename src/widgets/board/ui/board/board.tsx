import { bottomBoard, leftBoard, rightBoard, upperBoard } from '@/shared/lib/mockBoardData.ts';
import { BoardCard } from '@/features/board-card/ui';
import styles from './board.module.css';
import { ReactNode } from 'react';

const Board = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className='flex flex-col'>
        <div className={styles.upper}>
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
        <div className='flex justify-between'>
          <div>
            {leftBoard.map((item) => (
              <BoardCard
                key={item.id}
                title={item.title}
                price={item.price}
                group={item.group}
                variant={item.variant}
              />
            ))}
          </div>
          <div className='flex-1'>{children}</div>
          <div>
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
      </div>
      <div className={styles.bottom}>
        {bottomBoard.map((item) => (
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
