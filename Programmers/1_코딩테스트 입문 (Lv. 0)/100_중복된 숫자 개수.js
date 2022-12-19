function solution(array, n) {
  return array.filter((el) => el === n).length;
}

//Try Again !
function solution(array, n) {
  return array.reduce((a, c) => { if (c === n) a++; return a }, 0);
}
