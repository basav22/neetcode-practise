

from typing import List


class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        k = len(nums) - k

        def quickSelect(l, r):
            pivot, p = nums[r], l

            for i in range(l,r):
                if nums[i] <= pivot:
                    nums[i], nums[p] = nums[p], nums[i]
                    p += 1
                
            # swap pivot with p-pointer
            nums[p], nums[r] = nums[r], nums[p]

            # if k < p --> look in left
            if k < p:
                return quickSelect(l,p-1)
            elif k > p:
                return quickSelect(p+1, r)
            return nums[k]
        
        return quickSelect(0,len(nums)-1)

