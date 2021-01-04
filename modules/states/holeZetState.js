import { Position } from '../position.js';
import { BaseState, mirrorIfEven } from './baseState.js';
import { SevenState } from './sevenState.js';

// x x
//    x x
export class HoleZetState extends BaseState {
  constructor(row, sheepPos) {
    let wolves = [
      new Position(row, 0),
      new Position(row, 2),
      new Position(row + 1, 3),
      new Position(row + 1, 5),
    ];

    super(mirrorIfEven(wolves, row), sheepPos);
    this.row = row;
  }

  move(newPos) {
    return new SevenState(this.row, newPos);
  }
}
