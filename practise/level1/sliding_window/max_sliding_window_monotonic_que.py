from collections import deque
from typing import List


class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        # store indices in queue so that when left slides we can popleft
        # quue is monotonically decreasing. so q[-1] -> highest
        # we will always push current val by finding right place
        q = deque() # hold index
        l, res = 0, []
        
        for r in range(len(nums)):
            # pop smaller ele. keep monotonically decreasing que
            while q and nums[q[-1]] < nums[r]:
                q.pop()
            # for sure append the current num
            q.append(r)

            # l shift
            if l > q[0]:
                q.popleft()
            
            if r+1 >= k:
                res.append(nums[q[0]])
                l+=1
        return res

            
            
