
/**
 * Microsoft Interview - 18 Feb
 * OA Test
 */

function findMinK(n) {
    let l = 1, r = n;
    let ans = n;

    /**
     * Remember l<=r - condition to check for in binary search
     */
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        if (works(n, mid)) {
            ans = mid;
            r = mid - 1; // try smaller k
        } else {
            l = mid + 1;
        }
    }

    return ans;
}
function works(n, k) {
    let remaining = n;
    let x = 0;
    let y = 0;

    while (remaining > 0) {
        // Step 1: Vanya
        let take = Math.min(k, remaining);
        x += take;
        remaining -= take;

        // Step 2: Petya
        let burn = Math.floor(remaining / 5);
        y += burn;
        remaining -= burn;
    }

    return x >= y;
}



res = findMinK(200);
res