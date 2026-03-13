class Solution:
    def islandsAndTreasure(self, grid: List[List[int]]) -> None:
        rows, cols = len(grid), len(grid[0])
        q, cnt = deque(), 0
        for i in range(rows):
            for j in range(cols):
                if grid[i][j] == 0:
                    q.append((i,j))
        
        print('init q', q)
        directions = [[1,0],[0,1],[-1,0],[0,-1]]
        while q:
            cnt += 1
            for i in range(len(q)):
                x,y = q.popleft()
                for dr, dc in directions:
                    r,c = x+dr, y+dc
                    if r<0 or r==rows or c<0 or c==cols or grid[r][c] != 2147483647:
                        continue
                    # print('updating with ', r,c, '---',cnt)
                    grid[r][c] = cnt
                    q.append((r,c))
                    print(q)
        # return grid

