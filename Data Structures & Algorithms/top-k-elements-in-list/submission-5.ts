class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const tally = {}
        for(let i = 0; i<nums.length; i++) {
                tally[nums[i]] = 0
        }
        // console.log(tally)

        for(let num of nums) {
            tally[num]+=1
        }   

        const result = Object.entries(tally)
        .sort((a, b) => Number(b[1]) - Number(a[1]))
        .slice(0, k)
        .map(pair => Number(pair[0]));
        return result
    }
}
