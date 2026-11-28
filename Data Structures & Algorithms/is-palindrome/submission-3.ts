class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
   isPalindrome(s) {
        const x = [...s.toLowerCase()].
        filter(char => char.toLowerCase() !== char.toUpperCase() || 
        (char <= "9" && char >= "0")).
        join("")
        
        return x === [...x].reverse().join("")
    }
}
