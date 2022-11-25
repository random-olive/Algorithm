function solution(my_str, n) {
  let answer = [];
  let arr = my_str.split("");
  while (arr.length !== 0) {
    answer.push(arr.splice(0, n).join(""));
  }

  return answer;
}

//Try Again !
function solution(my_str, n) { return my_str.match(new RegExp(`.{1,${n}}`, "g"));}  // => {1,n}: 1~n개까지 매칭/ $:end/ .: new line 제외 모든 char/ g: 전역탐색


/** TIL
 * Array.prototype.splice(start, (,deleteCount, item1, ..., itemN))  => array  ! start can be negative
 * 
 * String.prototype.match(regexp)  => array
 * 
 * 
 ** EXAMPLE
 * [0, 1, 2, 3].splice(2)  => [0, 1];
 * 
 * const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
 * const regex = /[A-Z]/g;
 * const found = paragraph.match(regex);  => ["T","I"]
 *
 * 
 *
 *🥲 반성 : 문자는 최대한 정규식 활용 ..? -> 알고리즘 성능에는 그다지 좋지 않다고 한다: 그런데 그 하나의 글 말고는 다 정규식 사용 추천하는데..
 * "BackTracking 문제" : 왼쪽에서 오른쪽으로 탐색, 100% 매칭되지 않으면 다시 뒤로 되돌아가면서 매칭 
 */
