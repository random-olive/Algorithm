function solution(k, m, score) {
  let result = [];
  score.sort((a, b) => b - a);
  for (let i = 0; i < score.length / m; ) {
    let arr = score.splice(0, m);
    result.push(arr);
  }
  return result.reduce((a, c) => (c.length === m ? c[c.length - 1] * m + a : a), 0);
}
