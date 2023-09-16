import { Button, FormErrorHandler, Input } from '@/shared/ui';
import { registerForm } from '../lib/reg-form-valid';
import { useForm } from 'effector-forms';
import { FormEvent } from 'react';

const RegisterForm = () => {
  const { fields, submit } = useForm(registerForm);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit();
  };
  return (
    <form onSubmit={onSubmit} className='mt-10 flex gap-5 flex-col'>
      <Input
        value={fields.email.value}
        onChange={(e) => fields.email.onChange(e.target.value)}
        placeholder='Email'
        name='email'
        type='text'
        label='Email'
      />
      <FormErrorHandler error={fields.email.errors} />
      <Input
        value={fields.username.value}
        onChange={(e) => fields.username.onChange(e.target.value)}
        placeholder='Username'
        name='username'
        label='Username'
        type='text'
      />
      <FormErrorHandler error={() => fields.username.errorText()} />
      <Input
        value={fields.password.value}
        onChange={(e) => fields.password.onChange(e.target.value)}
        placeholder='***********'
        name='password'
        label='Password'
        type='password'
      />
      <FormErrorHandler error={() => fields.password.errorText()} />
      <Button type='submit'>Register</Button>
    </form>
  );
};

export default RegisterForm;
