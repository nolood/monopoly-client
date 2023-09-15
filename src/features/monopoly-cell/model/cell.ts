import { Chip } from '@/entities/chip/model';
import { Board } from '@/widgets/board/model';

export class Cell {
  readonly x: number;
  readonly y: number;
  readonly title: string;
  readonly price?: number;
  readonly group: string;
  readonly variant: string;
  chips: Chip[];
  id: number;
  board: Board;

  constructor(
    x: number,
    y: number,
    title: string,
    price: number | undefined,
    group: string,
    variant: string,
    chips: Chip[],
    id: number,
    board: Board,
  ) {
    this.x = x;
    this.y = y;
    this.title = title;
    this.price = price;
    this.group = group;
    this.variant = variant;
    this.chips = chips;
    this.id = id;
    this.board = board;
  }

  public moveChip() {}
}
