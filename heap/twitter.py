
# Map of user-> followers {A: [B,c,d]}
# user A posts -> {A: [(post1, t2), (post2, t1)]
            #      B: [(post4, t4), (post2, t3)]
# }
# merge sorted N lists -> to take 10 latest
# merge all and pop small till len(10) of heap
# OR
# take 2 followers - mergesort and fill upto len=10
# take next 2 followers  and fill upto 10
# finally we get 1 list fo 10
# Feed -> for all followers - get their posts - add to min heap

from collections import defaultdict
import heapq


class Twitter:

    def __init__(self):
        self.time = 0
        self.postMap = defaultdict(list) # A -> [P1, 1], [P2,4]
        self.followMap = defaultdict(set) # A, B, C

    def postTweet(self, userId: int, tweetId: int) -> None:
        self.postMap[userId].append([tweetId, self.time])
        self.time -= 1

    def getNewsFeed(self, userId: int) -> List[int]:
        res = []
        minHeap = []
        # get followers
        allFollowers = self.followMap[userId]
        allFollowers.add(userId)
        for follower in allFollowers:
            if len(self.postMap[follower]) > 0:
                index = len(self.postMap[follower]) - 1
                post, time = self.postMap[follower][index]
                minHeap.append([time, post, follower, index-1])
        
        heapq.heapify(minHeap)
        while minHeap and len(res) < 10:
            time, post, follower, index= heapq.heappop(minHeap)
            res.append(post)
            # add follower's next post to minheap'
            if index>=0:
                post, time = self.postMap[follower][index]
                heapq.heappush(minHeap,[time, post, follower, index-1])
        return res

    def follow(self, followerId: int, followeeId: int) -> None:
        self.followMap[followerId].add(followeeId)

    def unfollow(self, followerId: int, followeeId: int) -> None:
        if followeeId in self.followMap[followerId]:
            self.followMap[followerId].remove(followeeId)
        
