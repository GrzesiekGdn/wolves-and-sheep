import { Position, mirrorIfOdd } from '../position.js';
import BaseState from './baseState.js';
import ReverseHookState from './reverseHookState.js';
import SevenState from './sevenState.js';

// _x_x_-_-
// -_-_x_x_
export default class ZetState extends BaseState {
  constructor(row, sheepPos) {
    let wolves = [
      new Position(row, 1),
      new Position(row, 3),
      new Position(row + 1, 4),
      new Position(row + 1, 6),
    ];

    super(mirrorIfOdd(wolves, row), sheepPos);
    this.row = row;
  }

  move(newPos) {
    const bestPos = mirrorIfOdd(new Position(this.row + 1, 2), this.row);

    if (newPos.row != bestPos.row || newPos.col != bestPos.col) {
      return new ReverseHookState(this.row, newPos);
    } else {
      return new SevenState(this.row, newPos);
    }
  }
}
