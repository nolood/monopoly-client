import LoginForm from '@/features/login-form/ui/login-form';
import { REGISTER_ROUTE } from '@/shared/lib/paths';
import { Link } from 'react-router-dom';

const LoginScreen = () => {
  return (
    <div className='flex-col'>
      <h1 className='text-textMain text-2xl font-bold sm:text-5xl'>Login to you account</h1>
      <p className='text-textSecondary mt-5 text-lg capitalize'>
        already a member?
        <Link className='text-focusColor ml-2 text-lg' to={REGISTER_ROUTE}>
          register
        </Link>
      </p>
      <LoginForm />
    </div>
  );
};

export default LoginScreen;
