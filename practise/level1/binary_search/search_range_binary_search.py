from typing import List


class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        # nums = [1,2,3,4,5], target = 5
        # when we find target - look left or right
        # otherwise normal binary search
        left = self.binSearch(nums, target, True)
        right = self.binSearch(nums, target, False)
        return [left,right]
    def binSearch(self,nums, target,leftBias):
            l, r = 0, len(nums) - 1
            resL = -1
            while l<=r:
                mid = (l+r)//2
                if nums[mid] < target:
                    l = mid + 1
                elif nums[mid] > target:
                    r = mid - 1
                else:
                    resL = mid
                    if leftBias:
                        r = mid - 1
                    else:
                        l = mid + 1
            return resL
    
if __name__ == "__main__":
    nums = [5,7,7,8,8,10]
    target = 8
    # nums = [1,2,3,4,5]
    # target = 5
    # nums = [1]
    # target = 1
    solution = Solution()
    result = solution.searchRange(nums, target)
    print(f"Min cost : {result}")
        