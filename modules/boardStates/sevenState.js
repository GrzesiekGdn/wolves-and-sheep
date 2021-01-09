import { Position, mirrorIfOdd } from '../position.js';
import BaseState from './baseState.js';
import SevenPrimState from './sevenPrimState.js';
import ParallelState from './parallelState.js';

// _x_x_-_-
// -_-_x_-_
// _-_-_x_-
export default class SevenState extends BaseState {
  constructor(row, sheepPos) {
    let wolves = [
      new Position(row, 1),
      new Position(row, 3),
      new Position(row + 1, 4),
      new Position(row + 2, 5),
    ];

    super(mirrorIfOdd(wolves, row), sheepPos);
    this.row = row;
  }

  move(newPos) {
    if (mirrorIfOdd(newPos, this.row).col < 3)
      return new ParallelState(this.row, newPos);
    else return new SevenPrimState(this.row, newPos);
  }
}
