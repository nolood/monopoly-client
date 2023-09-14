import { Cell } from '@/features/monopoly-cell/model';

export const refactorBoardData = (data: Cell[]) => {
  const upper: Cell[] = [];
  const right: Cell[] = [];
  const bottom: Cell[] = [];
  const left: Cell[] = [];

  data.forEach((item, index) => {
    if (index <= 12) {
      upper.push(item);
    }
    if (index > 12 && index <= 18) {
      right.push(item);
    }
    if (index > 18 && index <= 31) {
      bottom.push(item);
    }
    if (index > 31 && index <= 37) {
      left.push(item);
    }
  });

  return { upper, right, bottom, left };
};
