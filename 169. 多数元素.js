// 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

//

// 示例 1：

// 输入：[3,2,3]
// 输出：3
// 示例 2：

// 输入：[2,2,1,1,1,2,2]
// 输出：2
//

// 进阶：

// 尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/majority-element
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 摩尔投票法：https://leetcode-cn.com/problems/majority-element/solution/169duo-shu-yuan-su-mo-er-tou-piao-fa-zhu-wbcb/
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let result = nums[0] //使用result作为结果元素
  let times = 1 //定义times初始化次数为1
  for (let i = 1; i < nums.length; i++) {
    //使用times逐个统计元素出现的次数，相同就+1，不同就-1
    if (nums[i] !== result) {
      times--
    } else {
      times++
    }
    //当times=-1时，重置times=1，且令result = nums[i]
    if (times == -1) {
      result = nums[i]
      times = 1
    }
  }
  //多数元素在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素，那么最后一定能剩下
  return result
}
