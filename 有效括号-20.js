// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

// 示例 1:

// 输入: "()"
// 输出: true
// 示例 2:

// 输入: "()[]{}"
// 输出: true
// 示例 3:

// 输入: "(]"
// 输出: false
// 示例 4:

// 输入: "([)]"
// 输出: false
// 示例 5:

// 输入: "{[]}"
// 输出: true

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/valid-parentheses
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var isValid = function (s) {
  let stack = []
  for (let i = 0; i < s.length; i++) {
    let ch = s.charAt(i)
    if (ch == '(' || ch == '[' || ch == '{') stack.push(ch)
    if (!stack.length) return false
    if (ch == ')' && stack.pop() !== '(') return false
    if (ch == ']' && stack.pop() !== '[') return false
    if (ch == '}' && stack.pop() !== '{') return false
  }
  return stack.length === 0
}
