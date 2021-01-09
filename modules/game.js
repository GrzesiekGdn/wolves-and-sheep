import { Position } from './position.js';
import LineState from './boardStates/lineState.js';
import { GameStatus } from './gameStatus.js';

export default class Game {
  constructor(gameRenderer) {
    this.gameRenderer = gameRenderer;
    this.initGame();
  }

  initGame() {
    const boardState = new LineState(0, new Position(7, 4));
    const gameStatus = GameStatus.PlayerTime;

    this.gameState = new GameState(boardState, gameStatus);
    this.gameRenderer.renderGame(this.gameState);
  }

  moveSheep(up, right) {
    const boardState = this.gameState.boardState;
    const sheep = boardState.sheep;

    var newPos = new Position(sheep.row - up, sheep.col + right);

    if (!boardState.isAvailable(newPos)) {
      console.log('not available');
      return;
    }

    boardState.sheep = newPos;

    const statusAfterPlayer =
      newPos.row === 0 ? GameStatus.SheepWon : GameStatus.ComputerTime;
    this.gameState = new GameState(boardState, statusAfterPlayer);
    this.gameRenderer.renderGame(this.gameState);

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
        r.renderGame(s);
      },
      500,
      this.gameRenderer,
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
