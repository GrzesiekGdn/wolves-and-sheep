import { Position, mirrorIfOdd } from '../position.js';
import { BaseState } from './baseState.js';
import { HoleZetState } from './holeZetState.js';

// _-_x_x_-
// -_x_-_x_
export class ReverseUState extends BaseState {
  constructor(row, sheepPos) {
    let wolves = [
      new Position(row + 1, 2),
      new Position(row, 3),
      new Position(row, 5),
      new Position(row + 1, 6),
    ];

    super(mirrorIfOdd(wolves, row), sheepPos);
    this.row = row;
  }

  move(newPos) {
    return new HoleZetState(this.row, newPos);
  }
}
