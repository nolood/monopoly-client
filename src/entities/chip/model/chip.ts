import { ChipColors } from '@/entities/chip/model/ChipColors.ts';
import { Cell } from '@/features/monopoly-cell/model';
import { IUser } from '@/shared/store/model/user/user.ts';

export type ChipPosition = {
  x: number;
  y: number;
};

export class Chip {
  color: ChipColors;
  cell: Cell;
  user: IUser;
  id: number;
  positions: ChipPosition;

  constructor(color: ChipColors, cell: Cell, positions: ChipPosition, user: IUser, id: number) {
    this.color = color;
    this.cell = cell;
    this.positions = positions;
    this.user = user;
    this.id = id;
  }
}
