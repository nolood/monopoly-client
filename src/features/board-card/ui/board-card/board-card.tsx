import styles from './board-card.module.css';
const BoardCard = ({
  variant,
  title,
  price,
  group,
}: {
  variant: string;
  title: string;
  price?: number;
  group?: string;
}) => {
  return (
    <div className={`${styles.base} ${styles[variant]}`}>
      <p>{price}</p>
      <p>{title}</p>
      <p>{group}</p>
    </div>
  );
};

export default BoardCard;
