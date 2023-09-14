import { bottomBoard, leftBoard, rightBoard, upperBoard } from '@/shared/lib/mockBoardData.ts';
import { BoardCard } from '@/features/board-card/ui';
import styles from './board.module.css';
import { ReactNode, useEffect } from 'react';
import { useStore } from 'effector-react';
import { $boardSize, setBoardCards } from '@/shared/store/model';
import { BoardCards } from '@/shared/store/model/board/boardStore.ts';

const Board = ({ children }: { children: ReactNode }) => {
  const boardSize = useStore($boardSize);
  const calcBoardInfo = () => {
    let result: BoardCards[] = [];
    upperBoard.forEach((item) => {
      result.push({
        ...item,
        width:
          item.variant === 'horizontal'
            ? boardSize.horizontalSize.width
            : boardSize.verticalSize.width,
        height:
          item.variant === 'vertical'
            ? boardSize.horizontalSize.height
            : boardSize.verticalSize.height,
      });
    });
    rightBoard.forEach((item) => {
      result.push({
        ...item,
        width:
          item.variant === 'horizontal'
            ? boardSize.horizontalSize.width
            : boardSize.verticalSize.width,
        height:
          item.variant === 'vertical'
            ? boardSize.horizontalSize.height
            : boardSize.verticalSize.height,
      });
    });
    bottomBoard.reverse().forEach((item) => {
      result.push({
        ...item,
        width:
          item.variant === 'horizontal'
            ? boardSize.horizontalSize.width
            : boardSize.verticalSize.width,
        height:
          item.variant === 'vertical'
            ? boardSize.horizontalSize.height
            : boardSize.verticalSize.height,
      });
    });
    leftBoard.forEach((item) => {
      result.push({
        ...item,
        width:
          item.variant === 'horizontal'
            ? boardSize.horizontalSize.width
            : boardSize.verticalSize.width,
        height:
          item.variant === 'vertical'
            ? boardSize.horizontalSize.height
            : boardSize.verticalSize.height,
      });
    });

    setBoardCards(result);
  };

  useEffect(() => {
    calcBoardInfo();
  }, []);
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
