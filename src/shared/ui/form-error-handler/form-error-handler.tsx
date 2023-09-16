import { ErrorsList } from "@/shared/lib";



const FormErrorHandler = ({ error }: { error: string }) => {
  return <div>{ErrorsList[error]}</div>;
};

export default FormErrorHandler;
