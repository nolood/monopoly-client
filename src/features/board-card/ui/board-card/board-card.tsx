import styles from './board-card.module.css';
import { useEffect, useRef } from 'react';
import { $boardSize, setHorizontalBoardSize, setVerticalBoardSize } from '@/shared/store/model';
import { useStore } from 'effector-react';
import { $resizeStore } from '@/features/window-resize-detector/model';
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
  const isResize = useStore($resizeStore);
  const onResizeEvent = () => {
    const isVerticalVariant = variant === 'vertical';
    const isHorizontalVariant = variant === 'horizontal';
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
    <div ref={ref} className={`${styles.base} ${styles[variant]} ${group + title}`}>
      <p>{price}</p>
    </div>
  );
};

export default BoardCard;
