class Solution:
    # @param A : list of integers
    # @return an integer
    def solve(self, A):
        # A = [2,3,4,1]
        # all permutations - [2], [2,3] [2,3,4] [2,3,4,1]
        # for len = k -> only 1 solution
        # for each len (1,2,3,4) - we find and using map to see their indices
        visit = {}
        for i in range(len(A)):
            visit[A[i]] = i
        res, prev = 0, -1
        # print visit
        for k in range(1,len(A)+1):
            prev, cnt = -1, 0
            for i in range(1,k+1):
                if i not in visit:
                    break
                if visit[i] not in [0,k-1]: # in bound
                    print('breaking')
                    break
                cnt += 1
                # prev = visit[i]
            
            print('cnt -->',cnt, 'k -->', k)  
            res += 1 
        return res
    
if __name__ == "__main__":
    A = [2,1,3,4]
    # target = 7
    solution = Solution()
    result = solution.solve(A)
    print(f"Min cost : {result}")