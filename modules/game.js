import { Position } from './position.js';
import LineState from './states/lineState.js';
import ZetState from './states/zetState.js';
import ReverseUState from './states/reverseUState.js';
import SevenPrimState from './states/sevenPrimState.js';

export function initGame() {
  //return new LineState(0, new Position(2, 5));
  //return new ZetState(0, new Position(2, 1)); // nie skończone testy
  return new SevenPrimState(0, new Position(2, 3));
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
