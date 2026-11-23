class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        let x = 1, y=1;
        for(let i = 0; i<n-1;i++) {
            let z = x
            x = x+y
            y=z;
        }
        return x
    }
}
