import styles from './monopoly-cell.module.css';
import { useEffect, useRef } from 'react';
import { $boardSize, setHorizontalBoardSize, setVerticalBoardSize } from '@/shared/store/model';
import { useStore } from 'effector-react';
import { $resizeStore } from '@/features/window-resize-detector/model';
import { Cell } from '@/features/monopoly-cell/model';
const MonopolyCell = ({ item }: { item: Cell }) => {
  const ref = useRef<HTMLDivElement>(null);
  const boardSize = useStore($boardSize);
  const isResize = useStore($resizeStore);
  const onResizeEvent = () => {
    const isVerticalVariant = item.variant === 'vertical';
    const isHorizontalVariant = item.variant === 'horizontal';
    const isResizeZero = isResize === 0;
    const isRefCurrent = ref.current;
    const { offsetWidth, offsetHeight } = isRefCurrent || {};

    const shouldSetVerticalBoardSize =
      isResizeZero &&
      isVerticalVariant &&
      isRefCurrent &&
      !boardSize.verticalSize.width &&
      !boardSize.verticalSize.height;

    const shouldSetHorizontalBoardSize =
      isResizeZero &&
      isHorizontalVariant &&
      offsetWidth &&
      offsetHeight &&
      !boardSize.horizontalSize.width &&
      !boardSize.horizontalSize.height;

    if (shouldSetVerticalBoardSize || (isVerticalVariant && isRefCurrent)) {
      setVerticalBoardSize({ width: offsetWidth || null, height: offsetHeight || null });
    }

    if (shouldSetHorizontalBoardSize || (isHorizontalVariant && isRefCurrent)) {
      setHorizontalBoardSize({ width: offsetWidth || null, height: offsetHeight || null });
    }
  };

  useEffect(() => {
    onResizeEvent();
  }, [isResize]);

  return (
    <div
      ref={ref}
      className={`${styles.base} ${styles[item.variant]}`}
      onClick={() => console.log(item.x, item.y)}
    >
      <p>{item.title}</p>
    </div>
  );
};

export default MonopolyCell;
