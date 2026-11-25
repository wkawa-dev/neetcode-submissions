class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const seen: Map<number,number> = new Map()
        for(let j=0; j<nums.length; j++) {
            const k = target - nums[j]
            if(seen.has(k)) {
                return [
                    seen.get(k),
                    j
                ]
            }
            seen.set(nums[j], j)
        }
        return []
    }
}
