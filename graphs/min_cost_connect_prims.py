# Min Cost to Connect Points

import collections
import heapq
from typing import List

# from heap.kthMaxInList import Solution

class Solution:
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        # build adj list
        adj = collections.defaultdict(list)

        N = len(points)
        for i in range(N):
            [x1,y1] = points[i]
            for j in range(i+1, N):
                [x2, y2] = points[j]
                dist = abs(x1-x2) + abs(y1-y2)
                adj[i].append((dist, j))
                adj[j].append((dist, i))
        

        # prims
        minheap = [(0,0)]
        visit = set()
        res = 0
        while len(visit) < N:
            (w1,n1) = heapq.heappop(minheap)
            if n1 in visit:
                continue
            visit.add(n1)
            res += w1

            for (w2,n2) in adj[n1]:
                if n2 not in visit:
                    heapq.heappush(minheap,(w2, n2))
            
        return res

if __name__ == "__main__":
    points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
    solution = Solution()
    result = solution.minCostConnectPoints(points)
    print(f"Min cost to connect points: {result}")
