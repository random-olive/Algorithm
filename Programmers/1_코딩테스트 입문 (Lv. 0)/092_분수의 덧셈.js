function solution(denum1, num1, denum2, num2) {
  let answer = [denum1 * num2 + denum2 * num1, num1 * num2];
  let gcd = 1;
  for (let i = 2; i <= num1 * num2; i++) {
    answer[0] % i === 0 && answer[1] % i === 0 ? (gcd = i) : i;
  }
  return answer.map((el) => el / gcd);
}

//Try Again !
function fnGCD(a, b) {
  return a % b ? fnGCD(b, a % b) : b;
}

function solution(denum1, num1, denum2, num2) {
  let denum = denum1 * num2 + denum2 * num1;
  let num = num1 * num2;
  let gcd = fnGCD(denum, num);

  return [denum / gcd, num / gcd];
}

/** TIL
 * 🥲 반성
 * function gcd(a,b){ //10 % 2처럼 앞이 큰 것이 중요함
 * return a%b? gcd(b,a%b):b}
 * a % b === true (값이 있음) ?
 * gcd * lcm = a * b
 */
