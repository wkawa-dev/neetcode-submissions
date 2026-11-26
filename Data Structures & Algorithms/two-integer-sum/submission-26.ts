class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const hmap: Map<number, number> = new Map();
        for (let i = 0; i < nums.length; i++) {
            const missing = target-nums[i]
            if(hmap.has(missing)) {
                return [
                    hmap.get(missing),
                    i
                ]   
            }
            hmap.set(nums[i], i)
        }

        return [];
    }
}
