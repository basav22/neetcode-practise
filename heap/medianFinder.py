import heapq


class MedianFinder:

    def __init__(self):
        self.min, self.max = [], []
        
        

    def addNum(self, num: int) -> None:
        heapq.heappush(self.min, -1* num) # multiply by -1 

        # if max(min_partition) > min(max_partition)
        if len(self.min) and len(self.max) and (-1*self.min[0]) > self.max[0]:
            # pop from min heap and push to max heap
            val = -1 *heapq.heappop(self.min)
            heapq.heappush(self.max, val)
        
        # if lenghts imbalanced
        if len(self.min) > len(self.max) + 1:
            # pop from min heap and push to max heap
            val = -1 *heapq.heappop(self.min)
            heapq.heappush(self.max, val)

        if len(self.max) > len(self.min) + 1:
            # pop from max heap and push to min heap
            val = heapq.heappop(self.max)
            heapq.heappush(self.min, -1 * val)

        # now both partitions balanced



    def findMedian(self) -> float:
        if len(self.min) > len(self.max): 
            # take min
            return -1*self.min[0]
        
        if len(self.max) > len(self.min): 
            # take max
            return self.max[0]
        
        return -1*self.min[0] + self.max[0] / 2
        