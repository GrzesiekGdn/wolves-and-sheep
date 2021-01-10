import { Position, mirrorIfOdd } from '../position.js';
import BaseState from './baseState.js';

// _-_-_x_-
// -_-_x_x_
// _-_x_-_-
export default class ReverseSevenPrimState extends BaseState {
  constructor(row, sheepPos) {
    let wolves = [
      new Position(row + 2, 3),
      new Position(row + 1, 4),
      new Position(row, 5),
      new Position(row + 1, 6),
    ];

    super(mirrorIfOdd(wolves, row), sheepPos);
    this.row = row;
  }

  move(newPos) {
    // wilki stają wryte, bo ta pozycja prowadzi do wygranej owcy!
    return new ReverseSevenPrimState(row, newPos);
  }
}
