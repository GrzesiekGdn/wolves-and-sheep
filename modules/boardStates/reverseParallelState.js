import { Position, mirrorIfOdd } from '../position.js';
import BaseState from './baseState.js';
import HookState from './hookState.js';

// _-_-_x_-
// -_x_x_-_
// _x_-_-_-
export default class ReverseParallelState extends BaseState {
  constructor(row, sheepPos) {
    let wolves = [
      new Position(row, 5),
      new Position(row + 1, 2),
      new Position(row + 1, 4),
      new Position(row + 2, 1),
    ];

    super(mirrorIfOdd(wolves, row), sheepPos);
    this.row = row;
  }

  move(newPos) {
    return new HookState(this.row + 1, newPos);
  }
}
