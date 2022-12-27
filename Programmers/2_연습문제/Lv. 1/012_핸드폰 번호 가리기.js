function solution(phone_number) {
  let len = phone_number.length - 4;
  return (
    phone_number.slice(0, len).replace(/\d/g, '*') + phone_number.slice(len)
  );
}

//Try Again !
function solution(phone_number) {
  return phone_number.replace(/\d(?=\d{4})/g, '*');
}

//
function solution(phone_number) {
  return '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
}

//
function solution(phone_number) {
  //return [...phone_number].fill('*', 0, phone_number.length - 4).join('');
  return Array(phone_number.length-3).join('*')+phone_number.slice(-4)
}

/** TIL
 *  * 정규식 
 * (?=)  긍정형 전방탐색 lookahead : ?=문자 기준으로 바로 앞의 문자
 * (?!)  부정형 전방탐색 lookahead : 위와 반대 케이스
 * 
 * (?<=) 긍정형 후방탐색 lookbehind : ?<=문자 기준으로 바로 뒤의 문자
 * (?<!) 부정형 후방탐색 lookbehind : 위와 반대 케이스
 * 
 * // 부정형은 성능이 나쁘므로 소스코드 상에서 해결하는 것이 더 나음
 * 
 * 🥲 반성
 * Array.fill, join으로 str 변경하기
 */
