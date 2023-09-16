import styles from './input.module.css';
import { InputHTMLAttributes } from 'react';

const Input = ({
  addonAfter,
  label,
  placeholder,
  type,
  name,
  ...rest
}: {
  addonAfter?: string;
  label: string;
  placeholder: string;
  type: string;
  name: string;
} & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
        <input {...rest} id={name} className={styles.root} type={type} placeholder={placeholder} />
      </label>
    </div>
  );
};

export default Input;
