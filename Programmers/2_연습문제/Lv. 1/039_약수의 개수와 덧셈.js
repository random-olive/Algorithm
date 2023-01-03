const divisors = (el) => {
  let cnt = [];
  for (let i = 1; i <= el; i++) {
    if (el % i === 0) cnt++;
  }
  return cnt % 2 ? -el : +el;
};

function solution(left, right) {
  return Array.from({ length: right - left + 1 }, (_, i) => i + left)
    .map((el) => divisors(el))
    .reduce((a, c) => a + c);
}

//Try Again !
function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    //let temp = Math.sqrt(i)
    Number.isInteger(Math.sqrt(i)) ? (answer -= i) : (answer += i);
    //answer += temp == parseInt(temp)? -i : i;
    //~~(Math.sqrt(i)) == Math.sqrt(i) answer -= i : answer += i;
  }
  return answer;
}

//
function solution(left, right) {
  let sum = ((left + right) / 2) * (right - left + 1);
  let l = Math.ceil(Math.sqrt(left));
  while (l ** 2 <= right) sum -= (l++) ** 2 * 2;
  return sum;
}

//
function getDivisorCount(number) {
  if (number === 1) return 1;

  let cnt = 2;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) cnt++;
  }

  return cnt;
}

function solution(left, right) {
  let result = 0;

  for (let i = left; i <= right; i++) {
    result += getDivisorCount(i) % 2 ? -i : i;
  }

  return result;
}

//
function solution(left, right) {
  const count = Array(1001).fill(0);
  for (let i = 1; i <= 1000; i++) {
    for (let j = 1; j <= 1000 / i; j++) {
      count[i * j]++;
    }
  }

  let answer = 0;
  for (let i = left; i <= right; i++) {
    count[i] % 2 === 0 ? (answer += i) : (answer -= i);
  }

  return answer;
}
