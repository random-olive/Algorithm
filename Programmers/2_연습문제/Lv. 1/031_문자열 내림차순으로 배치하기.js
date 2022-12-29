function solution(s) {
  return s.split('').sort().reverse().join('');
}

//Try Again !
function solution(s) {
  return [...s].sort((a, b) => (a < b ? 1 : -1)).join('');
}

/** TIL
 * sort (a,b,c,d..): 대문자 우선 자동정렬
 * sort((a, b) => (a < b ? 1 : -1))
 */
