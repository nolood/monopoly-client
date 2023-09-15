import styles from './monopoly-cell.module.css';
import { Cell } from '@/features/monopoly-cell/model';
import { Chip } from '@/entities/chip/ui';

const MonopolyCell = ({ item }: { item: Cell }) => {
  return (
    <div
      className={`${styles.base} ${styles[item.variant]}`}
      onClick={() => console.log(item.x, item.y)}
    >
      <p>{item.title}</p>
      <div>
        {item.chips.map((item) => (
          <Chip key={item.id} color={item.color} />
        ))}
      </div>
    </div>
  );
};

export default MonopolyCell;
