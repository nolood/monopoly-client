import styles from './input.module.css';
import { InputHTMLAttributes } from 'react';
import { FormErrorHandler } from '@/shared/ui';
import { ValidationError } from 'effector-forms';

const Input = ({
  addonAfter,
  label,
  placeholder,
  type,
  name,
  error,
  ...rest
}: {
  addonAfter?: string;
  label: string;
  placeholder: string;
  type: string;
  name: string;
  error?: ValidationError<string> | null;
} & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className='h-[90px]'>
      <div className={`${styles.wrapper} ${error && styles.errorInput}`}>
        <label className={`${styles.label} ${error && styles.errorLabel}`} htmlFor={name}>
          {label}
          <input
            {...rest}
            id={name}
            className={styles.root}
            type={type}
            placeholder={placeholder}
          />
        </label>
      </div>
      <FormErrorHandler error={error} />
    </div>
  );
};

export default Input;
