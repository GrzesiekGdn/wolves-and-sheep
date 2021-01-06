import { Position, mirrorIfOdd } from '../position.js';
import BaseState from './baseState.js';
import { TwoHolesParallelState } from './twoHolesParallelState.js';
import DepthHoleState from './depthHoleState.js';

// _x_-_x_-
// -_-_-_x_
// _-_x_-_-
export default class TwoHolesState extends BaseState {
  constructor(row, sheepPos) {
    let wolves = [
      new Position(row, 1),
      new Position(row + 2, 3),
      new Position(row, 5),
      new Position(row + 1, 6),
    ];

    super(mirrorIfOdd(wolves, row), sheepPos);
    this.row = row;
  }

  move(newPos) {
    if (mirrorIfOdd(newPos, this.row).col < 4)
      return new TwoHolesParallelState(this.row, newPos);
    else return new DepthHoleState(this.row, newPos);
  }
}
