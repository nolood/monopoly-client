import { createStore } from 'effector';
import { setBoardCards, setHorizontalBoardSize, setVerticalBoardSize } from '@/shared/store/model';

export type BoardCards = {
  id: number;
  title: string;
  price?: number;
  group: string;
  variant: string;
  width: number | null;
  height: number | null;
};

type BoardStore = {
  chipsCount: number;
  size: number;
  cards: BoardCards[];
};

type BoardSize = {
  verticalSize: {
    width: number | null;
    height: number | null;
  };
  horizontalSize: {
    width: number | null;
    height: number | null;
  };
};

const size = getComputedStyle(document.documentElement).getPropertyValue('--board-card-w');

const BoardStoreState: BoardStore = {
  chipsCount: 1,
  size: parseInt(size),
  cards: [],
};

const BoardSizeState: BoardSize = {
  verticalSize: {
    width: null,
    height: null,
  },
  horizontalSize: {
    width: null,
    height: null,
  },
};

export const $boardStore = createStore<BoardStore>(BoardStoreState);
export const $boardSize = createStore<BoardSize>(BoardSizeState);

$boardSize
  .on(setHorizontalBoardSize, (state, { width, height }) => ({
    ...state,
    horizontalSize: { width, height },
  }))
  .on(setVerticalBoardSize, (state, { width, height }) => ({
    ...state,
    verticalSize: { width, height },
  }));

$boardStore.on(setBoardCards, (state, cards) => ({
  ...state,
  cards,
}));
