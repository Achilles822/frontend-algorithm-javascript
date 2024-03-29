// 给定一个二叉树的根节点 root ，返回它的 中序 遍历。
// 示例 1：

// 输入：root = [1,null,2,3]
// 输出：[1,3,2]
// 示例 2：

// 输入：root = []
// 输出：[]
// 示例 3：

// 输入：root = [1]
// 输出：[1]
// 示例 4：

// 输入：root = [1,2]
// 输出：[2,1]
// 示例 5：

// 输入：root = [1,null,2]
// 输出：[1,2]
//

// 提示：

// 树中节点数目在范围 [0, 100] 内
// -100 <= Node.val <= 100
//

// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/binary-tree-inorder-traversal
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 最佳题解：https://leetcode-cn.com/problems/binary-tree-inorder-traversal/solution/er-cha-shu-de-zhong-xu-bian-li-by-leetcode-solutio/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归：
var inorderTraversal = function (root) {
  let ret = []
  const inOrder = root => {
    if (!root) return
    inOrder(root.left)
    ret.push(root.val)
    inOrder(root.right)
  }
  inOrder(root)
  return ret
}
