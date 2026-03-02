

function findItinerary(tickets) {
    tickets.sort();

    // adjcen list
    let adjList = {};
    for(let [s,d] of tickets) {
        if(!adjList[s])
            adjList[s] = [];
        adjList[s].push(d);
    }

    let res = ["JFK"];
    // let visits = new Set();
    function dfs(start) {
        if(res.length == tickets.length+1)
            return true;
        if(!adjList[start] ||!(Object.keys(adjList).includes(start)))
            return false;
        
        // visits.add(start);
        let adjs = adjList[start];

        for(let index in adjs) {
            let adj = adjs[index];
            // if(visits.has(adj))
            //     continue;
            res.push(adj);
            adjs.splice(index, 1);
            // adjs.shift()

            if(dfs(adj)) 
                return true;
            adjs.splice(index,0,adj);
            // adjs.unshift(adj)
            res.pop();
        }
        return false;
    }

    return dfs("JFK") ? res : [];
}

tickets = [["BUF","HOU"],["HOU","SEA"],["JFK","BUF"]];
tickets = [["HOU","JFK"],["SEA","JFK"],["JFK","SEA"],["JFK","HOU"]]
res = findItinerary(tickets);
res







let arr = [["JFK", "XYZ"],["JFK", "OMN"]];
arr.sort();
arr
