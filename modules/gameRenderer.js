import { GameStatus } from './gameStatus.js';

export default class GameRenderer {
  constructor(board, statusDiv) {
    this.board = board;
    this.statusDiv = statusDiv;
  }

  renderGame(gameState) {
    const state = gameState.boardState;

    for (var row = 0; row < 8; row++) {
      for (var col = 0; col < 8; col++) {
        const val = state.getValue(row, col);
        const picture =
          val === 'w' ? 'wolf.png' : val === 's' ? 'sheep.png' : '';

        var innerHtml = `<img src='${picture}'>`;
        this.board.rows[row].cells[col].innerHTML = innerHtml;
      }
    }

    let statusText = '';
    const status = gameState.status;
    if (status === GameStatus.WolvesWon) {
      statusText = 'Wolves won!';
    } else if (status === GameStatus.SheepWon) {
      statusText = 'Your sheep won!';
    }
    this.statusDiv.innerHTML = `<h1>${statusText}</h1>`;
  }
}
