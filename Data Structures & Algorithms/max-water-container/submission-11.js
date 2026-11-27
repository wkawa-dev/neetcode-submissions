class Solution {
    maxArea(heights) {
       for(let i=0;i<heights.length;i++) {
        let l = 0;
        let r = heights.length-1;
        let result = 0;
            while(l<r) {
                const height = Math.min(heights[l], heights[r])
                const width = (r-l)
                const area = height*width
                result = area > result ? area : result

                if(heights[l] < heights[r]) {
                    l++;
                } else {
                    r--;
                }
            }
            return result
       }
    }
}
