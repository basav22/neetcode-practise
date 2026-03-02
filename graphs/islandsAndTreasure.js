function islandsAndTreasure(grid) {
    // BFS algo
    // queue
    let queue = new Array();

    let rows = grid.length, cols = grid[0].length;
    let INT_MAX = 2147483647;
    let visited = Array.from({length: rows}, () => Array(cols).fill(0));
    
    // find all treasures
    for(let i of Array(rows).keys()) {
        for(let j of Array(cols).keys()) {
            if(grid[i][j] == 0)
                queue.push([i,j]);
                // visited[i][j] = 1;
        }
    }

    queue

    
    function bfs(i, j, val) {
        if(i <0 || i>=rows || j <0 || j>=cols 
            || visited[i][j] == '1' || grid[i][j] == '-1') {
            return;
        }
        visited[i][j] = 1;
        grid[i][j] = val;
        queue.push([i+1,j]);
        queue.push([i-1,j]);
        queue.push([i,j+1]);
        queue.push([i,j-1]);

    }
    let val = 0;
    while(queue.length) {
        queue
        for(let i of Array(queue.length).keys()) {
            let [p,q] = queue.shift();
            // look around and incremenet the val
            
            bfs(p,q,val);
        }
        val += 1;
    }

}

let grid = [
  [2147483647,-1,0,2147483647],
  [2147483647,2147483647,2147483647,-1],
  [2147483647,-1,2147483647,-1],
  [0,-1,2147483647,2147483647]
]
islandsAndTreasure(grid);
grid