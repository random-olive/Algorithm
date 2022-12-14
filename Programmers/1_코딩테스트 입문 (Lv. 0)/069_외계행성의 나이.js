function solution(age) {
  let data = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  return [...`${age}`].map((el) => data[el]).join('');
}

//Try Again !
function solution(age) {
  return [...`${age}`].map((el) => 'abcdefghij'[el]).join('');
}

function solution(age) {
  return [...`${age}`].replace(/./g, (el) => 'abcdefghij'[el]);
}

/** TIL
 * 🥲 반성
 * String -> iterable ! index 활용시 arr 보다 우선하기
 */