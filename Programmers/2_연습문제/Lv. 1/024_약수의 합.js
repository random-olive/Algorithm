function solution(n) {
  return n === 0 ? 0 : Array.from({ length: n + 1 }, (_, i) => i + 1).filter((el) => n % el === 0).reduce((a, c) => a + c);
}

//Try Again !
function solution(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) sum += i;
  }
  return sum;
}

//
function solution(n) {
  var answer = 0;
  let i;
  for (i = 1; i <= Math.sqrt(n); i++) {
    
    if (!(n % i)) answer += i + n / i;
  }
  i--;
  return i === n / i ? answer - i : answer;
}

//
function solution(n, a = 0, b = 0) {
  return a === n + 1 ? b : solution(n, a + 1, (b += n % a ? 0 : a));
  //return a === n ? b + n : solution(n, a + 1, (b += n % a ? 0 : a));
}

//
let solution = (n) => {
  let answer = 0,
    i = 1,
    j = n % 2 == 0 ? 1 : 2;

  for (i; i < n; i = i + j) if (n % i == 0) answer += i;

  return answer + n;
};


/** TIL
 * #20 (Lv. 0) : 약수 구하기
 * 
 * 🥲 반성
 * for 루프의 변수를 밖에 정의 후 활용
 * i, n/i, n%i 활용, 짝, 개수, i--
 * 5%0 = NaN -> false
 */
