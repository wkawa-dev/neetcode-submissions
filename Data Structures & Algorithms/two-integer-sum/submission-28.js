class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = new Map();

        for(let x = 0; x<nums.length;x++){
            const y = target - nums[x]
            if(seen.has(y)) {
                return [
                    seen.get(y), x
                ]
            }
            seen.set(nums[x], x)
        }
    }
}
