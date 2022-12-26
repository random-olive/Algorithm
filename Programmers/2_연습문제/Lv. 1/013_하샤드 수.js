function solution(x) {
  return x % [...`${x}`].reduce((a, c) => +c + a, 0) === 0;
}

//Try Again !
function solution(x, i = 0, sum = 0) {
  return String(x).length == i ? x % sum == 0 : solution(x, i + 1, sum + +String(x)[i]);
}

/** TIL
 * 🥲 반성
 * 재귀 : 변수를 parameter에 지정, 삼항연산자 돌리고나서 value 변경
 */
