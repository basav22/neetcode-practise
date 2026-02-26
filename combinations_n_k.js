
// combinations


var combine = function(n, k) {
    res = []
    backtrack(n,k,0,[],res);
    return res;
};
// combine(1,1)

function backtrack(n, k, skipIndex, current, result) {

    if(current.length == k) {
        result.push([...current]);
        return;
    }

    for(let i=skipIndex; i< n; i++) {

        current.push(i+1);
        skipIndex += 1;
        
        backtrack(n,k,skipIndex,current,result);

        // skipIndex -=1;
        current.pop();

    }

}