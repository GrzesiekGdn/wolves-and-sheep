import { Position, mirrorIfOdd } from '../position.js';
import BaseState from './baseState.js';
import ReverseUState from './reverseUState.js';

// _-_x_-_-
// -_-_x_-_
// _x_-_x_-

export default class LeakyHatPrimState extends BaseState {
  constructor(row, sheepPos) {
    let wolves = [
      new Position(row + 2, 1),
      new Position(row, 3),
      new Position(row + 1, 4),
      new Position(row + 2, 5),
    ];

    super(mirrorIfOdd(wolves, row), sheepPos);
    this.row = row;
  }

  move(newPos) {
    return new ReverseUState(this.row + 1, newPos);
  }
}
