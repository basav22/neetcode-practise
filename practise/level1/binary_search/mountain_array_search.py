class Solution:
    def findInMountainArray(self, target: int, mountainArr: 'MountainArray') -> int:
        # mountainArr = [1,2,3,4,5,3,1], target = 3
        # see if we are in increasing side or decreasing side(-ve binary search)
        def binarySearch(left, right, t, incr_sort):
            while(left <= right)    :
                mid = left+(right-left)//2
                if mountainArr.get(mid) > t:
                    if incr_sort:
                        right = mid - 1
                    else:
                        left = mid + 1
                elif mountainArr.get(mid) < t:
                    if incr_sort:
                        left = mid + 1
                    else:
                        right = mid - 1
                else:
                    return mid
            return -1
        
        l, r= 0, mountainArr.length()-1
        res = l
        while l<=r:
            m = l + (r-l)//2
            if mountainArr.get(m-1) <= mountainArr.get(m) and mountainArr.get(m) < mountainArr.get(m+1):
                l = m + 1
            elif mountainArr.get(m-1) >= mountainArr.get(m) and mountainArr.get(m) > mountainArr.get(m+1):
                r = m - 1
            else:
                res = m
                break
        print( res)
        index = binarySearch(0, res, target, True)
        # print(res)
        return index if index > -1 else binarySearch(res+1, mountainArr.length()-1, target, False)

        
        