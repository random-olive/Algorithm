function solution(num_list) {
  let even = num_list.filter((el) => el % 2 === 0).length;
  return [even, num_list.length - even];
}

//Try Again !
function solution(num_list) {
  let answer = [0, 0];
  num_list.forEach((el) => (answer[el % 2] += 1));
  return answer;
}

/** TIL
 * 🥲 반성
 * index 활용을 좀 더 잘했더라면
 */