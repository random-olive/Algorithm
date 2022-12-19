function solution(num1, num2) {
  return num1 * num2;
}

//Try Again !
function solution(num1, num2) {
  let ans = 0;

  for (let i = 1; i <= num1; i++) {
    for (let j = 1; j <= num2; j++) {
      ans++;
    }
  }

  return ans;
}
