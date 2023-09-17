import { api } from '@/shared/api';
import { AxiosError } from 'axios';
import { createEffect } from 'effector';
import { loginForm } from '.';

type LoginForm = {
  email: string;
  password: string;
};

export const loginFx = createEffect<LoginForm, { token: string }, AxiosError<{ message: string }>>(
  async (params: LoginForm) => {
    return await api.post('/auth/login', { ...params });
  },
);

loginFx.failData.watch((data) => {
  const error = data.response?.data.message;
  if (error) {
    const field = error.split('-')[1] as 'email' | 'password';
    loginForm.fields[field].addError({ rule: error });
  }
});
