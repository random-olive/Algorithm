function solution(n) {
  let arr = ['수', '박'];
  return Array.from({ length: n }, (_, i) => arr[i % 2]).join('');
}

//Try Again !
function solution(n) {
  return '수박'.repeat(n / 2) + (n % 2 ? '수' : '');
}

//
function waterMelon(n) {
  return '수박'.repeat(n - 1).substring(0, n);
  //return "수박".repeat(Math.ceil(n)).substr(0,n);
}

//
const solution = (n) => '수박'.repeat(n).slice(0, n);

/** TIL
 * 🥲 반성
 * repeat!
 * 다 풀고 나서 : input을 덜 쓰는 방법 고민
 */
