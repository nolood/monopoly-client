import { RegisterForm } from '@/features/register-form/ui';
import { LOGIN_ROUTE } from '@/shared/lib/paths';
import { Link } from 'react-router-dom';

const RegisterScreen = () => {
  return (
    <div className='flex-col'>
      <h1 className='text-textMain text-2xl sm:text-5xl font-bold'>Register new account</h1>
      <p className='text-textSecondary mt-5 text-lg capitalize'>
        already a member?
        <Link className='text-focusColor ml-2 text-lg' to={LOGIN_ROUTE}>
          Login
        </Link>
      </p>
      <RegisterForm />
    </div>
  );
};

export default RegisterScreen;
