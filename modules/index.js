import { initGame, moveSheep } from '/modules/game.js';
import { renderTable } from '/modules/render.js';

var state = initGame();

const board = document.getElementById('chessboard');
renderTable(board, state);

document.getElementById('leftUp').addEventListener('click', () => move(1, -1));
document.getElementById('rightUp').addEventListener('click', () => move(1, 1));
document
  .getElementById('leftDown')
  .addEventListener('click', () => move(-1, -1));
document
  .getElementById('rightDown')
  .addEventListener('click', () => move(-1, 1));

const move = (up, right) => {
  console.log(up, right);
  console.log(state);
  state = moveSheep(state, up, right);
  console.log(state);
  renderTable(board, state);
};
