# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

from collections import deque
from typing import List


class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        # BFS solution
        # we have to only print last node per level
        q, res = deque(), []
        if(not root):
            return []
        q.append(root)

        while q:
            lenq = len(q)
            print(lenq)
            last = q[-1]
            res.append(last.val)
            for i in range(lenq):
                cur = q.popleft()
                if cur.left:
                    q.append(cur.left)
                if cur.right:
                    q.append(cur.right)

        return res