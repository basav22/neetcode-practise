from typing import List

class Solution:
    def search(self, nums: List[int], target: int) -> int:
        # [3,4,5,6,1,2] t = 2
        # [5,1,3] t=5

        # are we in rightpartition or left partition
        l,r = 0, len(nums)-1
        t = target
        while l<=r:
            m = l+(r-l)//2
            if nums[m] == t:
                return m
            if nums[l] <= nums[m]: #into left part
                if t > nums[m] or t< nums[l]:
                    l = m + 1
                else:
                    r = m - 1
            else: #right part
                if t < nums[m] or t > nums[r]:
                    r = m - 1
                else:
                    l = m + 1
        return -1
        