
function numIslands(grid) {
    let rows = grid.length, cols = grid[0].length;
    let visited = Array.from({length: rows}, () => Array(cols).fill(0));

    function dfs(i, j) {
        if(i<0 || i>=rows || j<0 || j>=cols)
            return;
        if(visited[i][j] || grid[i][j]==0)
            return;
        
        visited[i][j]=1;

        dfs(i+1, j); dfs(i-1, j);
        dfs(i, j+1); dfs(i, j-1);
    }

    let res = 0;
    for(let i=0;i<rows;i++) {
        for(let j=0; j< cols; j++) {
            if(grid[i][j]=='1' && !visited[i][j]) {
                res += 1;
                dfs(i,j);
            }
        }
    }
    return res;
}

grid = [
    ["1","1","0","0","1"],
    ["1","1","0","0","1"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ];

//    grid = [
//     ["0","1","1","1","0"],
//     ["0","1","0","1","0"],
//     ["1","1","0","0","0"],
//     ["0","0","0","0","0"]
//   ]

  res = numIslands(grid);
  res