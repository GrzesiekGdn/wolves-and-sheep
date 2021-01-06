import { Position, mirrorIfOdd } from '../position.js';
import BaseState from './baseState.js';
import ReverseParallelState from './reverseParallelState.js';

// _-_x_-_-
// -_-_-_-_
// _-_x_x_-
// _-_-_-_x
export default class LongLambdaPrimState extends BaseState {
  constructor(row, sheepPos) {
    let wolves = [
      new Position(row, 3),
      new Position(row + 2, 3),
      new Position(row + 2, 5),
      new Position(row + 3, 6),
    ];

    super(mirrorIfOdd(wolves, row), sheepPos);
    this.row = row;
  }

  move(newPos) {
    return new ReverseParallelState(this.row + 1, newPos);
  }
}
