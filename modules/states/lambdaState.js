import { Position, mirrorIfOdd } from '../position.js';
import BaseState from './baseState.js';
import LongLambdaState from './longLambdaState.js';
import ParllelPrimState from './parallelPrimState.js';

// _-_x_-_-
// -_-_x_-_
// _-_x_x_-
export default class LambdaState extends BaseState {
  constructor(row, sheepPos) {
    let wolves = [
      new Position(row, 3),
      new Position(row + 1, 4),
      new Position(row + 2, 3),
      new Position(row + 2, 5),
    ];

    super(mirrorIfOdd(wolves, row), sheepPos);
    this.row = row;
  }

  move(newPos) {
    if (mirrorIfOdd(newPos, this.row).col > 4)
      return new LongLambdaState(this.row, newPos);
    else return new ParllelPrimState(this.row + 1, newPos);
  }
}
