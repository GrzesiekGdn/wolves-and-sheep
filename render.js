function renderTable(table, state){
    for(var row = 0; row < 8; row++){
        for(var col = 0; col < 8; col++){
            var val = state[row][col];
            var innerHtml = val === 'w' ? "<img src='wolf.png'>"
                : val === 's' ? "<img src='sheep.png'></img>"
                : "";

            table.rows[row].cells[col].innerHTML= innerHtml;
        }
    }
}