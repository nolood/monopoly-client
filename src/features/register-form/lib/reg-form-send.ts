import { createEffect } from 'effector';

export const registerFx = createEffect(async (params: any) => {
  console.log(params);
});
