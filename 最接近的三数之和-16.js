// 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

// 示例：

// 输入：nums = [-1,2,1,-4], target = 1
// 输出：2
// 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
//

// 提示：

// 3 <= nums.length <= 10^3
// -10^3 <= nums[i] <= 10^3
// -10^4 <= target <= 10^4
function threeSumClosest (nums, target) {
  let n = nums.length
  if (n === 3) {
    return getSum(nums)
  }
  //   先升序
  nums.sort((a, b) => a - b)
  let min = Infinity
  let res

  for (let i = 0; i <= nums.length - 3; i++) {
    let basic = nums[i]
    let left = i + 1
    let right = n - 1
    while (left < right) {
      let sum = basic + nums[left] + nums[right]
      let diff = Math.abs(sum - target)
      if (diff < min) {
        min = diff
        res = sum
      }
      if (sum < target) {
        left++
      } else if (sum > target) {
        right--
      } else {
        return sum
      }
    }
  }
  return res
}
function getSum (nums) {
  return nums.reduce((total, cur) => {
    total + cur
  }, 0)
}
