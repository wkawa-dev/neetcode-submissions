class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        for(let i = 0; i<nums.length;i++) {
            const missing = target - nums[i]
            console.log(missing)
            if(map.has(missing)) {
                const solution = [map.get(missing), i]
                return solution
            }
            map.set(nums[i], i)
        }
        //   return []
    }
  
}
