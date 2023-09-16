import { Button, Input } from '@/shared/ui';

const LoginForm = () => {
  return (
    <form className='mt-10 flex gap-5 flex-col'>
      <Input label={'Email'} name='email' type='text' placeholder='Enter you email' />
      <Input label={'Password'} name='password' type='password' placeholder='**************' />
      <Button>Login</Button>
    </form>
  );
};

export default LoginForm;
