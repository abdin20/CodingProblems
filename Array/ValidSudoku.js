/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    var seen = new Map();

    for (let k = 0; k < board.length; k++) {


        for (let m = 0; m < board[k].length; m++) {

            //check if number first
            if (!isNaN(board[k][m])) {
                var currentValue= board[k][m];

                var currentRow=`${board[k][m]} row ${k}`;

                //check if number seen before in row
                if(seen.has(currentRow)){
                    return false;
                }else{
                    seen.set(currentRow,true)
                }

                //check if number seen before in column
                var currentColumn= `${board[k][m]} column ${m}`;
                
                if(seen.has(currentColumn)){
                    return false;
                }else{
                    seen.set(currentColumn,true)
                }

                
                //check if number seen before in grid
                var currentGrid =  `${board[k][m]} grid ${Math.floor(k/3)} - ${Math.floor(m/3)}`;
                
                    
                if(seen.has(currentGrid)){
                    return false;
                }else{
                    seen.set(currentGrid,true)
                }
                
            }

        }

       
    }
    return true;
};

isValidSudoku([[".",".",".",".","5",".",".","1","."],[".","4",".","3",".",".",".",".","."],[".",".",".",".",".","3",".",".","1"],["8",".",".",".",".",".",".","2","."],[".",".","2",".","7",".",".",".","."],[".","1","5",".",".",".",".",".","."],[".",".",".",".",".","2",".",".","."],[".","2",".","9",".",".",".",".","."],[".",".","4",".",".",".",".",".","."]])