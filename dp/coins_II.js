

function dfs(coins, index, target,map) {
    if(target<0)
        return 0;
    if(target == 0)
        return 1;
    let mkey = [index,target].join('#');
    if(map.has(mkey)) {
        return map.get(mkey);
    }
    let res = 0;
    for(let i = index; i< coins.length; i++) {
        res += dfs(coins, i, target-coins[i],map);
    }
    // store res in map
    map.set([index,target].join('#'), res);
    return res;
}

let coins = [1,2,3], target = 4;
// target = 7, coins = [2,4]
target=5 ,coins=[1,2,5]
res = dfs(coins, 0, target, new Map());
res