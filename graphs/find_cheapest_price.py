
import collections
import heapq
from typing import List


class Solution:
    def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:
        # adjList
        adjList = collections.defaultdict(list)

        for s,d,p in flights:
            adjList[s].append((p,d))
        # print(adjList)
        minheap = [(0,src,0)] # (price, node, stop)

        res = {} # (node, stop) -> price
        # res = 0;
        # BFS with minHeap
        while minheap :
            p,d,stop = heapq.heappop(minheap)
            
            # res = max(res, p)
            if  d == dst:
                return p
            
            if stop > k:
                # pop until we find des
                continue
            
            for (neiP, neiD) in adjList[d]:
                newPrice = p+neiP
                newKey = (neiD, stop+1)
                if  newPrice < res.get(newKey, float('inf')):
                    res[newKey] = newPrice
                    heapq.heappush(minheap, (newPrice, neiD, stop+1))
        
        return -1

if __name__ == "__main__":
    n = 4
    flights = [[0,1,200],[1,2,100],[1,3,300],[2,3,100]]
    # flights=[[0,1,1],[0,2,5],[1,2,1],[2,3,1]]
    src = 0
    dst = 3
    k = 1
    # n = 3
    # flights = [[1,0,100],[1,2,200],[0,2,100]]
    # src = 1
    # dst = 2
    # k = 1
    solution = Solution()
    result = solution.findCheapestPrice(n, flights,src,dst,k)
    print(f"Min cost : {result}")