// banana problem



var minEatingSpeed = function(piles, h) {

    let hours = (speed) => piles.map(a => Math.ceil(a/speed)).reduce((sum, h) => sum + h, 0);
    // first find search space
    // sort piles - reverse
    piles.sort((a,b) => b-a);
    piles

    // dont fill searchList - we may reach OOM error.
    // searchList=[];
    // for(let i=piles[0]; i>0;i--) {
    //     searchList.push(i);
    // }

    // searchList
    
    let l =1, r = piles[0];
    let res = 0;
    while(l<=r) {
        let mid = l + parseInt((r-l)/2);
        mid
        
        let hoursNeeded = hours(mid);
        hoursNeeded
        if(hoursNeeded > h) {
            // inscrease spped
            l = mid+1;
            r
            l
        }else {
            // we got solution
            r = mid-1
            res = mid;
            // break;
        }
    }
    return res;

};

piles = [4,3,2,1], h = 9
// piles = [25,10,23,4], h = 4
// piles = [3,6,7,11], h=8;

aa = minEatingSpeed(piles, h);
aa

// 2