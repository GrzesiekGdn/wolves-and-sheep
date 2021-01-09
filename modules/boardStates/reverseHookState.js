import { Position, mirrorIfOdd } from '../position.js';
import BaseState from './baseState.js';
import LineState from './lineState.js';
import SideGameEndPrimState from './sideGameEndPrimState.js';

// _x_-_-_-
// -_x_x_x_
export default class ReverseHookState extends BaseState {
  constructor(row, sheepPos) {
    let wolves = [
      new Position(row, 1),
      new Position(row + 1, 2),
      new Position(row + 1, 4),
      new Position(row + 1, 6),
    ];

    super(mirrorIfOdd(wolves, row), sheepPos);
    this.row = row;
  }

  move(newPos) {
    const bestPos = mirrorIfOdd(new Position(this.row + 1, 0), this.row);

    if (newPos.row != bestPos.row || newPos.col != bestPos.col) {
      return new LineState(this.row + 1, newPos);
    } else {
      return new SideGameEndPrimState(this.row, newPos);
    }
  }
}
