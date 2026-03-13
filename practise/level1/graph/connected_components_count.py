class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        # build adj list

        # union find algo
        # union(n1, n2) - findParen(n1), findParent(n2)
        # if parents are same part of same tree
        # else connect rank wise - connect lower_rank to other parent
        # optimization - path compression, rank ordering
        rank = [1] * n
        parent = [i for i in range(n)]
        res = set()
        
        def find(node): #find parent
            if node != parent[node]:
               parent[node] = find(parent[node])
            return parent[node]

        def union(node1, node2):
            p1, p2 = find(node1), find(node2)
            print('parent of ', node1, 'is =---', p1)
            print('parent of ', node2, 'is =---', p2)
            if p1 == p2:
                return 0
            if rank[p1]>=rank[p2]:
                parent[p2] = p1
                rank[p1] += rank[p2]
                print('return 1 --', p1)
                print(rank)
                # return p1
            else:
                parent[p1] = p2
                rank[p2] += rank[p1]
                print('return 2 --', p2)
                print(rank)
                # return p2
            return 1
        res = n
        for n1, n2 in edges:
            print('calling ', n1,  '---', n2)
            res -= union(n1,n2)
        return res
