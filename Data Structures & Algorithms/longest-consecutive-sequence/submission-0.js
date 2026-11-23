class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const hashSet = new Set(nums)
        // console.log(hashSet)
        const potentialStarters = []

        for(let el of hashSet) {
            if(!hashSet.has(el-1)) {
                potentialStarters.push(el)
            }
        }
        const starterSet = new Set(potentialStarters)
        let longest = 0;
        for(let el of starterSet) {
            let currentNum = el;
            let currentStreak = 1;
            while(hashSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }
            if (currentStreak > longest) {
                longest = currentStreak;
            }
        }

        return longest;
    }
}