class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const seen: Map<number,number> = new Map()

        for(let i = 0; i<nums.length;i++) {
            const x = target - nums[i];
            if(seen.has(x)) {
                const result = [
                    seen.get(x),
                    i
                ]
                return result
            }
            seen.set(nums[i], i)
        }
        return []
    }
}
