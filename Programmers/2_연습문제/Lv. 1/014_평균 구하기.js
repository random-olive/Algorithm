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
 * π₯² λ°μ±
 * array ννμΌ λλ for λ£¨νλ³΄λ€ forEach μ¬μ©μ΄ ν¨μ¬ λΉ λ₯Έ λ―νλ€.
 * μλ : 3 > 1 > 2
 */
