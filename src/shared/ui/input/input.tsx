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
      <label className={styles.label} htmlFor={name}>
        {label}
        <input id={name} className={styles.root} type={type} placeholder={placeholder} />
      </label>
    </div>
  );
};

export default Input;
