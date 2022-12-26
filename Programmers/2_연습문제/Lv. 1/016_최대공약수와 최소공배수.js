function solution(n, m) {
  const gcd = (a, b) => {
    return a % b ? gcd(b, a % b) : b;
  };
  return [gcd(n, m), (n * m) / gcd(n, m)];
}

//Try Again !
function solution(n, m) {
  var r;
  for (var nm = n * m; (r = n % m); n = m, m = r) {}
  return [m, nm / m];
}

//
function solution(n, m) {
  const gcd = (a, b) => {
    if (b == 0) return a;
    return a > b ? gcd(b, a % b) : gcd(a, b % a);
  };
  return [gcd(n, m), (n * m) / gcd(n, m)];
}

//
function solution(n, m) {
  const min = Math.min(n, m);
  let gcd = 1;
  for (let i = min; i > 0; i--) {
    if (n % i === 0 && m % i === 0) {
      gcd = i;
      break;
    }
  }
  return [gcd, gcd * (n / gcd) * (m / gcd)];
}
