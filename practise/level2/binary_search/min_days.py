from typing import List

class Solution:
    def minDays(self, bloomDay: List[int], m: int, k: int) -> int:
        if len(bloomDay) < m*k:
            return -1
        def no_of_bouq(n):
            res = []
            for i in bloomDay:
                res.append(1 if n>=i else 0)
            
            # [1,1,1,1,0,1,1]
            # find consecutive 1 in window of k size
            l,r,cnt=0,k,0
            for  r in range(len(res)):
                if res[r] !=1:
                    l=r+1
                    continue
                if r-l+1 <k:
                    continue
                cnt+=1
                l=r+1
            return cnt>=m
        
        low,high = 1, max(bloomDay)
        res = high
        while low<=high:
            mid = low + (high-low)//2
            canDo = no_of_bouq(mid)
            # print('canDo', canDo)
            if canDo:
                res = min(res,mid)
                high=mid-1
            else:
                low = mid+1
        return res