function solution(arr) {
  return arr.reduce((a, c) => +c + a, 0) / arr.length;
}

//Try Again !
function solution(array, sum = 0) {
  for (let el of array) {
    sum += el;
  }
  return sum / array.length;
}

//
function solution(array, sum = 0) {
  array.forEach((el) => {sum += el});
  return sum / array.length;
}

/** TIL
 * 🥲 반성
 * array 형태일 때는 for 루프보다 forEach 사용이 훨씬 빠른 듯하다.
 * 속도 : 3 > 1 > 2
 */
