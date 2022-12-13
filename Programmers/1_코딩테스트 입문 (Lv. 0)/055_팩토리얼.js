function solution(n) {
  let i = 1;
  let fac = 1;
  while (n >= fac) {
    i++;
    fac *= i;
  }
  return i - 1;
}

//Try Again !
function solution(n) {
  let i = 1;
  let fac = 1;
  while (n > fac * i) fac *= ++i;
  return i;
}

function solution(n) {
  let i = 2;
  let fac = 1;
  while (true) {
    fac *= i;
    if (fac > n) return i - 1;
    i++;
  }
}

function solution(n) {
  let i = 2;
  let fac = 1;
  while (true) {
    fac *= i;
    if (fac > n) {i--;  break}
    i++;
  }
  return i;
}
