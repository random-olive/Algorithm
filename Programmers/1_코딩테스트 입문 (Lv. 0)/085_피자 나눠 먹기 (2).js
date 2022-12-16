function solution(n) {
  let answer = 1;
  while ((x * 6) % n > 0) {
    answer++;
  }
  return answer;
}

//Try Again !
function solution(n) {
  return Array(6).fill(n).map((el, idx) => (el = el * (idx + 1))).find((v) => v % 6 === 0) / 6;
}

function solution(n) {
  for (let i = n; ; i += n) {
    if (i % 6 === 0) {
      return i / 6;
    }
  }
}
