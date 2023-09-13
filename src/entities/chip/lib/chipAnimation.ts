import { $boardSize, $boardStore } from '@/shared/store/model';
import { $currentChip } from '@/entities/chip/model/chip/chip.ts';
import { AnimationControls } from 'framer-motion';

export const chipAnimation = ({
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

  let turnDirection = null;
  let turnNumber = null;

  for (let i = 0; i < cubesResult; i++) {
    const card = cards[currentChip.position + i];
    if (card.variant === 'angle' && card.id === 12) {
      turnDirection = 'down';
      turnNumber = i;
    }
    if (card.variant === 'angle' && card.id === 18) {
      turnDirection = 'left';
      turnNumber = i;
    }
    if (card.variant === 'angle' && card.id === 30) {
      turnDirection = 'up';
      turnNumber = i;
    }
    if (card.variant === 'angle' && card.id === 0) {
      turnDirection = 'right';
      turnNumber = i;
    }
  }

  let translateX = 0;
  let translateY = 0;

  if (!turnDirection || !turnNumber) {
    translateX = boardSize.verticalSize.width * cubesResult;
  }

  if (turnDirection === 'down' && turnNumber) {
    const rowSteps = cubesResult - turnNumber;
    translateX = boardSize.verticalSize.width * rowSteps;
    translateY = boardSize.horizontalSize.height * cubesResult - rowSteps;
  }

  console.log(turnDirection, turnNumber);

  animationControls.start({
    translateX,
    transition: {
      duration: 1,
      type: 'tween',
    },
  });

  animationControls.start({
    translateY,
    transition: {
      duration: 1,
      type: 'tween',
    },
  });
};
