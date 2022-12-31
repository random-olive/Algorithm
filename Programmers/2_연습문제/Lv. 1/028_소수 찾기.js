function solution(n) {
  let prime = Array.from({ length: (n + 1) / 2 }, (_, i) => 2 * i + 1);

  for (let i = 3; i <= ~~Math.sqrt(n); i += 2) {
    prime = prime.filter((el) => el % i || el <= i);
  }

  return prime.length;
}
