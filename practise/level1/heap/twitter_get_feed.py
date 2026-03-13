from collections import defaultdict
import heapq
from typing import List

class Twitter:

    def __init__(self):
        self.followMap = defaultdict(set)
        self.tweetMap = defaultdict(list)

    def postTweet(self, userId: int, tweetId: int) -> None:
        self.tweetMap[userId].append(tweetId)

    def getNewsFeed(self, userId: int) -> List[int]:
        followers = self.followMap[userId]
        followers.add(userId)      
        # print('followers of', userId , '--', followers) 
        tweets = []
        for f in followers:
            tweets.append(self.tweetMap[f])
        
        # merge k sorted list
        # [1,4,5]
        # [3,7,8]
        # [2,6,9]
        minh = []
        for i in range(len(tweets)):
            tweet = tweets[i]
            if tweet:
                minh.append((tweet[-1]*-1, i, len(tweet)-1))
        
        heapq.heapify(minh)
        # print(minh)
        res=[]
        while minh and len(res) < 10:
            (tweetid, list_index, index) = heapq.heappop(minh)
            res.append(tweetid*-1)
            if index>0:
                heapq.heappush(minh, (-1*tweets[list_index][index-1],list_index, index-1))
        return res


    def follow(self, followerId: int, followeeId: int) -> None:
        self.followMap[followerId].add(followeeId)

    def unfollow(self, followerId: int, followeeId: int) -> None:
        print('followmap of folloerid ', followerId, 'is -->', self.followMap[followerId])
        if followeeId in self.followMap[followerId]:
            self.followMap[followerId].remove(followeeId)
        
