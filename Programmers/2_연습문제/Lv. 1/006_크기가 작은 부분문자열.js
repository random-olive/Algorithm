function solution(t, p) {
  let answer = 0;

  for (let i = 0; i <= t.length - p.length; i++) { // i < t.length-p.length+1
    if (t.slice(i, i + p.length) <= p) answer++; //삼항연산자 x
  }

  return answer;
}

//Try Again !
function solution(t, p) {
  let answer = 0;
  const tLength = t.length;
  const pLength = p.length;

  for (let i = pLength; i <= tLength; i++) {
    if (t.slice(i - pLength, i) <= p) answer++;
  }

  return answer;
}
