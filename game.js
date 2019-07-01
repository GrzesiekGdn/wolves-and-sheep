function initGame() {
    return [
        ['w', '', 'w', '', 'w', '', 'w', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['q', '', '', 's', '', '', '', '']
    ];
}

function moveSheep(state, up, right) {
    sheep = foundSheep(state);

    var newPos = { row: sheep.row - up, col: sheep.col + right };

    if (isAvailable(state, newPos)) {
        state[sheep.row][sheep.col] = '';
        state[newPos.row][newPos.col] = 's';
    }
    return state;
}

function isAvailable(state, newPos) {
    return newPos.row >= 0 && newPos.col >= 0 && newPos.row < 8 && newPos.col < 8
        && state[newPos.row][newPos.col] != 'w';
}

function foundSheep(state) {
    for (var row = 0; row < 8; row++) {
        for (var col = 0; col < 8; col++) {
            var val = state[row][col];
            if (val === 's') {
                return { row, col };
            }
        }
    }
}

