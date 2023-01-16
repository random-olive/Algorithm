function solution(a, b, n) {
  let answer = 0;
  while (n > a) {
    answer += ~~(n / a);
    n = ~~(n / a) * b + (n % a);
    if (n === a) answer += b;
  }
  return answer;
}

function solution(a, b, n) {
  let get = [];
  let left = [];
  while (n > a) {
    get.push(~~(n / a));
    n = ~~(n / a) * b + (n % a);
    left.push(n);
    if (n === a) get.push(b);
  }
  return get.reduce((a,c)=>a+c,0)
}

