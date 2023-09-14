import { $boardSize, $boardStore } from '@/shared/store/model';
import { $currentChip } from '@/entities/chip/model/chipStore/chip.ts';
import { AnimationControls } from 'framer-motion';

export const chipAnimation = async ({
  chipElement,
  cubesResult,
  animationControls,
}: {
  chipElement: HTMLDivElement | null;
  cubesResult: number;
  animationControls: AnimationControls;
}) => {
  const boardSize = $boardSize.getState();
  const cards = $boardStore.getState().cards;
  const currentChip = $currentChip.getState();

  if (!boardSize.verticalSize.width || !boardSize.horizontalSize.height) {
    return null;
  }

  // let turnDirection = null;
  let angleId = null;
  let isAngle = false;

  for (let i = 1; i < cubesResult + 1; i++) {
    const card = cards[currentChip.position + i];
    if (card.variant === 'angle') {
      isAngle = true;
      angleId = card.id;
    }
  }

  let translateX = 0;
  let translateY = 0;

  if (!isAngle) {
    translateX = boardSize.verticalSize.width * cubesResult;
  }

  if (isAngle && angleId) {
    const rowSteps = cubesResult - (angleId - currentChip.position);
    translateX = boardSize.verticalSize.width * rowSteps;
    translateY = boardSize.horizontalSize.height * cubesResult - rowSteps;
  }

  console.log(isAngle, angleId);

  await animationControls.start({
    translateX,
    transition: {
      duration: 1,
      type: 'tween',
    },
  });

  await animationControls.start({
    translateY,
    transition: {
      duration: 1,
      type: 'tween',
    },
  });
};
