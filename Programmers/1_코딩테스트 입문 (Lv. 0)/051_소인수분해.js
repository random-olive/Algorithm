function solution(n) {
  let answer = [];
  let divisible = [];
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) divisible.push(i);
  }
  let leng = divisible.length;

  answer.push(divisible[0]);

  for (let i = 1; i < leng; i++) {
    let chk = 0;
    for (let j = 0; j < answer.length; j++) {
      if (divisible[i] % answer[j] === 0) chk = 1;
    }
    if (chk === 0) answer.push(divisible[i]);
  }
  return answer;
}
