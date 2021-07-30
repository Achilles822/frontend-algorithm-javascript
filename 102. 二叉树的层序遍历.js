// 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

//

// 示例：
// 二叉树：[3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其层序遍历结果：

// [
//   [3],
//   [9,20],
//   [15,7]
// ]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/binary-tree-level-order-traversal
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var levelOrder = function (root) {
  if (!root) return []
  let queue = [root] // 根节点入队
  let res = []
  while (queue.length) {
    // 当前层的数量
    res.push([]) // res中放入一个装当前层的空数组
    let len = queue.length
    while (len--) {
      // 从队列中，将当前层的元素推入res的尾巴数组中
      const node = queue.shift()
      res[res.length - 1].push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
  return res
}
