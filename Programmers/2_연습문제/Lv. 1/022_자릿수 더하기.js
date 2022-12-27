function solution(n) {
  return [...`${n}`].reduce((a, c) => +c + a, 0);
}

//Try Again !
function solution(n) {
  let answer = 0;
  n = '' + n;
  for (let i = 0; i < n.length; i++) {
    answer += +n[i];
  }

  return answer;
}

//
function solution(n, a = 0, b = 0) {
  return String(n).length == a ? b : solution(n, a + 1, (b += String(n)[a] * 1));
}
