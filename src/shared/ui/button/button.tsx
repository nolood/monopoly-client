import styles from './button.module.css';
const Button = ({ children }: { children: string }) => {
  return <button className={styles.root}>{children}</button>;
};

export default Button;
