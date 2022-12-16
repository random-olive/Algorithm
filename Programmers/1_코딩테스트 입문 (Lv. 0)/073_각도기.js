function solution(angle) {
  return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}

//Try Again !
function solution(angle) {
  return [0, 90, 91, 180].filter((el) => angle >= el).length;
}

/** TIL
 * 🥲 반성
 * 일대일 대응 / 변환  => 객체 object 사용, filter 사용
 */