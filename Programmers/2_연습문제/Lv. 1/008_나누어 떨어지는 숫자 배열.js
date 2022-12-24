function solution(arr, divisor) {
  let answer = [];
  //arr.map((el) => {if (el % divisor === 0) answer.push(el)});
  //arr.map((el) => (el % divisor === 0) && (answer.push(el))); //쇼트서킷 평가문
  arr.forEach((el) => {if (el % divisor === 0) answer.push(el)}); //결과로 남기지 않을 경우 forEach 사용하기
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}

//Try Again !
function solution(arr, divisor) {
  let answer = arr.filter((el) => el % divisor == 0);
  return answer.length == 0 ? [-1] : answer.sort((a, b) => a - b);
}

//
function solution(arr, divisor) {
  let _ = arr.filter((e) => !(e % divisor)); //NOT
  return _[0] ? _.sort(($, _) => $ - _) : [-1];
}

/** TIL
 * 🥲 반성
 * 쇼트서킷 평가문
 * ===0 대신 NOT 연산자 활용
 * filter, forEach 활용
 */
