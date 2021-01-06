import { Position, mirrorIfOdd } from '../position.js';
import BaseState from './baseState.js';
import SevenState from './sevenState.js';

// _-_-_x_x
// x_x_-_-_
export default class HoleZetState extends BaseState {
  constructor(row, sheepPos) {
    let wolves = [
      new Position(row + 1, 0),
      new Position(row + 1, 2),
      new Position(row, 5),
      new Position(row, 7),
    ];

    super(mirrorIfOdd(wolves, row), sheepPos);
    this.row = row;
  }

  move(newPos) {
    return new SevenState(this.row, newPos);
  }
}
