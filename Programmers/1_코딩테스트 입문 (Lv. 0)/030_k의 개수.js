function solution(i, j, k) {
  const regex = new RegExp(`${k}`, 'g');
  const answer = new Array(j - i + 1).fill().map((_, idx) => idx + i).join('').match(regex);
  return answer === null ? 0 : answer.length;
}

//Try Again !
function solution(i, j, k) {
    return Array(j-i+1).fill(i).map((v,i)=>v+i).join('').split(k).length-1;
}


/** TIL
 * 🥲 반성
 * 풀었던 유형인데..
 */

