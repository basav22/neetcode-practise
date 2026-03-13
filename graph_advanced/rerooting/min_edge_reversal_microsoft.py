from collections import defaultdict

class Solution:
    def minEdgeReversals(self, n, edges):

        adj_list, down, up  = defaultdict(list), [0]*n, [0]*n
        for u,v in edges:
            adj_list[u].append((v, 0))
            adj_list[v].append((u, 1))

        def dfs1(start, parent):
            for (nei, wei) in adj_list[start]:
                if nei == parent: continue
                down[start] += wei + dfs1(nei, start)
            return down[start]
        def dfs2(start, parent):
            children = [(i,w) for (i,w) in adj_list[start] if i != parent]
            total = 0
            for nei, wei in children:
                total += wei+down[nei]    
            for nei, wei in children:
                up[nei] = up[start] + (total - (wei+down[nei])) + (1 if wei ==0 else 0)
                dfs2(nei,start)
            
        dfs1(0, -1)
        dfs2(0,-1)
        print('down', down)
        print('up', up)

        res = [0]*n
        for i in range(len(res)):
            res[i] = up[i] + down[i]
        
        return res