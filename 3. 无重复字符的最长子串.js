// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

//  

// 示例 1:

// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
// 示例 4:

// 输入: s = ""
// 输出: 0
//  

// 提示：

// 0 <= s.length <= 5 * 104
// s 由英文字母、数字、符号和空格组成

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 最佳题解：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/solution/tong-su-yi-dong-cong-bao-li-dao-hua-dong-cucu/

var lengthOfLongestSubstring = function (s) {
    let len = s.length;
    let set = new Set()
    // 左指针用来收缩窗口
    // 右指针用来扩张窗口
    let left = right = 0;
    let result = 0;
    while (left < len) {
        // 如果不重复，就不断扩张窗口，元素添加到set中
        while (right < len && !set.has(s[right])) {
            set.add(s[right])
            right++
        }
        // 有重复的，收缩左窗口并从set移除
        result = Math.max(result, right - left)
        set.delete(s[left])
        left++
    }
    return result
}