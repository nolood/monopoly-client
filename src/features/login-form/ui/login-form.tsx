import { Button, Input } from '@/shared/ui';
import { useForm } from 'effector-forms';
import { FormEvent } from 'react';
import { loginForm } from '../lib';
const LoginForm = () => {
  const { fields, submit } = useForm(loginForm);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit();
  };

  return (
    <form onSubmit={onSubmit} className='mt-10 flex gap-3 flex-col'>
      <Input
        value={fields.email.value}
        onChange={(e) => fields.email.onChange(e.target.value)}
        label='Email or username'
        name='email'
        type='text'
        placeholder='Enter your email or username'
        error={fields.email.firstError}
      />
      <Input
        value={fields.password.value}
        onChange={(e) => fields.password.onChange(e.target.value)}
        label='Password'
        name='password'
        type='password'
        placeholder='**************'
        error={fields.password.firstError}
      />
      <Button type='submit'>Login</Button>
    </form>
  );
};

export default LoginForm;
