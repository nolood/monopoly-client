import { Input } from '@/shared/ui';
import React from 'react';

const LoginForm = () => {
  return (
    <form className='mt-10 flex gap-5 flex-col'>
      <Input label={'Email'} name='email' type='text' placeholder='Enter you email' />
      <Input label={'Password'} name='password' type='password' placeholder='**************' />
    </form>
  );
};

export default LoginForm;
