import { Position, mirrorIfOdd } from '../position.js';
import BaseState from './baseState.js';

// _x_-_-_-
// o_-_x_-_
// _x_-_x_-
export default class SideGameEndState extends BaseState {
  constructor(row, sheepPos) {
    let wolves = [
      new Position(row, 1),
      new Position(row + 2, 1),
      new Position(row + 1, 4),
      new Position(row + 2, 5),
    ];

    super(mirrorIfOdd(wolves, row), sheepPos);
    this.row = row;
  }

  move(newPos) {}
}
