
function isValidSudoku(board) {
    let rows = 9, cols = 9;
    let row_uniq = new Map();
    let col_uniq = new Map();
    let grid_uniq = new Map();

    for(let i=0;i<rows; i++) {
        for(let j=0; j< rows; j++) {
            if(board[i][j] == '.')
                continue;
            if( row_uniq.has([i, board[i][j]].join(':')) ||
                col_uniq.has([j,board[i][j]].join(':')) ||
                grid_uniq.has([parseInt(i/3), parseInt(j/3),board[i][j]].join(':'))
            ) {
                // a = board[i][j];
                // a
                // i
                // j

                grid_uniq
                return false;
            }
            row_uniq.set([i, board[i][j]].join(':'), 1);
            col_uniq.set([j,board[i][j]].join(':'),1);
            grid_uniq.set([parseInt(i/3), parseInt(j/3),board[i][j]].join(':'), 1);
        }
    }
    return true;
}

board =
[["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","8",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]];

t = isValidSudoku(board);
t