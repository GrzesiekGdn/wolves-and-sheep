import Game from './game.js';
import { GameStatus } from './gameStatus.js';

document
  .getElementById('restartGame')
  .addEventListener('click', () => game.initGame());

const board = document.getElementById('chessboard');
const statusDiv = document.getElementById('statusDiv');

const renderGame = (gameState) => {
  const state = gameState.boardState;
  const gameStatus = gameState.status;

  console.log('render', state);

  for (var row = 0; row < 8; row++) {
    for (var col = 0; col < 8; col++) {
      const cell = board.rows[row].cells[col];

      const val = state.getValue(row, col);
      const picture = val === 'w' ? 'wolf.png' : val === 's' ? 'sheep.png' : '';

      if (picture !== '') {
        var innerHtml = `<img src='${picture}'>`;
        cell.innerHTML = innerHtml;
      } else {
        cell.innerHTML = '';
      }

      if (gameStatus === GameStatus.PlayerTime && val === 'a') {
        cell.classList.add('available');
      } else {
        cell.classList.remove('available');
      }
    }
  }

  let statusText = '';
  const status = gameState.status;
  if (status === GameStatus.WolvesWon) {
    statusText = 'Wilki wygrały!';
  } else if (status === GameStatus.SheepWon) {
    statusText = 'Wygrałeś!';
  }

  statusDiv.innerHTML = `<h2>${statusText}</h2>`;
};

const game = new Game(renderGame);

const moveTo = (row, col) => {
  return (e) => {
    if (e.target.classList.contains('available')) {
      game.moveSheepTo(row, col);
    }
  };
};

for (var row = 0; row < 8; row++) {
  for (var col = 0; col < 8; col++) {
    const cell = board.rows[row].cells[col];
    cell.addEventListener('click', moveTo(row, col));
  }
}
