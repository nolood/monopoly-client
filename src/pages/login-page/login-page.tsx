import { Input } from '@/shared/ui';

const LoginPage = () => {
  return (
    <div>
      <Input type={'text'} label={'Password'} name={'password'} placeholder={'*************'} />
    </div>
  );
};

export default LoginPage;
