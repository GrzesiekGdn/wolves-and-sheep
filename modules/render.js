export function renderTable(table, state) {
  for (var row = 0; row < 8; row++) {
    for (var col = 0; col < 8; col++) {
      const val = state.getValue(row, col);
      const picture = val === 'w' ? 'wolf.png' : val === 's' ? 'sheep.png' : '';

      var innerHtml = `<img src='${picture}'>`;
      table.rows[row].cells[col].innerHTML = innerHtml;
    }
  }
}
