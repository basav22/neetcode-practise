
function findMedianSortedArrays(nums1, nums2) {
    // if()
    if(nums1.length > nums2.length)
        [nums1, nums2] = [nums2, nums1];
    let total = nums1.length + nums2.length;

    let medianCount = parseInt(total/2);
    medianCount
    
    /**
     * l = -1 -- > since Aleft partition can have 0 elements
     * if we start l=0 -> we start with 1 element & its wronggg!!
     */
    
    let l = -1, r=nums1.length-1;

    while(1) {
        let i = parseInt(l+(r-l)/2);
        let j = medianCount - i - 2;

        let Aleft = i >= 0 ?  nums1[i] : -Infinity; 
        let Aright = (i+1) < nums1.length ?nums1[i+1]:Infinity;
        
        let Bleft = j >=0 ? nums2[j] : -Infinity; 
        let Bright = j+1 < nums2.length ? nums2[j+1] : Infinity;
        
        if(Aleft <=Bright && Bleft <= Aright) {
            if(total%2 == 1)
                return Math.min(Aright, Bright);
            return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright))/2;
        } else if (Aleft> Bright)
            r = i-1;
        else 
            l = i+1

    }
}

nums1 = [1,3]
nums2 = [2]
r = findMedianSortedArrays(nums1, nums2);
r