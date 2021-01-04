import { Position } from '../position.js';
import { BaseState, mirrorIfEven } from './baseState.js';
import { ReverseHookState } from './reverseHookState.js';

//     x x
// x x
export class ZetState extends BaseState {
  constructor(row, sheepPos) {
    let wolves = [
      new Position(row + 1, 1),
      new Position(row + 1, 3),
      new Position(row, 4),
      new Position(row, 6),
    ];

    super(mirrorIfEven(wolves, row), sheepPos);
    this.row = row;
  }

  move(newPos) {
    return new ReverseHookState(this.row, newPos);
  }
}
