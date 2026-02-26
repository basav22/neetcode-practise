// median of 2 sorted array
// given two arrays - A and B
// Lets set A array to be smaller - We run binary search on this
// median is such that - it splits into left partition and right partition
// total = Len(A)+Len(B); mediansize= total/2; 
// idea is we find midA and take mediansize-midA items of B array
// now we check if 2 partitions are sorted

var findMedianSortedArrays = function(nums1, nums2) {

    let A=nums1, B = nums2;
    if(B.length < A.length) {
        B = nums1;
        A = nums2;
    }
    A
    B
    let half = parseInt((A.length + B.length)/2);
    half
    // l = -1 means Aleft partion is empty. all elements in Aright
    // r means to last index of A
    let l = -1, r =A.length-1;
    
    while(1) {
        let i= l+parseInt((r-l)/2); // part A
        let j = half-(i+1)-1; // -1 for index in Array A and -1 for index B

        let Aleft = i>=0  ? A[i] : -Infinity;
        let Aright = i+1 < A.length ? A[i+1] : Infinity ;
        let Bleft =  j >=0 ? B[j] : -Infinity;
        let Bright = j+1 <B.length ? B[j+1] : Infinity;

        if(Aright >= Bleft && Bright >= Aleft) { // we found correct splits
            // sizes check
            if((A.length + B.length) %2 == 1) {
                return Math.min(Aright, Bright);
            } else { // even
                return (Math.min(Aright, Bright) + Math.max(Aleft, Bleft))/2;
            }
        }
        if(Aright < Bleft) {
            // move left
            l= i+1;
        } else {
            r= i-1;
        }
    }

};

res = findMedianSortedArrays([1,3],[2]); // 1 2 3 4 6
res

// a = -Infinity < 3
// a