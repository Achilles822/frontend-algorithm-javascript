// 912. 排序数组
// 给你一个整数数组 nums，请你将该数组升序排列。

// 示例 1：

// 输入：nums = [5,2,3,1]
// 输出：[1,2,3,5]
// 示例 2：

// 输入：nums = [5,1,1,2,0,0]
// 输出：[0,0,1,1,2,5]
// 归并
// https://leetcode-cn.com/problems/sort-an-array/solution/gui-bing-suan-fa-js-by-liu-yuan-quan/

var sortArray = function (nums) {
    let len = nums.length
    if (len === 1) return nums
    let mid = len / 2
    let left = nums.slice(0, mid)
    let right = nums.slice(mid, len)
    return merge(sortArray(left), sortArray(right))
}
var merge = function (left, right) {
    let result = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left[0])
            left.splice(0, 1)
        } else {
            result.push(right[0])
            right.splice(0, 1)
        }
    }
    return result.concat(left).concat(right)
}