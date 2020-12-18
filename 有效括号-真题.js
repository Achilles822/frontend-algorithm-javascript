// 题目描述：给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

// 示例 1:

// 输入: "()"
// 输出: true

// 示例 2:

// 输入: "()[]{}"
// 输出: true

// 示例 3:

// 输入: "(]"
// 输出: false

// 示例 4:

// 输入: "([)]"
// 输出: false
// 示例 5:
// 输入: "{[]}"
// 输出: true

// 列出括号对应关系
const leftToRight = {
  '{': '}',
  '[': ']',
  '(': ')'
}

const isValid = function (s) {
  // 处理空字符串
  if (!s) {
    return true
  }
  //   模拟栈
  let stack = []
  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    // 如果是左侧括号，往栈推入右侧括号
    if (char[i] == '{' || char[i] == '(' || char[i] == '[')
      stack.push(leftToRight[char])
    else {
      // 如果是右侧括号，栈顶推出.若栈不为空，且栈顶的左括号没有和当前字符匹配上，那么判为无效
      if (!stack.length || stack.pop() !== char) {
        return false
      }
    }
  }
  // 若所有的括号都能配对成功，那么最后栈应该是空的
  return !stack.length
}
