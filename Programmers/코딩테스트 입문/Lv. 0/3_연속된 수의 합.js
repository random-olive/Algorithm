function solution(num, total) {
  let answer = [];

  let start = ((2 * total) / num + 1 - num) / 2;

  for (let i = 0; i < num; i++) {
    answer[i] = start;
    start++;
  }

  return answer;
}

//Try Again !
function solution(num, total) {
  let start = Math.ceil(total / num - Math.floor(num / 2));
  return Array(num)
    .fill()
    .map((_, i) => i + start);
}

/** TIL
 * Array(any type)  => array
 * Array.prototype.fill(value, (start, (end) )  => array
 * Math.ceil(num)  => number
 * Math.floor(num)  => number
 *
 * 
 ** EXAMPLE
 * Array(3)  => [empty x 3]
 * Array('a','b')  => ['a','b']
 *
 * Array(3).fill()  => [undefined, undefined, undefined]
 * Array(3).fill(1,0,2)  => [1,1, empty]
 *
 * Math.ceil(0.95)  => 1
 * Math.floor(0.95)  => 0
 *
 * 
 *🥲 반성 : for 루프가 무조건 빠를 줄 알았는데 아니었다...
 */
