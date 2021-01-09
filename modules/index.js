import Game from './game.js';
import GameRenderer from './gameRenderer.js';

document
  .getElementById('leftUp')
  .addEventListener('click', () => game.moveSheep(1, -1));
document
  .getElementById('rightUp')
  .addEventListener('click', () => game.moveSheep(1, 1));
document
  .getElementById('leftDown')
  .addEventListener('click', () => game.moveSheep(-1, -1));
document
  .getElementById('rightDown')
  .addEventListener('click', () => game.moveSheep(-1, 1));
document
  .getElementById('restartGame')
  .addEventListener('click', () => game.initGame());

const board = document.getElementById('chessboard');
const statusDiv = document.getElementById('statusDiv');
const gameRenderer = new GameRenderer(board, statusDiv);

const game = new Game(gameRenderer);
