function solution(array) {
  const max = Math.max(...array);
  const idx = array.indexOf(max);
  return [max, idx];
}

//Try Again !
function solution(array) {
  let max = Math.max(...array);
  return [max, array.indexOf(max)];
}


/** TIL
 * Math.max((value(s)))  => number || -Infinity
 *
 ** EXAMPLE
 * Math.max(1,2,3)  => 3
 *
 *
 *🥲 반성 : 다 풀고나서 반복 제거 꼭 하기!
 */

