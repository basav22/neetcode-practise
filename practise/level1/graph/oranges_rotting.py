from collections import deque
from typing import List


class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        q, rows, cols = deque(), len(grid), len(grid[0])
        fresh, timer = 0,0
        # add all rotten to deque
        for i in range(rows):
            for j in range(cols):
                if grid[i][j] == 1:
                    fresh += 1
                if grid[i][j] == 2:
                    q.append((i,j))
        directions = [[1,0], [0,1],[-1,0],[0,-1]]     
        # we have to do BFS
        while q and fresh > 0: ########## IMP- fresh > 0
            for i in range(len(q)):
                x,y = q.popleft()
                for dr, dc in directions:
                    r,c = x+dr, y+dc
                    if r<0 or r == rows or c <0 or c==cols or grid[r][c] !=1:
                        continue
                        
                    q.append((r,c))
                    grid[r][c] = 2
                    fresh -= 1
            timer += 1
        return timer if fresh==0 else -1