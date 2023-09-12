type BoardData = {
  id: number;
  title: string;
  group: string;
  price?: number;
  variant: 'vertical' | 'horizontal' | 'angle';
};

export const refactorBoardData = (data: BoardData[]) => {
  const upper: BoardData[] = [];
  const right: BoardData[] = [];
  const bottom: BoardData[] = [];
  const left: BoardData[] = [];

  data.forEach((item) => {
    if (item.id <= 11) {
      upper.push(item);
    }
    if (item.id > 11 && item.id < 18) {
      right.push(item);
    }
    if (item.id >= 18 && item.id <= 30) {
      bottom.push(item);
    }
    if (item.id > 30 && item.id <= 36) {
      left.push(item);
    }
  });

  return [upper, right, bottom, left];
};
