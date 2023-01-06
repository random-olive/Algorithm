function solution(n) {
  return parseInt([...n.toString(3)].reverse().join(''), 3);
}

//Try Again !
function solution(n) {
  const answer = [];
  while (n) {
    answer.unshift(n % 3);
    n = ~~(n / 3);
  }
  return answer.reduce((a, c, i) => a + c * 3 ** i);
}

//
function solution(n, numbers = []) {
  while (n) numbers.push(n % 3), (n = parseInt(n / 3));
  return numbers.reduce(
    (a, c, i, arr) => a + c * Math.pow(3, arr.length - i - 1),
    0
  );
}

//
function make3(str, n) {
  if (n < 3) return str + n;

  let cut = ~~(n / 3);
  let rest = ~~(n % 3);

  return make3(str + '' + rest, cut);
}

function make10(n) {
  let ar = n.split('');
  let sum = 0;

  for (let i = ar.length - 1; i >= 0; i--) {
    let tmp = 1;
    for (let j = i; j < ar.length - 1; j++) {
      tmp *= 3;
    }

    sum += ar[i] * tmp;
  }
  return sum;
}

function solution(n) {
  let answer = 0;

  answer = make3('', n);
  answer = make10(answer);

  return answer;
}
