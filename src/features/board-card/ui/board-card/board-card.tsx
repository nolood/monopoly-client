import styles from './board-card.module.css';
import { useRef } from 'react';
import { $boardSize, setHorizontalBoardSize, setVerticalBoardSize } from '@/shared/store/model';
import { useStore } from 'effector-react';
const BoardCard = ({
  variant,
  title,
  price,
  group,
}: {
  variant: string;
  title: string;
  price?: number;
  group?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const boardSize = useStore($boardSize);

  if (
    variant === 'vertical' &&
    ref.current &&
    !boardSize.verticalSize.width &&
    !boardSize.verticalSize.height
  ) {
    setVerticalBoardSize({ width: ref.current.offsetWidth, height: ref.current.offsetHeight });
  }
  if (
    variant === 'horizontal' &&
    ref.current &&
    !boardSize.horizontalSize.width &&
    !boardSize.horizontalSize.height
  ) {
    setHorizontalBoardSize({ width: ref.current.offsetWidth, height: ref.current.offsetHeight });
  }

  return (
    <div ref={ref} className={`${styles.base} ${styles[variant]}`}>
      <p>{price}</p>
      <p>{title}</p>
      <p>{group}</p>
    </div>
  );
};

export default BoardCard;
