import heapq


def lastStoneWeight(self, stones: List[int]) -> int:
    if len(stones) == 0:
        return 0
    stones = [-w for w in stones]
    heapq.heapify(stones)

    while len(stones) > 1:
        w1 = -1* heapq.heappop(stones)
        w2 = -1 * heapq.heappop(stones)
        if w1-w2 !=0:
            heapq.heappush(stones,-1*(w1-w2))
    
    return  abs(stones[0]) if len(stones)>0 else 0

def main():
    lastStoneWeight(stones=[2,3,6,2,4])

if __name__ == "__main__":
    main()