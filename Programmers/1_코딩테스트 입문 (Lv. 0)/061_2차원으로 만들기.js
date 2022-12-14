function solution(num_list, n) {
    return answer = Array.from(Array(num_list.length / n), (el) => el = num_list.splice(0, n));
}

/** TIL
* 🥲 반성
* Array.from syntax
*/

//Another & Try Again !
function solution(num_list, n) {
  let answer = [];

  for (let i = 1; i <= num_list.length / n; i++) {
    answer.push(num_list.splice(0, n));
  }

  return answer;
}

function solution(num_list, n) {
  let answer = [];
  for (let i = 0; i < num_list.length; i += n) {
    answer.push(num_list.slice(i, i + n));
  }

  return answer;
}
