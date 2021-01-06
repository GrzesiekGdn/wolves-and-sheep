import { Position, mirrorIfOdd } from '../position.js';
import BaseState from './baseState.js';
import LongLambdaPrimState from './longLambdaPrimState.js';

// _-_x_-_-
// -_-_x_-_
// _-_x_-_-
// _-_-_-_x
export default class LongLambdaState extends BaseState {
  constructor(row, sheepPos) {
    let wolves = [
      new Position(row, 3),
      new Position(row + 1, 4),
      new Position(row + 2, 3),
      new Position(row + 3, 6),
    ];

    super(mirrorIfOdd(wolves, row), sheepPos);
    this.row = row;
  }

  move(newPos) {
    return new LongLambdaPrimState(this.row, newPos);
  }
}
