function solution(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 1) return i;
  }
}

//Try Again !
function solution(n) {
  for (let i = 2; ; i++) { //이번에는 아니지만: 끝까지 해야하는 경우 종료조건 기입 x
    if (n % i === 1) return i;
  }
}

//
function solution(n) {
  var answer = 1;
  while (n % answer != 1) answer++;
  return answer;
}
