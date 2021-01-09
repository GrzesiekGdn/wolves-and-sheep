import { Position, mirrorIfOdd } from '../position.js';
import BaseState from './baseState.js';
import HoleTState from './holeTState.js';
import HookState from './hookState.js';

// _x_x_x_x
export default class LineState extends BaseState {
  constructor(row, sheepPos) {
    let wolves = [
      new Position(row, 1),
      new Position(row, 3),
      new Position(row, 5),
      new Position(row, 7),
    ];

    super(mirrorIfOdd(wolves, row), sheepPos);
    this.row = row;
  }

  move(newPos) {
    const bestPos = mirrorIfOdd(new Position(this.row + 1, 6), this.row);

    if (newPos.row != bestPos.row || newPos.col != bestPos.col) {
      return new HookState(this.row, newPos);
    } else {
      return new HoleTState(this.row, newPos);
    }
  }
}
