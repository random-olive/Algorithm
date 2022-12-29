function solution(n) { //시간초과
  let prime = Array.from({ length: n }, (_, i) => i + 1);

  for (let i = 2; i <= ~~Math.sqrt(n); i++) {
    prime = prime.filter((el) => el % i || el <= i);
  }

  return prime.length - 1;
}
