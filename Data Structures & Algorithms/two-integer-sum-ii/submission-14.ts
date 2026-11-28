class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        const len = numbers.length
        for(let i = 0; i<len; i++) {
            let l = 0;
            let r = len-1;
            while(l<r) {
               const result = numbers[l] + numbers[r]
               if(result < target) {
                l++
               } else if (result > target) {
                r--
               } else {
                return [l+1,r+1]
               }
            }   



        } 
    }
}
