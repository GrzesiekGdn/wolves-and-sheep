import { Position, mirrorIfOdd } from '../position.js';
import BaseState from './baseState.js';
import TwoOnBackState from './twoOnBackState.js';
import HoleTPrimState from './holeTPrimState.js';

// _-_-_x_-
// -_x_-_x_
// _-_x_-_-
export default class TwoHolesParallelState extends BaseState {
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
    if (mirrorIfOdd(newPos, this.row).col < 4) {
      return new TwoOnBackState(this.row, newPos);
    }
    return new HoleTPrimState(this.row + 1, newPos);
  }
}
