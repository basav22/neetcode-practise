from typing import List


class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        l, r = 0, len(nums) - 1
        # 5 4 3 1
        while l<=r:
            m = l+(r-l)//2
            if nums[m] > (nums[m+1] if m<len(nums)-1 else float("-inf")) and nums[m] > (nums[m-1] if m>0 else float("-inf")):
                return m
            elif nums[m] < (nums[m+1] if m<len(nums)-1 else float("-inf")):
                l = m + 1
            else:
                r = m - 1
        