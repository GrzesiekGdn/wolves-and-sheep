import { Position } from '../position.js';
import { BaseState, mirrorIfEven } from './baseState.js';
import { HoleZetState } from './holeZetState.js';

export class ReverseUState extends BaseState {
  constructor(row, sheepPos) {
    let wolves = [
      new Position(row + 1, 1),
      new Position(row, 2),
      new Position(row, 4),
      new Position(row + 1, 5),
    ];

    super(mirrorIfEven(wolves, row), sheepPos);
    this.row = row;
  }

  move(newPos) {
    return new HoleZetState(this.row, newPos);
  }
}
