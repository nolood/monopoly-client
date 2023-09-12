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
  const cardVariant = (variant: string) => {
    if (variant === 'vertical') {
      return 'bg-slate-700 text-white min-w-[50px] flex flex-1 flex-col gap-10 items-center';
    }
    if (variant === 'horizontal') {
      return 'bg-slate-700 text-white py-6 flex gap-1 text-xs justify-center items-center';
    }
    if (variant === 'angle') {
      return 'bg-slate-700 text-white min-w-[100px] h-[100px] flex flex-col justify-center items-center';
    }
  };

  return (
    <div className={cardVariant(variant) + ' border border-solid border-slate-900'}>
      <p>{price}</p>
      <p>{title}</p>
    </div>
  );
};

export default BoardCard;
