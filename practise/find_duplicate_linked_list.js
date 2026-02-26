

function findDuplicate(nums) {
    let slow = 0, fast = 0;
    // 1....n
    // we treat each val as index
    while(true){
        slow = nums[slow];
        slow

        fast = nums[nums[fast]];
        fast
        if(slow == fast) {
            // break;
            slow = 0;
            /**
             * once we find cycle - we have to move fast pointer as slow
             */
            while(slow!=fast) {
                slow = nums[slow];
                fast = nums[fast];
            }
            return slow;
        }
    }
    
    // return slow;
}

nums = [1,2,3,2,2];
nums=[1,3,4,2,2]
let res = findDuplicate(nums);
res