// 描述：给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
// 输入: "aba"
// 输出: True
// 示例 2:
// 输入: "abca"
// 输出: True
// 解释: 你可以删除c字符。
// 注意: 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。

// 本题考察回文的对称性，可用双指针解题
const validPalindrome = function (s) {
  let i = 0,
    j = s.length - 1
  while (i < j && s[i] == s[j]) {
    i++
    j--
  }
  //   左侧指针跳过一个字符
  if (isPalindrome(i + 1, j)) {
    return true
  }
  //   右侧指针跳过一个字符
  if (isPalindrome(i, j - 1)) {
    return true
  }
  //   回文判断函数
  function isPalindrome (front, end) {
    while (front < end) {
      if (s[front] !== s[end]) {
        return false
      }
      front++
      end--
    }
    return true
  }

  return false
}
validPalindrome('abca') // true
validPalindrome('aba') // true
validPalindrome('abadc') // false
