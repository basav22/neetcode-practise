from typing import List


class Solution:
    def solve(self, board: List[List[str]]) -> None:
        rows,cols = len(board), len(board[0])
        # non-surrounded nodes
        def dfs(i,j): #start from O --> find X in all direction
            if i<0 or i>=rows or j<0 or j>=cols or board[i][j] != 'O':
                return 
            
            board[i][j]='T'
            dfs(i+1,j)
            dfs(i-1,j)
            dfs(i,j+1)
            dfs(i,j-1)

        for i in range(rows):
            for j in range(cols):
                if board[i][j] == 'O' and (i in [0,rows-1] or j in [0, cols-1]):
                    dfs(i, j)

        for i in range(rows):
            for j in range(cols):
                if board[i][j] == 'O':
                    board[i][j] = 'X'
        
        for i in range(rows):
            for j in range(cols):
                if board[i][j] == 'T':
                    board[i][j] = 'O'