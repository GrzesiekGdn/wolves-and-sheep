import Game from './game.js';

document.getElementById('leftUp').addEventListener('click', () => move(1, -1));
document.getElementById('rightUp').addEventListener('click', () => move(1, 1));
document
  .getElementById('leftDown')
  .addEventListener('click', () => move(-1, -1));
document
  .getElementById('rightDown')
  .addEventListener('click', () => move(-1, 1));

const board = document.getElementById('chessboard');
const game = new Game(board);

const move = (up, right) => {
  game.moveSheep(up, right);
};
