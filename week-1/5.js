// 347. 前 K 个高频元素 （https://leetcode-cn.com/problems/top-k-frequent-elements/）
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function(nums, k) {
    // 1.1
    let hash = {};
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] = (hash[nums[i]] || 0) + 1;
    }
    return Array.from(nums).sort((a, b) => hash[b] - hash[a]).slice(0, k);
};