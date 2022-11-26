function solution(array) {
  return array.join('').split('').filter((el) => el === '7').length;
}

//Try Again !
function solution(array) {
  return array.join('').split('7').length - 1;
}

function solution(array) {
  let resolved = array.join('').match(/7/g);

  return resolved === null ? 0 : resolved.length;
}

/** TIL
 *🥲 반성 : 메서드 결과를 잘 파악하기
 */
