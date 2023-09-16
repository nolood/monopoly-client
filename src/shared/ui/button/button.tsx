import { ButtonHTMLAttributes } from 'react';
import styles from './button.module.css';
const Button = ({
  children,
  ...rest
}: { children: string } & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...rest} className={styles.root}>
      {children}
    </button>
  );
};

export default Button;
