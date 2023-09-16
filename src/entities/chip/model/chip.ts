import { ChipColors } from '@/entities/chip/model/ChipColors.ts';
import { Cell } from '@/features/monopoly-cell/model';
import { IUser } from '@/shared/store/model/user/userStore';

export type ChipPosition = {
  x: number;
  y: number;
};

export class Chip {
  color: ChipColors;
  cell: Cell;
  user: IUser;
  id: number;

  constructor(color: ChipColors, cell: Cell, user: IUser, id: number) {
    this.color = color;
    this.cell = cell;
    this.user = user;
    this.id = id;
    this.cell.chips = [...this.cell.chips, this];
  }
}
