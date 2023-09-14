import { createEvent, createStore } from 'effector';

export interface IUser {
  id: number;
  username: string;
}

export const setIsAuth = createEvent<boolean>();

export const $user = createStore<IUser>({ username: 'egor', id: 0 });

export const $isAuth = createStore(false).on(setIsAuth, (_, value) => value);
