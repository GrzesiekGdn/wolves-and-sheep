import { Position } from '../position.js';
import { BaseState, mirrorIfEven } from './baseState.js';
import { ReverseUState } from './reverseUState.js';

export class HoleHookState extends BaseState {
  constructor(row, sheepPos) {
    let wolves = [
      new Position(row, 0),
      new Position(row, 2),
      new Position(row, 4),
      new Position(row + 1, 5),
    ];

    super(mirrorIfEven(wolves, row), sheepPos);
    this.row = row;
  }

  move(newPos) {
    return new ReverseUState(this.row, newPos);
  }
}
