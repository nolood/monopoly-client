import { bottomBoard, leftBoard, rightBoard, upperBoard } from '@/shared/lib/mockBoardData.ts';
import { Cell } from '@/features/monopoly-cell/model';
import { Chip } from '@/entities/chip/model';
import { ChipColors } from '@/entities/chip/model/ChipColors.ts';

export class Board {
  cells: Cell[] = [];

  public initCells() {
    for (let i = 0; i < upperBoard.length; i++) {
      const cell = upperBoard[i];
      this.cells.push(
        new Cell(i, 0, cell.title, cell.price, cell.group, cell.variant, [], cell.id, this),
      );
    }
    for (let i = 0; i < rightBoard.length; i++) {
      const cell = rightBoard[i];
      this.cells.push(
        new Cell(12, i + 1, cell.title, cell.price, cell.group, cell.variant, [], cell.id, this),
      );
    }
    for (let i = 0; i < bottomBoard.length; i++) {
      const cell = bottomBoard[i];
      this.cells.push(
        new Cell(i, 7, cell.title, cell.price, cell.group, cell.variant, [], cell.id, this),
      );
    }
    for (let i = 0; i < leftBoard.length; i++) {
      const cell = leftBoard[i];
      this.cells.push(
        new Cell(0, i + 1, cell.title, cell.price, cell.group, cell.variant, [], cell.id, this),
      );
    }
  }

  public getCell(x: number, y: number) {
    return this.cells.find((item) => item.x === x && item.y === y) || this.cells[0];
  }

  public addChips() {
    new Chip(ChipColors.RED, this.cells[0], { id: 0, username: 'egor' }, 0);
    new Chip(ChipColors.BLUE, this.cells[0], { id: 0, username: 'egor' }, 1);
  }
}
