import { Position, mirrorIfOdd } from '../position.js';
import BaseState from './baseState.js';

// _-_x_x_-
// -_x_x_-_
export default class ParllelPrimState extends BaseState {
  constructor(row, sheepPos) {
    let wolves = [
      new Position(row, 3),
      new Position(row, 5),
      new Position(row + 1, 2),
      new Position(row + 1, 4),
    ];

    super(mirrorIfOdd(wolves, row), sheepPos);
    this.row = row;
  }

  move(newPos) {}
}
