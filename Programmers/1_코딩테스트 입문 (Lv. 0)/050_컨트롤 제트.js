function solution(s) {
  let arr = s.split(' ').map((el) => +el);

  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) arr[i] = -arr[i - 1];
  }
  return arr.reduce((a, c) => a + c);
}

//Try Again !
function solution(s) {
  s = s.split(' ');
  let arr = [];
  for (let el of s) el === 'Z' ? (arr.length ? arr.pop() : '') : arr.push(el);
  return arr.reduce((a, c) => a + +c, 0);
}

function solution(s) {
  return s.split(' ').reduce((a, c) => (c == 'Z' ? a.slice(0, -1) : [...a, c]), []).map(Number)
  .reduce((a, c) => a + c, 0);
}

function solution(s) {
  const arr = s.split(' ');
  while (arr.includes('Z')) arr.splice(arr.indexOf('Z') - 1, 2);
  return arr.reduce((a, c) => +c + a, 0);
}

/** TIL
 * 🥲 반성
 * 시간복잡도, 공간복잡도 -> 필요없는 데이터 "변환" 지양 & 데이터 용량 최소화
 *
 * 취소 로직 : pop, slice, splice
 * 
 * map(Number) => number !
 * 
 */
