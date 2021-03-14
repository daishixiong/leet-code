// 49. 字母异位词分组 (https://leetcode-cn.com/problems/group-anagrams/)
/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {
    // 1.1
    let hash = {};
    for (let i = 0; i < strs.length; i++) {
        if (hash[strs[i].split("").sort().join("")]) {
            hash[strs[i].split("").sort().join("")].push(strs[i]);
        } else {
            hash[strs[i].split("").sort().join("")] = [strs[i]];
        }
    }
    return [...Object.values(hash)];
};