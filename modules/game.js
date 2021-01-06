import { Position } from './position.js';
import { renderTable } from '/modules/render.js';
import LineState from './states/lineState.js';
import ZetState from './states/zetState.js';
import ReverseUState from './states/reverseUState.js';
import SevenPrimState from './states/sevenPrimState.js';
import BaseState from './states/baseState.js';

export default class Game {
  constructor(board) {
    this.board = board;
    this.initGame();
  }

  initGame() {
    this.state = new LineState(0, new Position(7, 4));
    //this.state = new ZetState(0, new Position(2, 1)); // not finished
    //this.state = new SevenPrimState(0, new Position(2, 3));
    renderTable(this.board, this.state);
  }

  moveSheep(up, right) {
    const sheep = this.state.sheep;

    var newPos = new Position(sheep.row - up, sheep.col + right);

    if (!this.state.isAvailable(newPos)) {
      console.log('not available');
      return;
    }

    this.state.sheep = newPos;
    renderTable(this.board, this.state);

    if (newPos.row === 0) {
      alert('The sheep won!');
      this.initGame();
      return;
    }

    this.state = this.state.move(newPos);

    setTimeout(
      (b, s) => {
        renderTable(b, s);
        if (s.areWolvesWin()) {
          alert('Wolves won!');
          this.initGame();
        }
      },
      100,
      this.board,
      this.state
    );
  }
}
