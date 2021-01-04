import { Position } from '../position.js';
import { BaseState, mirrorIfEven } from './baseState.js';
import { HoleZetState } from './holeZetState.js';

// x x   x
//    x
export class HoleState extends BaseState {
  constructor(row, sheepPos) {
    let wolves = [
      new Position(row, 0),
      new Position(row, 2),
      new Position(row + 1, 3),
      new Position(row, 6),
    ];

    super(mirrorIfEven(wolves, row), sheepPos);
    this.row = row;
  }

  move(newPos) {
    return new HoleZetState(this.row, newPos);
  }
}
