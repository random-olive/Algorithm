function solution(array) {
  return array.sort((a, b) => a - b)[~~(array.length / 2)];
}

//Try Again !
function solution(array) {
  return array.sort((a, b) => a - b)[(array.length - 1) / 2];
}

function solution(array) {
  return array.sort((a, b) => a - b).at(Math.floor(array.length / 2));
}

function solution(array) {
  return array.sort((a, b) => a - b)[Math.trunc(array.length / 2)];
}

/** TIL
 * Array.prototype.at(index) // element // 굳이 쓰지말고.. => [index]를 활용하자.
 * Math.trunc(number) // 숫자의 소수를 제거하고 정수부분만 반환(NaN 포함) .. => 그냥 ~~ 쓰자
 */
