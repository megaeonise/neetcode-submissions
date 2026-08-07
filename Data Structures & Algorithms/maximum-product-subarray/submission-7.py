class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        answer = max(nums)
        max_min = [1,1]
        for num in nums:
            if num == 0:
                max_min = [1,1]
                continue
            tmp = num*max_min[0]
            max_min[0] = max(tmp, num*max_min[1], num)
            max_min[1] = min(tmp, num*max_min[1], num)
            answer = max(max_min[0], answer)
        return answer
        
        

        