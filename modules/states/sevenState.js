import { Position, mirrorIfOdd } from '../position.js';
import { BaseState } from './baseState.js';
import { ReverseHookState } from './reverseHookState.js';

// _-_-_x_x
// -_-_x_-_
// _-_x_-_-
export class SevenState extends BaseState {
  constructor(row, sheepPos) {
    let wolves = [
      new Position(row + 2, 3),
      new Position(row + 1, 4),
      new Position(row, 5),
      new Position(row, 7),
    ];

    super(mirrorIfOdd(wolves, row), sheepPos);
    this.row = row;
  }

  move(newPos) {
    return new SevenPrimeState(this.row, newPos);
  }
}

export class SevenPrimeState extends BaseState {
  constructor(row, sheepPos) {
    let wolves = [
      new Position(row + 1, 1),
      new Position(row, 2),
      new Position(row + 1, 3),
      new Position(row + 2, 4),
    ];

    super(mirrorIfOdd(wolves, row), sheepPos);
    this.row = row;
  }

  move(newPos) {
    return new ReverseHookState(this.row, newPos);
  }
}
