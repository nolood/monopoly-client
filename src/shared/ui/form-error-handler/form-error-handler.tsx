import { ErrorsList } from '@/shared/lib';

const FormErrorHandler = ({ errors }: { errors?: Array<{ rule: string }> }) => {
  console.log(errors);
  if (!errors?.length) return null;
  return <div className='text-error'>{ErrorsList[errors[0].rule]}</div>;
};

export default FormErrorHandler;
