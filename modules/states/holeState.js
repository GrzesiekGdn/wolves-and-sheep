import { Position, mirrorIfOdd } from '../position.js';
import { BaseState } from './baseState.js';
import { HoleZetState } from './holeZetState.js';

// _x_-_x_x
// -_-_x_-_
export class HoleState extends BaseState {
  constructor(row, sheepPos) {
    let wolves = [
      new Position(row, 1),
      new Position(row + 1, 4),
      new Position(row, 5),
      new Position(row, 7),
    ];

    super(mirrorIfOdd(wolves, row), sheepPos);
    this.row = row;
  }

  move(newPos) {
    return new HoleZetState(this.row, newPos);
  }
}
