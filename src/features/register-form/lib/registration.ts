import { createEffect } from 'effector';
import { api } from '@/shared/api';
import { AxiosError } from 'axios';

type RegisterForm = {
  email: string;
  username: string;
  password: string;
};

export const registerFx = createEffect<RegisterForm, { token: string }, AxiosError>(
  async (params: RegisterForm) => {
    return await api.post('/auth/registration', { ...params });
  },
);

registerFx.failData.watch((data) => {
  console.log(data);
});
