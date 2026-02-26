
function islandPerimeter(grid) {
    let rows = grid.length, cols = grid[0].length;
    let i = 0, j=0;
    // find 1
    function findOne() {
        for(i = 0; i< rows; i++) {
            for(j =0; j<cols; j++) {
                if(grid[i][j]==1)
                    return [i,j];
            }
        }
    }
    [i,j]=findOne();
    i
    j
    // let res = 4;
    // we are guaranteed find (i, j)
    let visited = Array.from({length: rows}, () => Array(cols).fill(0));

    // we start from i,j -> traverse in both direction and find ends in both direction
    function dfs(p,q) {
        if(p<0 || p>=rows || q<0 || q >=cols || grid[p][q]!=1)
            return 1;
        if(visited[p][q] ) return 0;
        visited[p][q]=1;

        let res =0;
        
        res += dfs(p+1,q);
        res+=dfs(p-1,q);
        res += dfs(p,q+1);
        res += dfs(p,q-1);

        /** Not a backtracking problem - donot reset visited - 0 */
        // visited[p][q]=0;

        return res;
    }
    i
    j
    return dfs(i,j);
}

grid=[[1,1,0,0],[1,0,0,0],[1,1,1,0],[0,0,1,1]]
r = islandPerimeter(grid)
r

