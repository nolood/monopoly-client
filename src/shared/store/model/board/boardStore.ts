import { createStore } from 'effector';
import { IUser } from '@/shared/store/model/user/user.ts';

type BoardStore = {
  players: IUser[];
};

const BoardStoreState: BoardStore = {
  players: [],
};

export const $boardStore = createStore<BoardStore>(BoardStoreState);
