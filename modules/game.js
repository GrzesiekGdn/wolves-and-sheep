import { Position } from './position.js';
import renderTable from '/modules/render.js';
import LineState from './states/lineState.js';

export default class Game {
  constructor(board) {
    this.board = board;
    this.initGame();
  }

  initGame() {
    this.state = new LineState(0, new Position(7, 4));
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
      alert('Your sheep won!');
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
