function solution(rsp) {
    return [...rsp].map((el) => (el === '2' ? '0' : el === '0' ? '5' : '2')).join('');
}

//Try Again !
function solution(rsp) {
  let obj = { 2: 0, 0: 5, 5: 2 };
  return [...rsp].map((el) => obj[el]).join('');
}

/** TIL
 * π₯² λ°μ±
 * μΌλμΌ λμ : object μ΄μ©
 * spread λμ  split μ¬μ© κΈμ§, μΌν­μ°μ°μ λλνκ² μ°κΈ° 
 */
