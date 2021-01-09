import { Position } from '../position.js';

export default class BaseState {
  constructor(wolves, sheepPos) {
    this.wolves = wolves;
    this.sheep = sheepPos;
  }

  move(newPos) {
    console.log('not expected');
    return new State(this.wolves, newPos);
  }

  isAvailable(newPos) {
    if (newPos.row < 0 || newPos.col < 0 || newPos.row >= 8 || newPos.col >= 8)
      return false;

    return this.wolves.every(
      (w) => w.row !== newPos.row || w.col !== newPos.col
    );
  }

  areWolvesWin() {
    const { row, col } = this.sheep;
    const allPossibleSheepMoves = [
      { row: row + 1, col: col + 1 },
      { row: row + 1, col: col - 1 },
      { row: row - 1, col: col + 1 },
      { row: row - 1, col: col - 1 },
    ];

    return allPossibleSheepMoves.every((m) => !this.isAvailable(m));
  }

  getValue(row, col) {
    if (this.wolves.some((w) => w.row === row && w.col === col)) {
      return 'w';
    }

    return this.sheep.row === row && this.sheep.col === col ? 's' : '';
  }
}
