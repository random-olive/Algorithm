function solution(s) {
  let idx = ~~(s.length / 2);
  return s.length % 2 === 0 ? s.slice(idx - 1, idx + 1) : s[idx];
}

//Try Again !
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

/** TIL
 * String.prototype.substr()  => Deprecated : str.substr(startIdx, length)
 */
