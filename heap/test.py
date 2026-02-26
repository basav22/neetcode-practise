
import heapq


def main():
    min, max = [], [2,3,5]

    heapq.heappush(min, -2)
    heapq.heappush(min, -3)
    heapq.heappush(min, -4)

    heapq.heapify(max)
    # print(max[0])
    # print(min[0])
    print(heapq.heappop(min))

if __name__ == "__main__":
    main()