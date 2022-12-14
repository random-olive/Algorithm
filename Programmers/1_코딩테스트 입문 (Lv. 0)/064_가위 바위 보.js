function solution(rsp) {
    return [...rsp].map((el) => (el === '2' ? '0' : el === '0' ? '5' : '2')).join('');
}

//Try Again !
function solution(rsp) {
  let obj = { 2: 0, 0: 5, 5: 2 };
  return [...rsp].map((el) => obj[el]).join('');
}

/** TIL
 * 🥲 반성
 * 일대일 대응 : object 이용
 * spread 대신 split 사용 금지, 삼항연산자 똑똑하게 쓰기 
 */
