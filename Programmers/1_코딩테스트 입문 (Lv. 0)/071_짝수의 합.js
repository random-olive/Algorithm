function solution(n) {
  let answer = 0;
  for (let i = 2; i <= n; i += 2) {
    answer += i;
  }
  return answer;
}

//Try Again !
function solution(n) {
  let half = ~~(n / 2);
  return half * (half + 1);
}

function solution(n) {
  let answer = 0;
  while (n > 0) {
    answer += n;
    n -= 2;
  }
  return answer;
}

/** TIL
 * 🥲 반성
 * 단순 계산은 formulate
 */