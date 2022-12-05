function solution(numlist, n) {
  return numlist.map((el) => [Math.abs(el - n), el]).sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0])).map((el) => el[1]);
}

//Try Again !
function solution(numlist, n) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}


/** TIL
 * 🥲 반성
 * Array.sort() 기본배열 부여
 */