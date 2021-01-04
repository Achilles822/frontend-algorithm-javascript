// 给出一个字符串，查找字符串中最长的子字符，并返回其长度
// findLongestWord("Google do a barrel roll") ==> 6

let findLongestWord = s => {
  let max = 0
  s.split(' ').forEach(item => {
    item.length > max ? (max = item.length) : null
  })
  return max
}

findLongestWord('Google do a barrel roll')
