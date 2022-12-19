function solution(num1, num2) {
  return ~~((num1 / num2) * 1000);
}

//Try Again !
function solution(num1, num2) {
  return ((num1 / num2) * 1000) << 0;
}

/** TIL
 * 🥲 반성
 * 소수점 버리기 : bitshift 0, Math.floor(), Math.trunc(), parseInt(), ~~
 */