from collections import defaultdict
from typing import List

from collections import defaultdict

class Solution:
    def minEdgeReversals(self, n, edges):

        adj = defaultdict(list)

        for u, v in edges:
            adj[u].append((v, 0))
            adj[v].append((u, 1))

        res = [0] * n

        # ---------- DFS 1 ----------
        def dfs1(node, parent):
            total = 0
            for nei, w in adj[node]:
                if nei == parent:
                    continue
                total += w + dfs1(nei, node)
            return total

        res[0] = dfs1(0, -1)

        # ---------- DFS 2 (reroot) ----------
        def dfs2(node, parent):
            for nei, w in adj[node]:
                if nei == parent:
                    continue

                # reroot transition
                if w == 0:
                    res[nei] = res[node] + 1
                else:
                    res[nei] = res[node] - 1

                dfs2(nei, node)

        dfs2(0, -1)

        return res
        
################
# NOT SO OMTIMAL SOLUTION
################

class Solution:
    def minEdgeReversals(self, n: int, edges: List[List[int]]) -> List[int]:
        adj_list = defaultdict(list)
        for u,v in edges:
            adj_list[u].append((v, 0))
            adj_list[v].append((u, 1))
        # print(adj_list)
        visit = set()
        def dfs(root):
            cur_res = 0
            if root in visit:
                return 0
            visit.add(root)
            for (adj, w) in adj_list[root]:
                if adj not in visit:
                    int_res = dfs(adj)
                    cur_res +=( w + int_res)
                    print(root , '--->', adj, 'is ', cur_res)
            return cur_res
        res = []
        # dfs(1)
        for i in range(n):
            visit = set()
            res.append(dfs(i))
        return res