import { Position, mirrorIfOdd } from '../position.js';
import { BaseState } from './baseState.js';
import { ReverseHookState } from './reverseHookState.js';

// _x_x_-_-
// -_-_x_x_
export class ZetState extends BaseState {
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
    return new ReverseHookState(this.row, newPos);
  }
}
