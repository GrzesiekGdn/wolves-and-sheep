import { Position } from '../position.js';
import { BaseState, mirrorIfEven } from './baseState.js';
import { LineState } from './lineState.js';

//       x
// x x x
export class ReverseHookState extends BaseState {
  constructor(row, sheepPos) {
    let wolves = [
      new Position(row + 1, 1),
      new Position(row + 1, 3),
      new Position(row + 1, 5),
      new Position(row, 6),
    ];

    super(mirrorIfEven(wolves, row), sheepPos);
    this.row = row;
  }

  move(newPos) {
    return new LineState(this.row + 1, newPos);
  }
}
