function solution(num, result = 0) {
  if (num === 1) return 0;
  num % 2 ? (num = num * 3 + 1) : (num = num / 2);
  return num === 1  ? result + 1 : result >= 500 ? -1 : solution(num, result + 1);
}

//Try Again !
function solution(num, result = 0) {
  return num === 1 ? result : result >= 500 ? -1 : solution(num % 2 == 0 ? num / 2 : num * 3 + 1, ++result); //함수 자체에 식 넣기, ++ 활용
}

//
function solution(num) {
  let result = 0; // parameter에서 정의하는 것보다 빠름
  while (num !== 1) {
    if (result++ === 500) return -1; // 이 단계에서 이미 +됨
    num = num % 2 ? num * 3 + 1 : num / 2; // ! 처음에만 정의
  }
  return result;
}

//
function solution(num) {
  let result = 0;
  while (num > 1) {
    if (result >= 500) return -1;
    num = num % 2 ? num * 3 + 1 : num / 2;
    result++;
  }
  return result;
}

//
function solution(num, result = 0) {
  while (num != 1 && result != 500) {
    num % 2 ? (num = num * 3 + 1) : (num = num / 2);
    result++;
  }
  return num == 1 ? result : -1;
}

/** TIL
 * 🥲 반성
 * parameter에서 변수 정의하는 것보다 함수 내부에서 정의하는 것이 빠름
 * 재귀함수 자체에 식 넣기
 * ++ 활용
 * 삼항연산자 : 처음에만 정의하기
 */
