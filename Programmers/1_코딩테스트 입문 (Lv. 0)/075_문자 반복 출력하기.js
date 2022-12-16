function solution(my_string, n) {
  return [...my_string].map((el) => el.repeat(n)).join('');
}

//Try Again !
function solution(my_string, n) {
  let answer = '';

  for (let i = 0; i < my_string.length; i++) {
    for (let j = 0; j < n; j++) {
      answer += my_string[i];
    }
  }
  return answer;
}

/** TIL 
 * String.prototype.repeat(num including 0)  => string
 *
 ** EXAMPLE
 * 'a'.repeat(3.5)  // 'aaa'  => count will be converted to integer
 */