import { ButtonHTMLAttributes } from 'react';
import styles from './button.module.css';
import { Loader } from '@/shared/ui';
const Button = ({
  children,
  loading,
  ...rest
}: { children: string; loading?: boolean } & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...rest} className={styles.root}>
      {children}
      {loading && <Loader size={'sm'} />}
    </button>
  );
};

export default Button;
