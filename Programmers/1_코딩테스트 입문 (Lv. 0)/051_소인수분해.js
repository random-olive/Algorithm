function solution(n) {
  let list = [];
  let answer = [];

  for (let i = 2; i <= n; i++) {
    if (n % i === 0) list.push(i);
  }

  answer[0] = list[0];

  for (let i = 1; i < list.length; i++) {
    let check = true;
    for (let j = 0; j < answer.length; j++) {
      if (list[i] % answer[j] === 0) check = false;
    }
    if (check) answer.push(list[i]);
  }
  return answer;
}

//Try Again !
function solution(n) {
  let answer = [];
  let i = 2;

  while (i <= n) {
    if (n % i === 0) { answer.push(i);  n = n / i } 
    else { i++ }
  }

  return [...new Set(answer)];
}

function solution(n) {
  var answer = [];

  for (let i = 2; i <= n; i++) {
    while (n % i === 0) { answer.push(i);  n = n / i } 
  }

  return [...new Set(answer)];
}

function solution(n) {
  return Array.from(
    new Set([...Array(n + 1).keys()].filter((v) => n % v === 0).filter((v) => {
      for (let i = 2; i < v; i++) { if (v % i === 0) return false }
      return true;
    })
    )).splice(1);
}


/** TIL
 * 🥲 반성
 * 얽매이지 말기
 */

