function solution(n) {
  return Math.ceil(n / 7);
}

//Try Again !
function solution(n) {
  return ((n / 7) << 0) + !!(n % 7);
}

function solution(n) {
  return ~~(n / 7) + !!(n % 7);
}

/** TIL
 * 🥲 반성 : #43 (Lv.0)
 * 복습 : Operator : !!  => 확실한 논리결과를 가지기 위함 : 정의되지 않은 undefined 등의 값에도 확실한 true / false 값을 줌 + NOT
 */