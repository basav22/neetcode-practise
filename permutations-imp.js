

// permutations
// [1,2,3] -> Return all possible permutations

// var permute = function(nums) {
//     res = [];
//     usedArr = new Array(nums.length).fill(false);
//     permuteHelper(nums, [], res, usedArr);
//     res
// };

a = permute([1,2,3])
a

function permuteHelper(nums, tempArray, usedArr, finalRes) {

    // base case
    if(tempArray.length == nums.length) {
        tempArray

        finalRes.push([...tempArray])
        return;
    }

    // let i is very importanat
    for(let i=0;i<nums.length;i++) {

        if(usedArr[i]) continue; 

        usedArr[i] = true;
        tempArray.push(nums[i]);
        
        permuteHelper(nums, tempArray, usedArr, finalRes);
        
        tempArray.pop();
        usedArr[i] = false;

    }

}

function permute(nums) {
  const result = [];
  const used = new Array(nums.length).fill(false);

//   backtrack(nums, [], used, result);
  permuteHelper(nums, [], used, result);
  result
  return result;
}

function backtrack(nums, current, used, result) {
  // base case
  if (current.length === nums.length) {
    result.push([...current]); // COPY is mandatory
    return;
  }

  // let i is very importanat
  for (let i = 0; i < nums.length; i++) {
    if (used[i]) continue;

    // choose
    used[i] = true;
    current.push(nums[i]);

    // explore
    backtrack(nums, current, used, result);

    // unchoose (backtrack)
    current.pop();
    used[i] = false;
  }
}

