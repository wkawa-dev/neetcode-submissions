class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        for (let j = 0; j < heights.length; j++) {
            let l = 0; let r = heights.length-1;
            let result
            while (l < r) {
                const area = Math.min(heights[l], heights[r]) * (r - l);
                result = result > area ? result : area;
                if (heights[l] <= heights[r]) {
                    l++;
                } else {
                    r--;
                }
            }
            return result;
        }
    }
}
