class Solution:
    def findMin(self, nums: List[int]) -> int:
        min_num = float("inf")
        start = len(nums)//2
        while True:
            if nums[start]<min_num:
                min_num = nums[start]
            else:
                break
            start -= 1
        return min_num



        