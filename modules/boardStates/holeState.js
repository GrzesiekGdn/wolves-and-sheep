import { Position, mirrorIfOdd } from '../position.js';
import BaseState from './baseState.js';
import TwoHolesState from './twoHolesState.js';

// _x_-_x_-
// -_-_x_x_
export default class HoleState extends BaseState {
  constructor(row, sheepPos) {
    let wolves = [
      new Position(row, 1),
      new Position(row + 1, 4),
      new Position(row, 5),
      new Position(row + 1, 6),
    ];

    super(mirrorIfOdd(wolves, row), sheepPos);
    this.row = row;
  }

  move(newPos) {
    return new TwoHolesState(this.row, newPos);
  }
}
