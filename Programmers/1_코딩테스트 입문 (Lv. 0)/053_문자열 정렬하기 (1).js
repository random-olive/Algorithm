function solution(my_string) {
    return my_string.match(/[0-9]/g).map(Number).sort();
  }
  
//Try Again !
function solution(s) {
  return s.match(/\d/g)?.map(Number).sort() ?? [];
}

/** TIL
 * π₯² λ°μ±
 * 1μλ¦¬ μ«μ -> \d, sort() μ΄μ©μ΄ λ ν¨μ¨μ   => λ©μλ, μ κ·μμ ν­ λκ² κ³ λ―Όν΄λ³΄κΈ°
 */