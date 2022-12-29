function solution(s) {
  return Math.abs(5 - s.length) === 1 ? (s.match(/\D/g) ? false : true) : false;
}

//Try Again !
function solution(s) { //test로 true, false 체크
  return /^\d{4}$|^\d{6}$/.test(s);
}

//return을 따로
function solution(s) { //지수케이스 왜 되지
  if (s.includes('e') || isNaN(s)) return false;
  return s.length === 4 || s.length === 6 ? true : false;
}

//Fails
//'10e1': 지수형태의 문자열 fail
function solution(s) {
  return s.length == 4 || s.length == 6 ? !isNaN(s) : false;
}
const solution = (s) =>
  !!((s.length === 4 || s.length === 6) && !s.includes('e') && s - 0);


//'000': 0으로 시작하는 문자열 fail
function solution(s) {
  let result = false;

  if (s > 999) {
    if (s < 10000) {
      result = true;
    } else if (s > 99999) {
      if (s < 1000000) {
        result = true;
      } else {
        result = false;
      }
    }
  }

  return result;
}

/** TIL
 * 🥲 반성
 * 정규식 test 체크
 */
