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

  getValue(row, col) {
    if (this.wolves.some((w) => w.row === row && w.col === col)) {
      return 'w';
    }

    return this.sheep.row === row && this.sheep.col === col ? 's' : '';
  }
}
