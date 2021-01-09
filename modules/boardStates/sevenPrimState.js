import { Position, mirrorIfOdd } from '../position.js';
import BaseState from './baseState.js';
import LeakyHatPrimState from './leakyHatPrimState.js';
import LambdaState from './lambdaState.js';

// _-_x_-_-
// -_x_x_-_
// _-_-_x_-
export default class SevenPrimState extends BaseState {
  constructor(row, sheepPos) {
    let wolves = [
      new Position(row + 1, 2),
      new Position(row, 3),
      new Position(row + 1, 4),
      new Position(row + 2, 5),
    ];

    super(mirrorIfOdd(wolves, row), sheepPos);
    this.row = row;
  }

  move(newPos) {
    if (mirrorIfOdd(newPos, this.row).col < 3)
      return new LeakyHatPrimState(this.row, newPos);
    else return new LambdaState(this.row, newPos);
  }
}
