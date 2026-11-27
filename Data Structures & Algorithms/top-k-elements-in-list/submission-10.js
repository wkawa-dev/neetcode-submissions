class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const tally = {
            // val: count
        }
        const sorted = [...nums].sort((a,b)=>a-b)
        console.log(sorted)

        for(let i = 0; i<sorted.length;i++) {
            if([nums[i]] in tally) {
                const currVal = tally[nums[i]]
                tally[nums[i]] = currVal+1
            }
            else {
                tally[nums[i]] = 1
            }
        }
          // sort, pick k largest, // map to fit expected sol
        const solution = 
        Object.entries(tally).sort((a,b)=>b[1]-a[1])
        .slice(0,k)
        .map((el)=>Number(el[0]))
   
        
        return solution
    }
}
