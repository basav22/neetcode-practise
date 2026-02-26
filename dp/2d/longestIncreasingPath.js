
function longestIncreasingPath(matrix) {
    let rows = matrix.length, cols = matrix[0].length;
    let dp = {};
    for(let i of Array(rows).keys()){
        for(let j of Array(cols).keys()) {
            let dpKey = [i,j].join('#');

            // dp[dpKey]=
            dfs(matrix, i, j, -1, dp);
        }
    }
    
    let vals = Object.values(dp);
    let res = 1;
    vals
    for(let i of Array(vals.length).keys()) {
        res = Math.max(res, vals[i]);
    }
    return res;
}

function dfs(matrix, i,j,prev, dp) {
    let inBounds = i>=0 && i<matrix.length && j>=0 && j <matrix[0].length;
    if(!inBounds  || matrix[i][j]<=prev)
        return 0;
    let dpKey = [i,j].join('#');
    if(dp[dpKey]!=undefined)
        return dp[dpKey];

    let res = 0, cur = matrix[i][j];
    res = 1 + Math.max(
                dfs(matrix, i+1,j,cur, dp),
                dfs(matrix, i,j+1, cur, dp),
                dfs(matrix, i-1,j, cur, dp),
                dfs(matrix, i,j-1, cur, dp));
    
    dp[dpKey] = res;
    return res;
}

matrix = [[1,2,3],[2,1,4],[7,6,5]];
matrix = [[5,5,3],[2,3,6],[1,1,1]];

res = longestIncreasingPath(matrix)
res

rows = matrix.length;
rows
for(let i of Array(rows).keys()){
    i
}
