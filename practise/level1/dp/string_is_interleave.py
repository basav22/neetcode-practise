
# Input: s1 = "aaaa", s2 = "bbbb", s3 = "aabbbbaa"

# Output: true
class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
        dp=[[(False,len(s1), len(s2))]* len(s3) for _ in [1,2]]
        print(len(dp)) # (Match, rev_s1_index, rev_s2_index)

        # for j in range(len(dp[0])-1, -1, -1):
        #     for i in range(len(dp)-1, -1, -1):
        #         dp[i][j] = 



if __name__ == "__main__":
    nums = [3,4,5,6]
    target = 7
    solution = Solution()
    s1,s2,s3 =  "aaaa","bbbb","aabbbbaa"
    result = solution.isInterleave(s1,s2,s3)
    print(f"Min cost : {result}")