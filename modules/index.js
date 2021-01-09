import Game from './game.js';
import GameRenderer from './gameRenderer.js';

document.getElementById('leftUp').addEventListener('click', () => move(1, -1));
document.getElementById('rightUp').addEventListener('click', () => move(1, 1));
document
  .getElementById('leftDown')
  .addEventListener('click', () => move(-1, -1));
document
  .getElementById('rightDown')
  .addEventListener('click', () => move(-1, 1));
document
  .getElementById('restartGame')
  .addEventListener('click', () => restart());

const board = document.getElementById('chessboard');
const statusDiv = document.getElementById('statusDiv');
const gameRenderer = new GameRenderer(board, statusDiv);

const game = new Game(gameRenderer);

const move = (up, right) => {
  game.moveSheep(up, right);
};

const restart = () => {
  game.initGame();
};
