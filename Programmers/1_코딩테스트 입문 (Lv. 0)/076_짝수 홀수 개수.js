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
 * π₯² λ°μ±
 * index νμ©μ μ’ λ μνλλΌλ©΄
 */