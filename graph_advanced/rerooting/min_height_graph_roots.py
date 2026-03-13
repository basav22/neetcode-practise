# ┌─────────────────────────────────────────────────────┐
# │  Always pick ONE unit of measure: nodes OR edges    │
# │                                                     │
# │  If using EDGES:                                    │
# │    down[leaf] = 0,  up[root] = 0  (consistent ✓)   │
# │    height = 1 + max(down[i], up[i])                 │
# │                                                     │
# │  When going INTO a sibling branch:                  │
# │    cost = 1 edge (to cross) + down[sibling]         │
# │    NOT just down[sibling]!                   
from collections import defaultdict

class Solution:
    def findMinHeightTrees(self, n, edges):
        if n == 1: return [0]

        adj = defaultdict(list)
        for u, v in edges:
            adj[u].append(v)
            adj[v].append(u)

        down = [0] * n   # max edges going DOWN
        up   = [0] * n   # max edges going UP

        def dfs1(node, parent):
            for nei in adj[node]:
                if nei == parent: continue
                dfs1(nei, node)
                down[node] = max(down[node], 1 + down[nei])

        def dfs2(node, parent):
            children = [c for c in adj[node] if c != parent]

            top1 = top2 = -1    # -1 means "no sibling"
            for c in children:
                if down[c] >= top1: top2, top1 = top1, down[c]
                elif down[c] > top2: top2 = down[c]

            for nei in children:
                best_sibling = top2 if down[nei] == top1 else top1
                sib_contrib  = (1 + best_sibling) if best_sibling >= 0 else 0
                up[nei] = 1 + max(up[node], sib_contrib)
                dfs2(nei, node)

        dfs1(0, -1)
        dfs2(0, -1)

        # +1 for the node itself; height = longest path in any direction
        heights = [1 + max(down[i], up[i]) for i in range(n)]
        minval  = min(heights)
        return [i for i in range(n) if heights[i] == minval]