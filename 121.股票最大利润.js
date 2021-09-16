// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

//  

// 示例 1：

// 输入：[7,1,5,3,6,4]
// 输出：5
// 解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
//      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
// 示例 2：

// 输入：prices = [7,6,4,3,1]
// 输出：0
// 解释：在这种情况下, 没有交易完成, 所以最大利润为 0。


// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
// 最佳题解：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/solution/teng-xun-leetcode121mai-mai-gu-piao-de-zui-jia-shi/
// 解法：动态规划
// 动态规划（Dynamic Programming，DP）是一种将复杂问题分解成小问题求解的策略，但与分治算法不同的是，分治算法要求各子问题是相互独立的，而动态规划各子问题是相互关联的。

// 分治，顾名思义，就是分而治之，将一个复杂的问题，分成两个或多个相似的子问题，在把子问题分成更小的子问题，直到更小的子问题可以简单求解，求解子问题，则原问题的解则为子问题解的合并。

// 我们使用动态规划求解问题时，需要遵循以下几个重要步骤：

// 定义子问题
// 实现需要反复执行解决的子子问题部分
// 识别并求解出边界条件
// 第一步：定义子问题

// 动态规划是将整个数组归纳考虑，假设我们已经知道了 i-1 个股票的最大利润为 dp[i-1]，显然 i 个连续股票的最大利润为 dp[i-1] ，要么就是就是 prices[i] - minprice （ minprice 为前 i-1 支股票的最小值 ），在这两个数中我们取最大值

// 第二步：实现需要反复执行解决的子子问题部分


// dp[i] = Math.max(dp[i−1], prices[i] - minprice)
// 第三步：识别并求解出边界条件


// dp[0]=0
// 最后一步：把尾码翻译成代码，处理一些边界情况

// 因为我们在计算 dp[i] 的时候，只关心 dp[i-1] 与 prices[i]，因此不用把整个 dp 数组保存下来，只需设置一个 max 保存 dp[i-1] 就好了。

// 代码实现（优化）：


// let maxProfit = function(prices) {
//     let max = 0, minprice = prices[0]
//     for(let i = 1; i < prices.length; i++) {
//         minprice = Math.min(prices[i], minprice)
//         max = Math.max(max, prices[i] - minprice)
//     }
//     return max
// }
// 复杂度分析：

// 时间复杂度：O(n)
// 空间复杂度：O(1)

// 作者：user7746o
// 链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/solution/teng-xun-leetcode121mai-mai-gu-piao-de-zui-jia-shi/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function (prices) {
    let max = 0
    let min = prices[0]
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i])
        max = Math.max(max, prices[i] - min)
    }
    return max
};