export const cardVariant = (variant: 'vertical' | 'horizontal' | 'angle') => {
  console.log('klek');
  if (variant === 'vertical') {
    return 'bg-slate-700 text-white w-52 py-16 flex flex-col gap-10 justify-center items-center';
  }
  if (variant === 'horizontal') {
    return 'bg-slate-700 text-white w-64 py-12 flex gap-6 justify-center items-center';
  }
  if (variant === 'angle') {
    return 'bg-slate-700 text-white w-64 h-64 flex justify-center items-center';
  }
};
