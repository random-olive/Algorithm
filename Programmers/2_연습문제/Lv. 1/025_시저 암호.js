function solution(s, n) {
  return [...s].map((el) => el.charCodeAt() + n)
  .map((v) => v === 32 + n ? 32 : v <= 90 + n ? v > 90 ? v - 26 : v : v > 122 ? v - 26 : v)
  .map((el) => String.fromCharCode(el)).join('');
}

//Another !
function solution(s, n) {
  return [...s].map((el) => {
      let code = el.charCodeAt();
      if (el === ' ') return 32;
      if (code <= 90) return code + n > 90 ? code + n - 26 : code + n;
      return code + n > 122 ? code + n - 26 : code + n;
    }).map((el) => String.fromCharCode(el)).join('');
}

//Fails
function solution(s, n) {
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    let code = s[i].charCodeAt();
    if (s[i] === 'z' || s[i] === 'Z') {
      code = s[i].charCodeAt() - 26;
    }
    if (s[i] === ' ') answer.push(32);
    else answer.push(code + n);
  }

  return answer.map((el) => String.fromCharCode(el)).join('');
}

//정규식- 제일 오래 걸림
function solution(s, n) {
  const replacer = (el) => {
    if (el === ' ') return 32 + ' ';
    if (el.match(/[zZ]/gi)) return el.charCodeAt() - 26 + n + ' ';
    else return el.charCodeAt() + n + ' ';
  };

  return s.replace(/\D/gi, replacer).split(' ').map((el) => String.fromCharCode(el)).join('').slice(0, -1);
}

//Try Again !
function solution(s, n) { //분기를 없애는 좋은 코드 y, ,Y
  let code = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY                          ';
  return [...s].map((el) => code[code.indexOf(el) + n]).join('');
}

//
function solution(s, n) {
  return s.replace(/[a-z]/gi, (el) =>
      [(el = el.charCodeAt(0)), String.fromCharCode((el & 96) + (((el % 32) + n - 1) % 26) + 1)][1]
  );
}

//
function solution(s, n) {
  return s.replace(/([a-z])|([A-Z])/g, (el, lowerCase) => {
      let startCode = lowerCase ? 97 : 65;
      return String.fromCharCode(((el.charCodeAt(0) - startCode + n) % 26) + startCode);
  });
}

//
function solution(s, n) {
  let l = 'abcdefghijklmnopqrstuvwxyz';
  let u = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return s.split('').map((el) => {
      let code = el.charCodeAt(0);
      if (el === ' ') return el;
      return code < 91 ? u[(code - 65 + n) % 26] : l[(code - 97 + n) % 26]}).join('');
}


/** TIL
 * 🥲 반성
 * 분기를 줄일 수 있는 코드를 생각하기 (idx, case 복잡하게 생각 안하는 방법)
 * 문자 shift의 경우 소문자, 대문자 fix 가 중요 ->  solution("bC ", 25)
 */