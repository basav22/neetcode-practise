
import heapq
from typing import List


class Solution:
    def swimInWater(self, grid: List[List[int]]) -> int:
        directions = [[1,0],[-1,0],[0,1],[0,-1]]

        minHeap = [(grid[0][0], 0,0)]
        visit = set()
        N = len(grid)

        while minHeap:
            h,i,j = heapq.heappop(minHeap)
            if i== N-1 and j == N-1:
                return h
            if (i,j) in visit:
                continue;
            visit.add((i,j))
            
            for [l,r] in directions:
                x,y = i+l,j+r
                if x<0 or y<0 or x>=N or y>=N or (x,y) in visit:
                    continue
                heapq.heappush(minHeap,(max(grid[x][y], h),x,y))

if __name__ == "__main__":
    grid = [[0,1],[2,3]]
    solution = Solution()
    result = solution.swimInWater(grid)
    print(f"Min cost : {result}")