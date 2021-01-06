import { Position, mirrorIfOdd } from '../position.js';
import BaseState from './baseState.js';
import SideHolePrimState from './sideHolePrimState.js';

// _-_x_-_-
// -_x_x_x_
export default class ReverseHookPrimState extends BaseState {
  constructor(row, sheepPos) {
    let wolves = [
      new Position(row + 1, 2),
      new Position(row, 3),
      new Position(row + 1, 4),
      new Position(row + 1, 6),
    ];

    super(mirrorIfOdd(wolves, row), sheepPos);
    this.row = row;
  }

  move(newPos) {
    return new SideHolePrimState(this.row, newPos);
  }
}
