function solution(strings, n) {
  // return strings.map((el) => [el[n], el]).sort().map((el) => el[1]);
  return strings.map((el) => (el = el[n] + el)).sort().map((el) => el.slice(1));
}

//Try Again !
function solution(strings, n) {
  return strings.sort((a, b) => {
    return a[n] !== b[n] ? (a[n] > b[n]) - (a[n] < b[n]) : (a > b) - (a < b);
  });
}

//
function solution(strings, n) {
  return strings.sort((s1, s2) =>
    s1[n] !== s2[n] ? s1[n].localeCompare(s2[n]) : s1.localeCompare(s2)
  );
}

//
function solution(strings, n) {
  strings.sort(function (a, b) {
    if (a[n] > b[n]) return 1;
    if (b[n] > a[n]) return -1;
    if (a > b) return 1;
    if (b > a) return -1;
    return 0;
  });
  return strings;
}

//
function solution(strings, n) {
  return strings.sort().sort((a, b) => a.charCodeAt(n) - b.charCodeAt(n));
}

/** TIL
 * String.prototype.localeCompare(compareString(, locales (, options)))  // String이 compareString보다 앞에 위치하면 음수
 *
 ** EXAMPLE
 * //locale : 사용 언어 정의, 브라우저에 따라 미지원
 * 'ä'.localeCompare('z', 'de') // -1 : 독일어는 ä가 z 전에 위치
 * 'ä'.localeCompare('z', 'sv') // +1 : 스웨덴어는 ä가 z 후에 위치
 *
 * //options : 결과 format 정의, 브라우저에 따라 미지원
 * 'ä'.localeCompare('a', 'de', { sensitivity: 'base' }) //0 : 독일어: ä는 a를 기본문자로 가짐
 * 'ä'.localeCompare('a', 'sv', { sensitivity: 'base' }) //1 : 스웨덴어: x
 */
