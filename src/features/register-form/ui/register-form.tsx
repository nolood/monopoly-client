import { Button, Input } from '@/shared/ui';
import { registerForm } from '../lib/registration-valid.ts';
import { useForm } from 'effector-forms';
import { FormEvent } from 'react';
import { useStore } from 'effector-react';
import { registerFx } from '@/features/register-form/lib';

const RegisterForm = () => {
  const { fields, submit } = useForm(registerForm);
  const isLoading = useStore(registerFx.pending);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit();
  };

  return (
    <form onSubmit={onSubmit} className='mt-10 flex gap-3 flex-col'>
      <Input
        value={fields.email.value}
        onChange={(e) => fields.email.onChange(e.target.value)}
        placeholder='Email'
        name='email'
        type='text'
        label='Email'
        error={fields.email?.firstError}
      />
      <Input
        value={fields.username.value}
        onChange={(e) => fields.username.onChange(e.target.value)}
        placeholder='Username'
        name='username'
        label='Username'
        type='text'
        error={fields.username?.firstError}
      />
      <Input
        value={fields.password.value}
        onChange={(e) => fields.password.onChange(e.target.value)}
        placeholder='***********'
        name='password'
        label='Password'
        type='password'
        error={fields.password?.firstError}
      />
      <Button loading={isLoading} type='submit'>
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
