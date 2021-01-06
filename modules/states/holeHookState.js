import { Position, mirrorIfOdd } from '../position.js';
import { BaseState } from './baseState.js';
import { ReverseUState } from './reverseUState.js';

// _-_x_x_x
// x_-_-_-_
export class HoleHookState extends BaseState {
  constructor(row, sheepPos) {
    let wolves = [
      new Position(row + 1, 0),
      new Position(row, 3),
      new Position(row, 5),
      new Position(row, 7),
    ];

    super(mirrorIfOdd(wolves, row), sheepPos);
    this.row = row;
  }

  move(newPos) {
    return new ReverseUState(this.row, newPos);
  }
}
