import { Position, mirrorIfOdd } from '../position.js';
import { BaseState } from './baseState.js';
import { LineState } from './lineState.js';

// _x_-_-_-
// -_x_x_x_
export class ReverseHookState extends BaseState {
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
    return new LineState(this.row + 1, newPos);
  }
}
