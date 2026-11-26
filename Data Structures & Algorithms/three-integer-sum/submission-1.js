class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */


    threeSum(nums) {
        const arr = [...nums].sort((a, b) => a-b) 
        const res = []
        for (let i=0; i<arr.length-2;i++) {
            if(i > 0 && arr[i] === arr[i-1]) {
                continue;
            }
            const val = arr[i]
            let l = i+1
            let r = arr.length-1
            while(l<r) {
                const sum = val + arr[l] + arr[r]
                if(sum<0) {
                    l++
                } else if (sum>0){
                    r--
                }
                else {
                    res.push([val, arr[l], arr[r]])
                    l++
                    while(l<r && arr[l]===arr[l-1]){
                    l++
                }
                }
               

            }
        }    


        return res
    }
}
