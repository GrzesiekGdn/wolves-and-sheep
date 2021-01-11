import { Position, mirrorIfOdd } from '../position.js';
import BaseState from './baseState.js';
import ReverseUState from './reverseUState.js';
import ReverseZetState from './reverseZetState.js';

// -_x_x_x_
// _x_-_-_-
export default class SideHoleState extends BaseState {
  constructor(row, sheepPos) {
    let wolves = [
      new Position(row + 1, 2),
      new Position(row, 3),
      new Position(row, 5),
      new Position(row, 7),
    ];

    super(mirrorIfOdd(wolves, row), sheepPos);
    this.row = row;
  }

  move(newPos) {
    const bestPos = mirrorIfOdd(new Position(this.row + 1, 6));
    console.log('bestPos', bestPos);
    if (newPos.row != bestPos.row || newPos.col != bestPos.col) {
      return new ReverseUState(this.row, newPos);
    } else return new ReverseZetState(this.row, newPos);
  }
}
