
# Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit
from collections import deque
from typing import List


class Solution:
    def longestSubarray(self, nums: List[int], limit: int) -> int:
        qmax, qmin = deque(), deque() #[index]
        res=0
        for l in range(0, len(nums)):
            qmax,qmin = deque(), deque()
            for r in range(l, len(nums)):
                while qmax and nums[qmax[-1]] < nums[r]:
                    qmax.pop()
                qmax.append(r)

                while qmin and nums[qmin[-1]] > nums[r]:
                    qmin.pop()
                qmin.append(r)

                diff = nums[qmax[0]] - nums[qmin[0]]
                # print("min",qmin) 
                # print("max", qmax) 
                # print("diff", diff)
                # print("-------") 
                if diff <= limit:
                    res = max(res, (r-l+1))
        return res


