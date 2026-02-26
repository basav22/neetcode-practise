

function maxSlidingWindow(nums, k) {
    let deq = [], l=0, r=0;
    let res = [];
    while(r < nums.length) {
        while(deq.length>0 && deq[deq.length-1] <nums[r]) 
            deq.pop();
        deq.push(nums[r]);

        if(r>=k-1) {
            res.push(deq[0]);
            l+=1;
        }
        if(nums[l-1] == deq[0])
            deq.shift();
        
        r+=1;
    }
    return res;
}

r = maxSlidingWindow([7,4,2,5,6], 3);
r