function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}

//Try Again !
function solution(n) {
    return Math.sqrt(n) % 1 === 0 ? 1 : 2;
}

/** TIL
 * Number.isInteger(value)  => boolean
 *
 * Math.sqrt(number)  => number
 *
 * Remainder (%)  => number
 * 
 *
 ** EXAMPLE
 * Number.isInteger(3)  => true
 * 
 * Math.sqrt(-1)  => NaN
 * 
 * 1 % -12  => 1
 */
