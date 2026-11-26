class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const sorted = [...nums].sort((a, b) => a - b);
        const result: number[][] = [];

        for (let i = 0; i < sorted.length - 2; i++) {
            if (i > 0 && sorted[i] === sorted[i - 1]) {
                continue;
            }
            const val = sorted[i];
            let l = i + 1;
            let r = sorted.length - 1;

            while (l < r) {
                const sum = val + sorted[l] + sorted[r];
                if (sum < 0) {
                    l++;
                } else if (sum > 0) {
                    r--;
                } else {
                    result.push([sorted[l], sorted[r], val]);
                    l++;
                    while (l < r && sorted[l] === sorted[l - 1]) {
                        l++;
                    }
                }
            }
        }

        return result;
    }
}
