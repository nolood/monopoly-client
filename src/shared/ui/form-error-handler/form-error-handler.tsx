import { ErrorsList } from '@/shared/lib';
import { ValidationError } from 'effector-forms';

const FormErrorHandler = ({ error }: { error?: ValidationError<string> | null }) => {
  if (!error) return null;
  return <div className='text-error text-sm mt-1'>{ErrorsList[error.rule]}</div>;
};

export default FormErrorHandler;
