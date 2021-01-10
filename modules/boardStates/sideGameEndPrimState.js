import { Position, mirrorIfOdd } from '../position.js';
import BaseState from './baseState.js';

// _x_-_-_-
// o_-_x_x_
// _x_-_-_-
export default class SideGameEndPrimState extends BaseState {
  constructor(row, sheepPos) {
    let wolves = [
      new Position(row, 1),
      new Position(row + 2, 1),
      new Position(row + 1, 4),
      new Position(row + 1, 6),
    ];

    super(mirrorIfOdd(wolves, row), sheepPos);
    this.row = row;
  }

  move(newPos) {}
}
