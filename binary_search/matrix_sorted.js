

// 2D Matrix - Rows sorted and first element in col greater than last element in prev row

var searchMatrix = function(matrix, target) {
    // find row to lookout - binary search on rows first element
    let l =0, r=matrix.length-1;
    let cols = matrix[0].length;
    let resultRow = -1;
    while( l<=r){
        l
        r
        let mid = l + parseInt((r-l)/2);
        mid
        if(target >= matrix[mid][0]) {
            if(target <= matrix[mid][cols-1]) {
                resultRow = mid;
                break;
            }
            l=mid+1;
        } else {
            r = mid-1;
        }
    }
    if(resultRow == -1 ) return false;

    // do again binary search in resultRow
    // reset l,r
    l = 0, r=cols-1;
    while(l<=r) {
        let mid = l + parseInt((r-l)/2);
        if(target > matrix[resultRow][mid]) 
            l = mid+1;
        else if(target < matrix[resultRow][mid])
            r = mid-1;
        else {
            mid
            return true;
        }
    }
    return false;
};


let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 390;
// matrix = [[1]], target = 1;
res = searchMatrix(matrix, target);
res