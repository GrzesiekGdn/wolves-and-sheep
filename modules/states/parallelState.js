import { Position, mirrorIfOdd } from '../position.js';
import BaseState from './baseState.js';
import SideGameEndState from './sideGameEndState.js';
import SideHoleState from './sideHoleState.js';

// _x_-_-_-
// -_x_x_-_
// _-_-_x_-
export default class ParallelState extends BaseState {
  constructor(row, sheepPos) {
    let wolves = [
      new Position(row, 1),
      new Position(row + 1, 2),
      new Position(row + 1, 4),
      new Position(row + 2, 5),
    ];

    super(mirrorIfOdd(wolves, row), sheepPos);
    this.row = row;
  }

  move(newPos) {
    const bestPos = mirrorIfOdd(new Position(this.row + 1, 0), this.row);

    if (newPos.row == bestPos.row && newPos.col == bestPos.col) {
      return new SideGameEndState(this.row, newPos);
    } else return new SideHoleState(this.row + 1, newPos);
  }
}
