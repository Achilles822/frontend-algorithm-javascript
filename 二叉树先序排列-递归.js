// 题目描述：给定一个二叉树，返回它的前序（先序）遍历序列。

// 示例:

// 输入: [1,null,2,3]

// 1
//  \
//   2
//  /
// 3
// 输出: [1,2,3]
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？

const preorderTraversal = function (root) {
  if (!root) {
    return
  }
  let ret = []
  let stack = []

  stack.push(root)

  while (stack.length) {
    let cur = stack.pop()
    ret.push(cur.val)
  }
}
