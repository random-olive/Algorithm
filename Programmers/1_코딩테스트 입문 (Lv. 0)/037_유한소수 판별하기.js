function solution(a, b) {
  return `${a / b}`.length >= 16 ? 2 : 1;
}

//Try Again !
function solution(a, b) {
  return Number((a / b).toFixed(10)) == a / b ? 1 : 2;
}


/** TIL
 * Number.prototype.toFixed((digits))  => string // basically rounded
 *
 * EXAMPLE
 * 0.1234567.toFixed(4)  => '0.1235'
 * -2.34.toFixed(1)  => -2.3  (number)
 * (-2.34).toFixed(1)  => '-2.3'
 *
 */
