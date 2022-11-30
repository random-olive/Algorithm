function solution(array, n) {
  let difference = array.sort((a, b) => a - b).map((el) => Math.abs(el - n));
  return array[difference.indexOf(Math.min(...difference))];
}

//Try Again !
function solution(array, n) {
  array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b);
  return array[0];
}  

function solution(array, n) {
  return array[array.sort((a, b) => a - b).map((el) => Math.abs(el - n)).indexOf(Math.min(...array.map((el) => Math.abs(el - n))))];
}

function solution(array, n) {
  return array.sort((a, b) => a - b).map((el) => [Math.abs(n - el), el]).sort((a, b) => a[0] - b[0])[0][1]}

function solution(array, n) {
  return array.reduce((acc, cur) =>
    Math.abs(acc - n) < Math.abs(cur - n) ? acc : Math.abs(acc - n) === Math.abs(cur - n) ? Math.min(acc, cur) : cur)}



/** TIL
 *🥲 반성 : index값을 구하지 말고 []에 지정해서 편하게 꺼내 쓰기
           sort, reduce
           자료형태가 가장 단순할 때 sort
           예외 케이스- 입출력 형태 의심해보기
 */
