function solution(a, b) {
  let num = [a, b].sort((a, b) => a - b);
  let answer = 0;
  for (let i = num[0]; i <= num[1]; i++) answer += i;
  return answer;
}

//Try Again !
function solution(a, b) {
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}

//
function solution(a, b, s = 0) {
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
  return s;
}

//
function solution(a, b) {
  let answer = 0;

  if (a < b) {
    for (let j = a; j <= b; j++) {
      answer += j;
    }
  } else if (a > b) {
    for (let j = b; j <= a; j++) {
      answer += j;
    }
  } else if (a == b) {
    answer = a;
  }
  return answer;
}

/** TIL
 * 🥲 반성
 * formulate
 * 변수 선언은 ()안에서
 * 대수 비교 : sort, min, max
 */
