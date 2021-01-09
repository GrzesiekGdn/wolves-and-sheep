import { Position, mirrorIfOdd } from '../position.js';
import BaseState from './baseState.js';
import ReverseUState from './reverseUState.js';
import ZetState from './zetState.js';

// _x_x_x_-
// -_-_-_x_
export default class HookState extends BaseState {
  constructor(row, sheepPos) {
    let wolves = [
      new Position(row, 1),
      new Position(row, 3),
      new Position(row, 5),
      new Position(row + 1, 6),
    ];

    super(mirrorIfOdd(wolves, row), sheepPos);
    this.row = row;
  }

  move(newPos) {
    const bestPos = mirrorIfOdd(new Position(this.row + 1, 4), this.row);

    if (newPos.row != bestPos.row || newPos.col != bestPos.col) {
      return new ZetState(this.row, newPos);
    } else {
      return new ReverseUState(this.row, newPos);
    }
  }
}
