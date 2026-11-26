class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        for (let j = 0; j < heights.length; j++) {
            let r = heights.length - 1;
            let l = 0;
            let result = 0;

            while (l < r) {
                const area = Math.min(heights[l], heights[r]) * (r - l);
                console.log(area);
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
