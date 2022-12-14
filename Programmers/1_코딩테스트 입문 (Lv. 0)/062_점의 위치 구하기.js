function solution(dot) {
  return dot[0] * dot[1] > 0 ? (dot[0] > 0 ? 1 : 3) : dot[0] < 0 ? 2 : 4;
}

//Try Again !
function solution(dot) {
  return dot[0] > 0 ? (dot[1] > 0 ? 1 : 4) : dot[1] > 0 ? 2 : 3;
}

/** TIL
 * 🥲 반성
 * * 필요하지 않은 연산
 */
