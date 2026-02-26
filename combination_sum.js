

// combination sum

var combinationSum = function(candidates, target) {
    res = [];
    backtrack(candidates,target,0,0,[],res);
    res;
};

combinationSum([2], 1);

function backtrack(candidates, target, i, curSum, currentList, result) {

    if(curSum == target) {
        result.push([...currentList]);
        return;
    } else if(curSum > target) {
        return;
    }

    for(let j=i;j<candidates.length;j++) {
        curSum += candidates[j];
        currentList.push(candidates[j]);

        backtrack(candidates,target,i,curSum, currentList, result);

        i+=1;
        currentList.pop();
        curSum -= candidates[j];
    }
}