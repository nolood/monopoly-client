import { createEvent } from 'effector';
import { BoardCards } from '@/shared/store/model/board/boardStore.ts';

export const setVerticalBoardSize = createEvent<{ width: number; height: number }>();
export const setHorizontalBoardSize = createEvent<{ width: number; height: number }>();
export const setBoardCards = createEvent<BoardCards[]>();
