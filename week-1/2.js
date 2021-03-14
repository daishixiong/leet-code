// 283. 移动零 (https://leetcode-cn.com/problems/move-zeroes/)
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(nums) {
    // 1.1
    // let count = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] === 0) {
    //         nums.splice(i, 1);
    //         i--;
    //         count++;
    //     }
    // }
    // return nums.push(...[...Array(count)].map(_ => 0));

    // 1.2
    // let i = 0;
    // let j = 0;
    // while(j < nums.length) {
    //     if (nums[j] !== 0) {
    //         nums[i] = nums[j];
    //         i++
    //     }
    //     j++;
    // }
    // for (let k = i; k < nums.length; k++) {
    //     nums[k] = 0;
    // }
    // return nums;

    // 1.3
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            count++;
        } else if (count > 0) {
            let temp = nums[i];
            nums[i] = 0;
            nums[i - count] = temp;
        }
    }
    return nums;
};