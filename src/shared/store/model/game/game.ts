import { createStore } from 'effector';

export type GameState = 'menu' | 'match';

export const $gameState = createStore<GameState>('menu');
