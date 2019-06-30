function initGame(){
    return [
        ['w','','w','','w','','w',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['q','','','s','','','','']
    ];
}

function moveSheep(state, up, right){
    sheep = foundSheep(state);
    state[sheep.row][sheep.col] = '';
    state[sheep.row - up][sheep.col + right] = 's';
    return state;
}

function foundSheep(state){
    for(var row = 0; row < 8; row++){
        for(var col = 0; col < 8; col++){
            var val = state[row][col];
            if(val === 's'){
                return {row, col};
            }
        }
    }    
}

