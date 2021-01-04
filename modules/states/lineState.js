import { Position } from '../position.js';
import { BaseState, mirrorIfEven } from './baseState.js';
import { HookState } from './hookState.js';
import { HoleState } from './holeState.js';

// x x x x
export class LineState extends BaseState {
  constructor(row, sheepPos) {
    let wolves = [
      new Position(row, 0),
      new Position(row, 2),
      new Position(row, 4),
      new Position(row, 6),
    ];

    super(mirrorIfEven(wolves, row), sheepPos);
    this.row = row;
  }

  move(newPos) {
    const bestPos = mirrorIfEven(new Position(this.row + 1, 1), this.row);
    console.log(bestPos);

    if (newPos.row != bestPos.row || newPos.col != bestPos.row) {
      return new HookState(this.row, newPos);
    } else {
      return new HoleState(this.row, newPos);
    }
  }
}
