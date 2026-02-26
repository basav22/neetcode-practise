
function solve(board) {
    let rows = board.length, cols = board[0].length;
    function dfs(r,c) {
        if(r<0 || r>= rows || c<0 || c>= cols || board[r][c] != 'O')
            return;
        board[r][c] = 'T';
        
        dfs(r+1,c);
        dfs(r-1,c);
        dfs(r,c+1);
        dfs(r,c-1);
    }
    // [2].includes()
    let Afrom = Array.from;
    // run dfs on border cells and mark  O -> T
    for(let i of Array(rows).keys()) {
        for(let j of Array(cols).keys()) {
            // border cell
            if((i==0 && Afrom(Array(cols).keys()).includes(j)) ||
                (j==0 && Afrom(Array(rows).keys()).includes(i)) ||
                (i==rows-1 && Afrom(Array(cols).keys()).includes(j)) ||
                (j==cols-1 && Afrom(Array(rows).keys()).includes(i))) {
                    dfs(i,j);
                }
        }
    }

    // traverse grid and mark remaining O -> X
    for(let i of Array(rows).keys()) {
        for(let j of Array(cols).keys()) {
            if(board[i][j] == 'O')
                board[i][j] = 'X';
            if(board[i][j] == 'T')
                board[i][j] = 'O';
        }
    }

    // traverse grid and mark remaining T -> O
    // for(let i of Array(rows).keys()) {
    //     for(let j of Array(cols).keys()) {
    //         if(board[i][j] == 'T')
    //             board[i][j] = 'O';
    //     }
    // }
}

board = [
  ["X","X","X","X"],
  ["X","O","O","X"],
  ["X","O","O","X"],
  ["X","X","X","O"]
]
solve(board);
board

r = Array(3).keys();
r =Array.from(r)
r
