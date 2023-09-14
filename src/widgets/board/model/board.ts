import { bottomBoard, leftBoard, rightBoard, upperBoard } from '@/shared/lib/mockBoardData.ts';
import { Cell } from '@/features/monopoly-cell/model';

export class Board {
  cells: Cell[] = [];

  public initCells() {
    for (let i = 0; i < upperBoard.length; i++) {
      const cell = upperBoard[i];
      this.cells.push(
        new Cell(i, 0, cell.title, cell.price, cell.group, cell.variant, null, cell.id, this),
      );
    }
    for (let i = 0; i < rightBoard.length; i++) {
      const cell = rightBoard[i];
      this.cells.push(
        new Cell(12, i + 1, cell.title, cell.price, cell.group, cell.variant, null, cell.id, this),
      );
    }
    for (let i = 0; i < bottomBoard.length; i++) {
      const cell = bottomBoard[i];
      this.cells.push(
        new Cell(i, 7, cell.title, cell.price, cell.group, cell.variant, null, cell.id, this),
      );
    }
    for (let i = 0; i < leftBoard.length; i++) {
      const cell = leftBoard[i];
      this.cells.push(
        new Cell(0, i + 1, cell.title, cell.price, cell.group, cell.variant, null, cell.id, this),
      );
    }
  }
}
