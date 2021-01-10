import { Position, mirrorIfOdd } from '../position.js';
import BaseState from './baseState.js';
import ReverseHookSecState from './reverseHookSecState.js';

// _-_-_x_x
// -_x_x_-_

export default class ReverseZetState extends BaseState {
  constructor(row, sheepPos) {
    let wolves = [
      new Position(row + 1, 2),
      new Position(row + 1, 4),
      new Position(row, 5),
      new Position(row, 7),
    ];

    super(mirrorIfOdd(wolves, row), sheepPos);
    this.row = row;
  }

  move(newPos) {
    return new ReverseHookSecState(this.row, newPos);
  }
}
