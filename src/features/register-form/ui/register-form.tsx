import { Button, Input } from '@/shared/ui';
import { registerForm } from '../lib/reg-form-valid';
import { useForm } from 'effector-forms';
const RegisterForm = () => {
  const { fields, submit } = useForm(registerForm);
  return (
    <form className='mt-10 flex gap-5 flex-col'>
      <Input
        value={fields.email.value}
        placeholder='Email'
        name='email'
        type='text'
        label='Email'
      />
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
