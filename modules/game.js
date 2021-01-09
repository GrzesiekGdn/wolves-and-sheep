import { Position } from './position.js';
import LineState from './boardStates/lineState.js';
import { GameStatus } from './gameStatus.js';

export default class Game {
  constructor(renderGame) {
    this.renderGame = renderGame;
    this.initGame();
  }

  initGame() {
    const boardState = new LineState(0, new Position(7, 4));
    const gameStatus = GameStatus.PlayerTime;

    this.gameState = new GameState(boardState, gameStatus);
    this.renderGame(this.gameState);
  }

  moveSheepTo(row, col) {
    const boardState = this.gameState.boardState;
    const sheep = boardState.sheep;

    var newPos = new Position(row, col);

    if (!boardState.isAvailable(newPos)) {
      console.log('not available');
      return;
    }

    boardState.sheep = newPos;

    const statusAfterPlayer =
      newPos.row === 0 ? GameStatus.SheepWon : GameStatus.ComputerTime;
    this.gameState = new GameState(boardState, statusAfterPlayer);
    this.renderGame(this.gameState);

    if (statusAfterPlayer != GameStatus.ComputerTime) {
      return;
    }

    const newBoardState = boardState.move(newPos);
    const statusAfterComputer = newBoardState.areWolvesWin()
      ? GameStatus.WolvesWon
      : GameStatus.PlayerTime;

    this.gameState = new GameState(newBoardState, statusAfterComputer);

    setTimeout(
      (r, s) => {
        r(s);
      },
      100,
      this.renderGame,
      this.gameState
    );
  }
}

class GameState {
  constructor(boardState, status) {
    this.boardState = boardState;
    this.status = status;
  }
}
