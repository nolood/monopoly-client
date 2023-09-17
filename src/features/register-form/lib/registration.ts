import { createEffect } from 'effector';
import { api } from '@/shared/api';
import { AxiosError } from 'axios';
import { registerForm } from '@/features/register-form/lib/registration-valid.ts';

type RegisterForm = {
  email: string;
  username: string;
  password: string;
};

export const registerFx = createEffect<
  RegisterForm,
  { token: string },
  AxiosError<{ message: string }>
>(async (params: RegisterForm) => {
  return await api.post('/auth/registration', { ...params });
});

registerFx.failData.watch((data) => {
  const error = data.response?.data.message;
  if (error) {
    const field = error.split('-')[1] as 'email' | 'username';
    registerForm.fields[field].addError({ rule: error });
  }
});
