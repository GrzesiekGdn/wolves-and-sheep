import { Position, mirrorIfOdd } from '../position.js';
import BaseState from './baseState.js';
import TwoOnBackState from './twoOnBackState.js';

// _-_-_x_-
// -_x_-_x_
// _-_x_-_-
export class TwoHolesParallelState extends BaseState {
  constructor(row, sheepPos) {
    let wolves = [
      new Position(row + 1, 2),
      new Position(row + 2, 3),
      new Position(row, 5),
      new Position(row + 1, 6),
    ];

    super(mirrorIfOdd(wolves, row), sheepPos);
    this.row = row;
  }

  move(newPos) {
    return new TwoOnBackState(this.row, newPos);
  }
}
