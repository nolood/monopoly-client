import { cardVariant } from '../lib/boardCardStyle';

const BoardCard = ({
  variant,
  title,
  price,
  group,
}: {
  variant: 'vertical' | 'horizontal' | 'angle';
  title: string;
  price: number;
  group: string;
}) => {
  const className = cardVariant(variant);
  return (
    <div className={className}>
      <p>{price}</p>
      <p>{title}</p>
      <p>{group}</p>
    </div>
  );
};

export default BoardCard;
