function findDuplicate(nums)  {
    // find intersection
    // treat this array as linkedlist
    // values pointing to index to find next node
    // cycle found - return the start of cycle - Floyed algo

    let slow=0, fast=0;

    while(1) {
        slow = nums[slow];
        fast = nums[nums[fast]]
        if(slow == fast)
            break;
    }

    // floyd algo to find start of cycle
    let slow2 = 0;
    while(1) {
        slow = nums[slow];
        slow2 = nums[slow2];
        if(slow == slow2)
            return slow2;
    }
}