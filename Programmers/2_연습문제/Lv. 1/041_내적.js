function solution(a, b) {
  return a.map((el, i) => el * b[i]).reduce((a, c) => a + c);
}

//Try Again !
function solution(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}

//
function solution(a, b) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i] * b[i];
  }
  return sum;
}

/** TIL
 * 🥲 생각 했었는데
 */