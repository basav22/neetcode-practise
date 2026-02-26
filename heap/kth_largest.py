import heapq
def findKthLargest( nums: List[int], k: int) -> int:
    nums = [-n for n in nums]
    heapq.heapify(nums)
    res = 0
    for i in range(k):
        res = heapq.heappop(nums)
    return -1*res

def main():
    res = findKthLargest([1,2,3,4],4)
    print(res)
if __name__ == "__main__":
    main()