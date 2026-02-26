

    function maxSlidingWindow(nums, k) {
        let l =0, r=0;
        let maxi=[], maxv=[];
        
        let res = nums.slice(0,k).sort((a,b) => b-a);
        res
        let index = nums.findIndex(v => v == res[0]);
        index

        maxi.push(index);
        maxv.push(res[0]);
        l=1;
        for(r = k; r<nums.length; r++) {
            l
            r

            // slide left
            let nitem = nums[r];
            let ritem = nums[l];
            if(maxi[maxi.length-1]>=l && nitem >= maxv[maxv.length-1]) {
                maxi.push(r);
                maxv.push(nitem);
            } else if (maxi[maxi.length-1] < l){
                // sort again
                res = nums.slice(l,r+1).sort((a,b) => b-a);
                maxi.push(nums.slice(l,r+1).findIndex(v => v == res[0]));
                maxv.push(res[0]);
            } else {
                maxi.push(maxi[maxi.length-1]);
                maxv.push(maxv[maxv.length-1]);
            }
            l+=1;
        }
        maxi
        return maxv;
    }

    a = maxSlidingWindow([1,3,2,1,4],2);
    a
