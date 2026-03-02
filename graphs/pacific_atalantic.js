
function pacificAtlantic(heights) {
    let rows = heights.length, cols = heights[0].length;

    // start from edges (atlantic) and flood fill reachable islands
    // same from all 4 edges wrt their neighbouring ocean
 
    // dfs function
    function dfs(r, c, visits, prevVal) {
        if(r<0 || r>=rows || c<0 || c>=cols
            || visits[[r,c].join('#')] || heights[r][c] < prevVal)
            return false;
        visits[[r,c].join('#')] = 1;

        dfs(r+1,c,visits,heights[r][c]);
        r
        c
        dfs(r-1,c,visits,heights[r][c]);
        dfs(r,c+1,visits,heights[r][c]);
        dfs(r,c-1,visits,heights[r][c]);

    }

    let pac = {}, atl = {};
    // row 1
    for(let j of Array(cols).keys()) {
        dfs(0,j,pac,heights[0][j]);
        dfs(rows-1,j,atl,heights[rows-1][j]);
    }

    
    for(let i of Array(rows).keys()) {
        dfs(i,0,pac,heights[i][0]);
        dfs(i,cols-1,atl,heights[i][cols-1]);
    }

    // join
    let res = [];
    atl
    pac

    for(let i of Array(rows).keys()) {
        for(let j of Array(cols).keys()) {
            let key = [i,j].join('#');
            if(atl[key] && pac[key])
                res.push([i,j]);
        }
    }
    return res;
}

let heights = [
  [4,2,7,3,4],
  [7,4,6,4,7],
  [6,3,5,3,6]
]
res = pacificAtlantic(heights);
res