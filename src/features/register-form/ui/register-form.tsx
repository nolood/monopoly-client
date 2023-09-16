import { Button, Input } from '@/shared/ui';

const RegisterForm = () => {
  return (
    <form className='mt-10 flex gap-5 flex-col'>
      <Input placeholder='Email' name='email' type='text' label='email' />
      <Input placeholder='Username' name='username' label='Username' type='text' />
      <Input placeholder='***********' name='password' label='Password' type='password' />
      <Input
        placeholder='***********'
        name='repeatpassword'
        label='Repeat your password'
        type='password'
      />
      <Button>Register</Button>
    </form>
  );
};

export default RegisterForm;
