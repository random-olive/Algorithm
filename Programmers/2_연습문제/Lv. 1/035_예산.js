function solution(d, budget) {
  let result = 0;
  d = d.sort((a, b) => a - b);

  for (var i = 0; i < d.length; i++) {
    result += d[i];
    if (result > budget) return i;
  }
  return i;
}

//Try Again !
function solution(d, budget) {
  d = d.sort((a, b) => a - b);
  for (var i = 0; i < d.length; i++) {
    if (budget < d[i]) break;
    budget -= d[i];
  }
  return i;
}

//??
function solution(d, budget) {
  return ~(~d.sort((a, b) => a - b).map((v) => (budget -= v)).findIndex((v) => v < 0) || ~d.length);
}

//
function solution(d, budget) {
  d.sort((a, b) => a - b);
  while (d.reduce((a, c) => a + c, 0) > budget) d.pop();
  return d.length;
}

//
function solution(d, budget) {
  let answer = 0;
  let money = 0;
  d.sort((a, b) => a - b).forEach(function (el) {
    money += el;
    if (money <= budget) {
      answer++;
    }
  });
  return answer;
}

//**
function solution(d, budget) {
  return d.sort((a, b) => a - b).reduce((count, price) => {return count + ((budget -= price) >= 0)}, 0);
}

//input itself : none -> true : false
var solution = (d, budget) =>
  d.sort((a, b) => a - b).filter((el) => (budget >= el ? ((budget = budget - el), 1) : 0)).length;

/** TIL
 * ~ : Bitwise NOT : bit를 NOT처리 (반대) : it converts the operand to a 32-bit signed integer
 *
 * 🥲 반성
 * var 활용
 */
