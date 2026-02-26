
function trap(height) {
    if(!height.length) return 0;
    let l = 0, r = height.length-1;
    let [lmax, rmax ]= [height[l], height[r]];
    let res = 0;
    while(l<r) {
        if(lmax < rmax) {// lmax is min
            l += 1; // increment left first and then operate
            lmax = Math.max(lmax, height[l]);
            res += (lmax - height[l]);
        } else {
            r -= 1;
            rmax = Math.max(rmax, height[r]);
            res += (rmax-height[r]);
        }
    }
    return res;
}

let  height = [0,2,0,3,1,0,1,3,2,1]
r = trap(height);
r