class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
    const length = nums.length;
    let prefix = 1;
    let postfix = 1;
    let output = Array(length).fill(1);
    for(let i=0;i<length;i++){
        output[i] = prefix*output[i];
        output[length-1-i] = postfix*output[length-1-i];
        prefix = nums[i]*prefix;
        postfix = nums[length-1-i]*postfix;
    }
    return output;
    }
}
