import Game from './game.js';
import { GameStatus } from './gameStatus.js';

document
  .getElementById('restartGame')
  .addEventListener('click', () => game.initGame());

const board = document.getElementById('chessboard');
const statusDiv = document.getElementById('statusDiv');

const renderGame = (gameState) => {
  const state = gameState.boardState;

  for (var row = 0; row < 8; row++) {
    for (var col = 0; col < 8; col++) {
      const cell = board.rows[row].cells[col];

      const val = state.getValue(row, col);
      const picture = val === 'w' ? 'wolf.png' : val === 's' ? 'sheep.png' : '';
      var innerHtml = `<img src='${picture}'>`;

      if (val === 'a') {
        cell.classList.add('available');
      } else {
        cell.classList.remove('available');
      }

      cell.innerHTML = innerHtml;
    }
  }

  let statusText = '';
  const status = gameState.status;
  if (status === GameStatus.WolvesWon) {
    statusText = 'Wolves won!';
  } else if (status === GameStatus.SheepWon) {
    statusText = 'Your sheep won!';
  }

  statusDiv.innerHTML = `<h1>${statusText}</h1>`;
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
