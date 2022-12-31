function solution(numbers) {
  return 45 - numbers.reduce((a, c) => a + c);
}

//Try Again !
function solution(numbers) {
  let answer = 0;

  for (let i = 0; i <= 9; i++) {
  // if (numbers.indexOf(i) === -1) answer += i;
    if (!numbers.includes(i)) answer += i;
  }

  return answer;
}

//
function solution(numbers) {
  let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let answer = 0;

  number.forEach((el) => {if (!numbers.includes(el)) answer += el});

  return answer;
}
