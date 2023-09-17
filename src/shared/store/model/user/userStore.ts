import { createEvent, createStore } from 'effector';
import { Chip } from '@/entities/chip/model';
import { registerFx } from '@/features/register-form/lib';

export interface IUser {
  id: number;
  username: string;
  chip?: Chip;
}

export const setIsAuth = createEvent<boolean>();

export const $user = createStore<IUser>({ username: 'egor', id: 0 });

export const $isAuth = createStore(false).on(setIsAuth, (_, value) => value);
