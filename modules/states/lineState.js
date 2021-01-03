import { Position } from '../position.js';
import { BaseState } from './baseState.js';
import { HookState } from './hookState.js';

// x x x x
export class LineState extends BaseState {
  constructor(row, sheepPos) {
    const startIndex = row % 2 === 0 ? 0 : 1;
    const w = [];
    for (let i = startIndex; i < 8; i += 2) {
      w.push(new Position(row, i));
    }

    super(w, sheepPos);
    this.row = row;
  }

  move(newPos) {
    if (newPos.row !== this.row + 1 || newPos.col != 1) {
      return new HookState(this.row, newPos);
    } else {
      return LineState(this.row, newPos);
    }
  }
}
