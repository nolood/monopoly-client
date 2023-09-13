import { createEvent } from 'effector';
import { BoardCards } from '@/shared/store/model/board/boardStore.ts';

export const setVerticalBoardSize = createEvent<{ width: number | null; height: number | null }>();
export const setHorizontalBoardSize = createEvent<{
  width: number | null;
  height: number | null;
}>();
export const setBoardCards = createEvent<BoardCards[]>();
