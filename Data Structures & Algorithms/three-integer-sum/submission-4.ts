class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const sorted = [...nums].sort((a, b) => a - b);
        const len = sorted.length;
        const result = [];
        for (let i = 0; i < len - 2; i++) {
            if(i>0 && sorted[i] === sorted[i - 1]) {
                continue;
            }
            const val = sorted[i];
            let IdxL = i + 1;
            let IdxR = len - 1;
            console.log(val, IdxL, IdxR);

            while (IdxL < IdxR) {
                const sum = val + sorted[IdxL] + sorted[IdxR];
                if (sum < 0) {
                    IdxL++;
                } else if (sum > 0) {
                    IdxR--;
                } else {
                    console.log("hello")
                    result.push([val, sorted[IdxL], sorted[IdxR]]);
                    IdxL++;
                    while (IdxL < IdxR && sorted[IdxL] === sorted[IdxL - 1]) {
                        IdxL++;
                    }
                }
            }
        }

        return result;
    }
}
