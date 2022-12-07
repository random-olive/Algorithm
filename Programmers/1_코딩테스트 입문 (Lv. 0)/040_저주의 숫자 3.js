function solution(n) {
    let arr = Array(186).fill(0);
  
    return arr.map((_, i) => (i % 3 === 0 && i !== 0) || `${i}`.includes(3) ? (arr[i] = -1) : (arr[i] = i))
      .filter((el) => el !== -1)[n];
}
  
  //Try Again !
function solution(n) {
    for (let i = 1; i <= n; i++) {
        if ((i % 3 == 0 && i !== 0) || `${i}`.includes(3)) {
            n++;
        }
    }
    return n;
}
  

function solution(n) {
  let answer = 0;

  for (let i = 1; i < n + 1; i++) {
    while ((answer + i) % 3 === 0 || `${answer + i}`.includes('3')) {
      answer++;
    }
  }

  return answer + n;
}


/** TIL
 * 🥲 반성
 * 함수와 규칙성
 */