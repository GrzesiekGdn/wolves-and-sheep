import { Position } from './position.js';
import LineState from './boardStates/lineState.js';
import { GameStatus } from './gameStatus.js';
import SideHoleState from './boardStates/sideHoleState.js';
import TwoHolesParallelState from './boardStates/twoHolesParallelState.js';

export default class Game {
  constructor(renderGame) {
    this.renderGame = renderGame;
    this.initGame();
  }

  initGame() {
    //const boardState = new LineState(0, new Position(7, 4));
    //const boardState = new ReverseHookSecState(0, new Position(2, 5));
    //const boardState = new SideHoleState(1, new Position(3, 2));
    const boardState = new TwoHolesParallelState(1, new Position(4, 3));
    const gameStatus = GameStatus.PlayerTime;

    this.gameState = new GameState(boardState, gameStatus);
    this.renderGame(this.gameState);
  }

  moveSheepTo(row, col) {
    const boardState = this.gameState.boardState;
    if (this.gameState.status != GameStatus.PlayerTime) {
      return;
    }

    var newPos = new Position(row, col);

    if (!boardState.isAvailable(newPos)) {
      console.log('not available');
      return;
    }

    boardState.setSheep(newPos);
    const statusAfterPlayer =
      newPos.row === 0 ? GameStatus.SheepWon : GameStatus.ComputerTime;
    this.gameState = new GameState(boardState, statusAfterPlayer);
    this.renderGame(this.gameState);

    if (statusAfterPlayer == GameStatus.SheepWon) {
      return;
    }

    const newBoardState = boardState.move(newPos);
    const statusAfterComputer = newBoardState.areWolvesWin()
      ? GameStatus.WolvesWon
      : GameStatus.PlayerTime;

    const gameStateAfterComputer = new GameState(
      newBoardState,
      statusAfterComputer
    );

    setTimeout(
      (t, s) => {
        t.gameState = s;
        t.renderGame(s);
      },
      100,
      this,
      gameStateAfterComputer
    );
  }
}

class GameState {
  constructor(boardState, status) {
    this.boardState = boardState;
    this.status = status;
  }
}
