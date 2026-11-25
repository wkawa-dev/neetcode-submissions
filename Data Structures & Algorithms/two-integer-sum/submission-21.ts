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
            console.log('seeking ', k)

            if(seen.has(k)) {
                console.log(seen.get(k))
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
