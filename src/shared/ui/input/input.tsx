import styles from './input.module.css';

const Input = ({
  addonAfter,
  label,
  placeholder,
  type,
  name,
}: {
  addonAfter?: string;
  label: string;
  placeholder: string;
  type: string;
  name: string;
}) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name}>{label}</label>
      <input id={name} className={styles.root} type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
