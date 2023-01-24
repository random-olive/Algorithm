function solution(X, Y) {
  let answer = [];
  for (let i = 0; i < Y.length; i++) {
    if (X.includes(Y[i])) answer.push(+[Y[i]]);
  }
  if (answer.length === 0) answer.push(-1);
  return +answer.sort((a, b) => b - a).join('') + '';
}
