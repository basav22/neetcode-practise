class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        # bucket sort
        bucket = [0] * 3

        for i in range(len(nums)):
            bucket[nums[i]] += 1
        counts = {}
        counts.values()
        # [2,2,2]
        ind = 0
        for i in range(len(bucket)):
            for j in range(bucket[i]):
                nums[ind] = i
                ind += 1
        

