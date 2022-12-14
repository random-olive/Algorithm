function solution(box, n) {
  return ~~(box[0] / n) * ~~(box[1] / n) * ~~(box[2] / n);
}

//Try Again !
function solution(box, n) {
  return box.reduce((a, c) => a * ~~(c / n), 1);
}

function solution(box, n) {
  return box.map((el) => ~~(el / n)).reduce((a, c) => a * c, 1);
}

/** TIL
 * 🥲 반성
 * 최대한 줄여보기
 */
