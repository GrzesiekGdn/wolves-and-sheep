import { Position } from '../position.js';
import { BaseState, mirror } from './baseState.js';
import { ReverseHookState } from './reverseHookState.js';

//     x x
// x x
export class ZetState extends BaseState {
  constructor(row, sheepPos) {
    let w = [
      new Position(row + 1, 1),
      new Position(row + 1, 3),
      new Position(row, 4),
      new Position(row, 6),
    ];

    if (row % 2 === 1) {
      w = mirror(w);
    }

    super(w, sheepPos);
    this.row = row;
  }

  move(newPos) {
    return new ReverseHookState(this.row, newPos);
  }
}
