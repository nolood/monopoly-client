const BoardCard = ({
  variant,
  title,
  price,
  group,
}: {
  variant: 'vertical' | 'horizontal' | 'angle';
  title: string;
  price?: number;
  group?: string;
}) => {
  const cardVariant = (variant: 'vertical' | 'horizontal' | 'angle') => {
    if (variant === 'vertical') {
      return 'bg-slate-700 text-white min-w-[100px] py-16 flex flex-col gap-10 justify-center items-center';
    }
    if (variant === 'horizontal') {
      return 'bg-slate-700 text-white min-w-[200px] py-12 flex gap-6 justify-center items-center';
    }
    if (variant === 'angle') {
      return 'bg-slate-700 text-white min-w-[300px] h-[300px] flex justify-center items-center';
    }
  };

  return (
    <div className={cardVariant(variant) + ' border border-solid border-slate-900'}>
      <p>{price}</p>
      <p>{title}</p>
      <p>{group}</p>
    </div>
  );
};

export default BoardCard;
