import { Position } from './position.js';
import { LineState } from './states/lineState.js';

export function initGame() {
  return new LineState(0, new Position(7, 3));
}

export function moveSheep(state, up, right) {
  const sheep = state.sheep;

  var newPos = new Position(sheep.row - up, sheep.col + right);

  if (!state.isAvailable(newPos)) {
    console.log('not available');
    return state;
  }

  return state.move(newPos);
}
