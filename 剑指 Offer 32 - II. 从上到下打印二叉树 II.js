/**
 * 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

 

例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：

[
  [3],
  [9,20],
  [15,7]
]
 

提示：

节点总数 <= 1000

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelOrder = function (root) {
  let res = []; //用于存放遍历过后的节点
  let queue = [root]; //构造队列数组，存放root节点
  let level = 0; //代表当前层数
  //判空
  if (!root) return res;
  while (queue.length) {
    res[level] = []; //第level层的遍历节点
    let levelNums = queue.length; //第level层的节点数量
    while (levelNums--) {
      const node = queue.shift(); //出队
      res[level].push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    level++;
  }
  return res;
};
