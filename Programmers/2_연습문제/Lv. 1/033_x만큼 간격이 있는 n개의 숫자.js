function solution(x, n) {
  return Array.from({ length: n }, (_, i) => x * (i + 1)); //한 번에 두개를 수행하는
}

//Try Again !
function solution(x, n) {
  return Array(n).fill(x).map((v, i) => (i + 1) * v);
}

//
function solution(x, n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}

/** TIL
 * 🥲 반성
 * 한 번에 두 개를 수행하는 Array.from보다 Array.fill.map이 빠름
 */
