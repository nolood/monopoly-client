import { createEvent, createStore } from 'effector';

type CurrentChip = {
  position: number;
};

const initialState: CurrentChip = {
  position: 0,
};

export const setChipPosition = createEvent<number>();
export const $currentChip = createStore<CurrentChip>(initialState);

$currentChip.on(setChipPosition, (state, position) => ({
  ...state,
  position: state.position + position,
}));
