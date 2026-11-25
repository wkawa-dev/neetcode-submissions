class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const w1 = Array.from(s).sort().toString()
        const w2 = Array.from(t).sort().toString()
    

        return w1===w2
    }
}
