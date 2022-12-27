function solution(s) {
  let idx = 0;
  let answer = '';

  for (let i = 0; i < s.length; i++) {
    idx % 2 ? (answer += s[i].toLowerCase()) : (answer += s[i].toUpperCase());
    if (s[i] === ' ') idx = -1;
    idx++;
  }
  return answer;
}

//Try Again !
function solution(s) {
  return s.toUpperCase().replace(/(\w)(\w)/g, function (a) {return a[0].toUpperCase() + a[1].toLowerCase()});
}

//
function solution(s){
  return s.toLowerCase().split(' ').map(el => el.split('').map((v, i) => i % 2 ? v : v.toUpperCase()).join('')).join(' ')
}

//삼항연산자로 함수 호출 !
function solution(s) {
  let result = '';

  for (let word of s.split(' ')) {
    for (let i in word) {
      result += word[i][i % 2 == 0 ? 'toUpperCase' : 'toLowerCase']();
    }
    result += ' ';
  }

  return result.slice(0, -1);
}


/** TIL
 * 정규식 (\w) : 영문, 숫자, 밑줄 -> 두개 : 연속된
 * 
 * 🥲 반성
 * for 보다 빠른 method
 * 삼항연산자로 함수 호출 [삼항연산자]()
 * for ... in #23 (Lv.0)
 */
