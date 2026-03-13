
from collections import deque
import collections
import heapq
from typing import List


def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
    # [v1,v2,w]
    
    adjList = collections.defaultdict(list)
    for v1,v2,w in times:
        adjList[v1].append((v2,w))
    
    minheap = [(0,k)]
    visit = set()
    res = 0

    while minheap:
        w1,n1 = heapq.heappop(minheap)
        if n1 in visit:
            continue
        res = max(res, w1)   
        visit.add(n1)
        for n2,w2 in adjList[n1]:
            if n2 not in visit:
                heapq.heappush(minheap, (w1+w2, n2))
        
    return res if len(visit) == n else -1


