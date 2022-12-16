function solution(slice, n) {
  return ~~(n % slice === 0 ? n / slice : n / slice + 1);
}

//Try Again !
function solution(slice, n) {
  return Math.ceil(n / slice);
}

function solution(slice, n) {
  return ((n + slice - 1) / slice) << 0;
}

/** TIL
 * 🥲 반성
 * 올림, 내림 개념에서 분기가 나눠지는 것을 이해하기
 *
 * x 진수 관련 복습 Update
 * bitshift >>, << : 0을 추가하며 shift
 * unsigned "right" shift : >>> : 0을 추가하며 shift, 그러나 항상 부호 없는 32비트 정수 return
 * shift assignment : <<=, >>=, >>>= : shift + 왼쪽 변수에 할당까지 // x <<= y // x = x << y
 *
 * parseInt('101', 2), (5).toString(2) 
 */
