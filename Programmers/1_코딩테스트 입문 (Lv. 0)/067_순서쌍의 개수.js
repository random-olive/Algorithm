function solution(n) {
  let answer = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0 && n / i !== i) answer += 2;
    if (n / i === i) answer += 1;
  }
  return answer;
}

//Try Again !
function solution(n) {
  let answer = 0;
  for (let i = 1; i < Math.sqrt(n); i++) if (n % i === 0) answer += 2;

  return Number.isInteger(Math.sqrt(n)) ? answer + 1 : answer;
}


/** TIL
 * π₯² λ°μ±
 * κ΅¬μ‘°μ λ§μ§λ§μ μΆκ°ν΄λ λλ λ‘μ§
 */
