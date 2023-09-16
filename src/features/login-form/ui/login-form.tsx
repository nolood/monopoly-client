import { Button, Input } from '@/shared/ui';

const LoginForm = () => {
  return (
    <form className='mt-10 flex gap-5 flex-col'>
      <Input
        label={'Email or Username'}
        name='email'
        type='text'
        placeholder='Enter your email or username'
      />
      <Input label={'Password'} name='password' type='password' placeholder='**************' />
      <Button>Login</Button>
    </form>
  );
};

export default LoginForm;
