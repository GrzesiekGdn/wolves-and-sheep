import { Position, mirrorIfOdd } from '../position.js';
import BaseState from './baseState.js';
import ZetState from './zetState.js';

// _-_-_-_-
// -_x_x_x_
// _-_x_-_-
export default class HoleTPrimState extends BaseState {
  constructor(row, sheepPos) {
    let wolves = [
      new Position(row + 1, 2),
      new Position(row + 2, 3),
      new Position(row + 1, 4),
      new Position(row + 1, 6),
    ];

    super(mirrorIfOdd(wolves, row), sheepPos);
    this.row = row;
  }

  move(newPos) {
    return new ZetState(this.row + 1, newPos);
  }
}
