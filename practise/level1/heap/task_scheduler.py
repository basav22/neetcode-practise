from collections import Counter, deque
import heapq
from typing import List


class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        minh,q = [],deque() #(remain, next_tick)
        counts, tick = Counter(tasks), 0
        # print(counts)
        for i in counts:
            minh.append(-1 * counts[i])

        heapq.heapify(minh)
        while minh or q:
            tick +=1 # process
            # see q if any process match cur_tick
            if q and q[0][1] == tick:
                remain, qtick = q.popleft()
                print('q tick match', qtick)
                heapq.heappush(minh, -remain)
            if minh:
                cur = heapq.heappop(minh) * -1
                # print('cur   ', cur)
            else:
                cur = 0
                # print('idle  ')

            if cur and cur > 1:
                q.append((cur-1, tick+n+1))
            print(q)
        return tick
