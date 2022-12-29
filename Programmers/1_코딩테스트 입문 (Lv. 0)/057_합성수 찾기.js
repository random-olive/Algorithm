function solution(n) {
  let answer = [];

  if (n <= 3) return 0;

  for (let i = 4; i <= n; i++) {
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) !answer.includes(i) ? answer.push(i) : '';
    }
  }
  return answer.length;
}

//Try Again !
function solution(n) {
  let prime = Array.from(Array(n), (_, i) => i + 1); //i 활용하려면 1씩 mark
  for (let i = 2; i <= parseInt(Math.sqrt(n)); i++) { //제곱근이 나오는 순간 소수에서 벗어남 : sqrt까지 mark
    prime = prime.filter((el) => el % i != 0 || el <= i); //arr.method: iterable -> for loop처럼 생각하기
  }
  return n - prime.length;
}

function solution(n) {
  let answer = 0;
  for (let i = 4; i <= n; i++) {
    for (let j = 3; j < n; j += 2) {
      if (i !== j && (!(i % 2) || !(i % j))) {
        answer++;
        break;
      }
    }
  }
  return answer;
}

function solution(n) {
  let dp = new Array(n + 1).fill(1);
  for (let i = 2; i <= n; i++) {
    if (dp[i]) {
      for (let j = 2; i * j <= n; j++) {
        dp[i * j] = 0;
      }
    }
  }

  return dp.filter((el) => el === 0).length;
}

function solution(n) {
  let count = 0;
  let number = 3;
  while (number++ < n) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        count++;
        break;
      }
    }
  }
  return count;
}

/** TIL
 * 🥲 반성
 * 숫자 하나씩 체크 => Array.from 이용 !
 */
