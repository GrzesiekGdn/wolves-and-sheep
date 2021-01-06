import { Position, mirrorIfOdd } from '../position.js';
import BaseState from './baseState.js';
import ReverseUState from './reverseUState.js';
import ZetState from './zetState.js';

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
    const mirroredPos = mirrorIfOdd(newPos, this.row);
    console.log('mirroredpos:', mirroredPos);

    if (mirroredPos.row === this.row + 1 && mirroredPos.col === 4)
      return new ReverseUState(this.row, newPos);
    else return new ZetState(this.row + 1, newPos);
  }
}
