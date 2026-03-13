
from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        nums.sort()

        l,r = 0, len(nums)-1

        while l<r:
            sum = nums[l] + nums[r]
            if sum < target:
                l += 1
            elif sum > target:
                r -= 1
            else:
                return [l,r]
    # TIme - O(n)
    # Space - O(1)

if __name__ == "__main__":
    nums = [3,4,5,6]
    target = 7
    solution = Solution()
    result = solution.twoSum(nums, target)
    print(f"Min cost : {result}")