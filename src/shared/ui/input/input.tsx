import styles from './input.module.css';
import { InputHTMLAttributes } from 'react';
import { FormErrorHandler } from '@/shared/ui';
import { ValidationError } from 'effector-forms';
import { motion } from 'framer-motion';

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <FormErrorHandler error={error} />
      </motion.div>
    </div>
  );
};

export default Input;
