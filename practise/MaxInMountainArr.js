var findMaxInMountainArr = function( arr) {
    // binary search for finding peak mountain 
    
    let l =0, r=arr.length-1;

    // 1 2 3 4 5
    // 4 5 1 2 3
    // DONOT DO - l<=r as usal in binary search
    // because r is not moving so mid will be same
    // so can be infinite loop if l==r when we reach peak
    while(l<r) { 
        let mid = parseInt(l + (r-l)/2);
        mid
        if(arr[mid] < arr[mid+1]) {
            l = mid+1;
        }
        else {
            r = mid; // DONOT DO -> r =mid-1
        }
    }
    return l;

};

arr = [1,2,3,4,5,3,1], 
arr = [1,2,3,5,4,3,1],
res = findMaxInMountainArr( arr)
res