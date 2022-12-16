function solution(num_list) {
  return num_list.reverse();
}

//Try Again !
function solution(num_list) {
  return num_list.sort((a, b) => -1);
}

function solution(num_list) {
  let answer = [];
  let len = num_list.length;
  for (let i = 1; i <= len; i++) {
    answer.push(num_list[len - i]);
  }
  return answer;
}

function solution(num_list) {
  let answer = [];
  num_list.forEach((el) => answer.unshift(el));
  return answer;
}

function solution(num_list) {
  let answer = [];
  while (num_list.length) {
    answer.push(num_list.pop());
  }
  return answer;
}
