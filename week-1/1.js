// 1. 两数之和（https://leetcode-cn.com/problems/two-sum/）
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 1.1
    // for (let i = 0; i < nums.length - 1; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] === target) {
    //             return [i, j];
    //         }
    //     }
    // }

    // 1.2
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        let key = target - nums[i];
        if (hash[nums[i]] == undefined) {
            hash[key] = i;
        } else {
            return [hash[nums[i]], i];
        }
    }
};