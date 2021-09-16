// 多维数组 flatten
// 将多维数组转化为一维数组。
// [1, [2, [3, [4, 5]]], 6] -> [1, 2, 3, 4, 5, 6]

let flatten = nestedList => {
  nestedList.reduce((pre, cur) => {
    pre.concat(Array.isArray(cur) ? flatten(cur) : cur, [])
  },[])
}
