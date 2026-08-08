class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        prevMap = {}
        for num in range(len(nums)):
            if target-nums[num] in prevMap:
                return [prevMap[target-nums[num]], num]
            prevMap[nums[num]] = num

