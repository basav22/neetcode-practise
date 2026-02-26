

# heap of all Tasks (2, X), (4, Y)
# every tick -> take queue task at current T and put into heap
# heappop --> (4,Y) -> Execute -> put (3,Y) this task in queue at t = T+n (3, Y ,new_t)
# continue
# [X,X,Y,Y]
from collections import Counter, deque
import heapq

class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        counts = Counter(tasks)
        maxheap = [-cnt for cnt in counts.values()]

        heapq.heapify(maxheap)
        queue = deque()
        tick = 0
        while maxheap or queue :
            tick += 1
            if queue :
                (freq_q, tick_q) = queue[0]
                if tick == tick_q:
                    queue.popleft()
                    heapq.heappush(maxheap, freq_q)
            
            if maxheap:
                freq = heapq.heappop(maxheap)
                # add to queue if freq >1
                if abs(freq)> 1:
                    queue.append((freq+1, tick+n+1))

        return tick