function solution(n) {
  return Math.ceil(n / 7);
}

//Try Again !
function solution(n) {
  return ((n / 7) << 0) + !!(n % 7);
}

function solution(n) {
  return ~~(n / 7) + !!(n % 7);
}

/** TIL
 * π₯² λ°μ± : #43 (Lv.0)
 * λ³΅μ΅ : Operator : !!  => νμ€ν λΌλ¦¬κ²°κ³Όλ₯Ό κ°μ§κΈ° μν¨ : μ μλμ§ μμ undefined λ±μ κ°μλ νμ€ν true / false κ°μ μ€ + NOT
 */