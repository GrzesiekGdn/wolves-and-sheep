export class Position {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
}

export const mirror = (wolves) => {
  if (!Array.isArray(wolves)) {
    return new Position(wolves.row, 7 - wolves.col);
  }

  return wolves.map((w) => new Position(w.row, 7 - w.col));
};

export const mirrorIfOdd = (wolves, row) => {
  if (row % 2 !== 0) {
    return mirror(wolves);
  }
  return wolves;
};
