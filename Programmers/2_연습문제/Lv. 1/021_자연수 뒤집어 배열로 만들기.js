function solution(n) {
    return ('' + n).split('').reverse().map((el) => +el);
}

//Try Again !
function solution(n) {
  let answer = [];
  n = '' + n;

  for (let i = 0; i < n.length; i++) {
    let slice = +n.substr(i, 1);
    answer.unshift(slice);
  }

  return answer;
}
