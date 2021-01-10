import { Position, mirrorIfOdd } from '../position.js';
import BaseState from './baseState.js';
import ReverseSevenPrimState from './reverseSevenPrimState.js';

// _-_-_x_-
// -_x_x_x_
export default class ReverseHookSecState extends BaseState {
  constructor(row, sheepPos) {
    let wolves = [
      new Position(row + 1, 2),
      new Position(row + 1, 4),
      new Position(row, 5),
      new Position(row + 1, 6),
    ];

    super(mirrorIfOdd(wolves, row), sheepPos);
    this.row = row;
  }

  move(newPos) {
    return new ReverseSevenPrimState(this.row, newPos);
  }
}
