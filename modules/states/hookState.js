import { Position } from '../position.js';
import { BaseState, mirror } from './baseState.js';
import { ZetState } from './zetState.js';

//   x x x
// x
export class HookState extends BaseState {
  constructor(row, sheepPos) {
    let w = [
      new Position(row + 1, 1),
      new Position(row, 2),
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
    return new ZetState(this.row, newPos);
  }
}
