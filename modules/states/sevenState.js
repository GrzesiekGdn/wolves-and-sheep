import { Position } from '../position.js';
import { BaseState, mirrorIfEven } from './baseState.js';
import { ReverseHookState } from './reverseHookState.js';

// x x
//    x
//     x
export class SevenState extends BaseState {
  constructor(row, sheepPos) {
    let wolves = [
      new Position(row, 0),
      new Position(row, 2),
      new Position(row + 1, 3),
      new Position(row + 2, 4),
    ];

    super(mirrorIfEven(wolves, row), sheepPos);
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

    super(mirrorIfEven(wolves, row), sheepPos);
    this.row = row;
  }

  move(newPos) {
    return new ReverseHookState(this.row, newPos);
  }
}
