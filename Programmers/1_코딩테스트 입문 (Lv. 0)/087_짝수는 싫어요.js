function solution(n) {
  return Array.from({ length: Math.ceil(n / 2) }, (_, i) => 2 * i + 1);
}

//Another !
function solution(n) {
  return Array(Math.ceil(n / 2)).fill(1).map((el, i) => 2 * i + el);
}

//Try Again !
function solution(n) {
  return Array.from({ length: n }, (_, i) => i + 1).filter((el) => el % 2 === 1);
}

function solution(n) {
  let answer = [];
  for (let i = 1; i <= n; i += 2) answer.push(i);
  return answer;
}

/** TIL
 * 🥲 반성 : #43
 * Array : length로 만들기
 */