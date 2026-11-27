class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
   isPalindrome(s) {
        const x = [...s.toLowerCase()].
        filter(c => c.toLowerCase() !== c.toUpperCase() || (c >= "0" && c <= "9")).
        join("")
        
        return x === [...x].reverse().join("")
    }
}
