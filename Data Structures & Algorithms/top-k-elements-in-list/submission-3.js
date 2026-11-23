class Solution {
    topKFrequent(nums, k) {
        const counts = new Map();
        for (const num of nums) {
            counts.set(num, (counts.get(num) || 0) + 1);
        }
        return [...counts.keys()]
            .sort((a, b) => counts.get(b) - counts.get(a))
            .slice(0, k);
    }
}