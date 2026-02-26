
// 3 sum

    var threeSum = function(nums) {
        nums.sort((n1, n2) => n1-n2);
        nums

        let i=0,j=0,k=0;
        let res = [];
        for(i=0;i<=nums.length-3;i++) {
            // if i and i-1 matches skip
            
            if(i>=1 && nums[i] == nums[i-1]) continue;
            i
            
            // target2Sum
            for(j=i+1,k=nums.length-1;j<k;){
                j
                k
                let sum = nums[i]+nums[j]+nums[k];
                if(sum == 0){
                    res.push([nums[i], nums[j], nums[k]]);
                    
                    j++;
                    while(nums[j]==nums[j-1] && j<k)
                        j++;
                    // break;
                } else if(sum<0) {
                    // move left
                    j++;
                } else {
                    // move right
                    k--;
                }
            }
            // matched
            // if()
            // i=Math.max(j,k);
            // i
        }
        res
        return res;
    }

let nums = [-1,0,1,2,-1,-4];
// nums = [0,1,1]
// nums = [0,0,0]
// nums=[0,0,0,0]
threeSum(nums);