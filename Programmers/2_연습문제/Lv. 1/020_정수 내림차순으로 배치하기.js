function solution(n) {
  return +[...`${n}`].sort((a, b) => b - a).join('');
}

//Try Again !
function solution(n) {
  return +(n + '').split('').sort().reverse().join('');
}

//
function solution(n) {
  let nums = [];

  while (n > 0) {
    nums.push(n % 10);
    n = ~~(n / 10);
  }

  return +nums.sort((a, b) => b - a).join('');
}

/** TIL
 * sort(b-a) -> reverse(),  [`${}`] -> n+''.split('') => 속도 개선
 */
