function solution(s) {
  //return (s.match(/p/ig)||[]).length === (s.match(/y/ig)||[]).length
  return s.match(/p/gi)?.length === s.match(/y/gi)?.length;
}

//Try Again !
function solution(s) {
  return s.toUpperCase().split('P').length === s.toUpperCase().split('Y').length;
}

//
function solution(s) {
  return [...s.toLowerCase()].reduce((a, c) => {
    if (c === 'p') return a + 1;
    if (c === 'y') return a - 1;
    return a}, 0) ? false : true;
}

/** TIL
 * undefined 진행 : Optional chaining / 초기값 지정
 */
