import { Position, mirrorIfOdd } from '../position.js';
import BaseState from './baseState.js';
import ZetState from './zetState.js';

// _-_-_x_-
// -_-_-_x_
// _x_x_-_-
export default class TwoOnBackState extends BaseState {
  constructor(row, sheepPos) {
    let wolves = [
      new Position(row + 2, 1),
      new Position(row + 2, 3),
      new Position(row, 5),
      new Position(row + 1, 6),
    ];

    super(mirrorIfOdd(wolves, row), sheepPos);
    this.row = row;
  }

  move(newPos) {
    return new ZetState(this.row + 1, newPos);
  }
}
