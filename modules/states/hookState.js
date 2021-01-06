import { Position, mirrorIfOdd } from '../position.js';
import BaseState from './baseState.js';
import ZetState from './zetState.js';

// _x_x_x_-
// -_-_-_x_
export default class HookState extends BaseState {
  constructor(row, sheepPos) {
    let wolves = [
      new Position(row, 1),
      new Position(row, 3),
      new Position(row, 5),
      new Position(row + 1, 6),
    ];

    super(mirrorIfOdd(wolves, row), sheepPos);
    this.row = row;
  }

  move(newPos) {
    return new ZetState(this.row, newPos);
  }
}
