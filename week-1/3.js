// 189. 旋转数组(https://leetcode-cn.com/problems/rotate-array/)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // 1.1
    // let ret_arr = Array(nums.length).fill(0);
    // for (let i = 0; i < nums.length; i++) {
    //     ret_arr[i] = nums[(nums.length - k + i) % nums.length];
    // }
    // return ret_arr;

    // 1.2
    // while(k--) { nums.unshift(nums.pop()); }

    // 1.3
    let reverse = function (start, end, arr) {
        while(start < end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
    k = k % nums.length;
    reverse(0, nums.length - 1, nums);
    reverse(0, k - 1, nums);
    reverse(k, nums.length - 1, nums);
};