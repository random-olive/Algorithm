function solution(bin1, bin2) {
  return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}


/** TIL
 * parseInt(string, radix)  => returns decimal, number
 * 
 * Number.prototype.toString((radix))  => returns string
 * 
 * 
 ** EXAMPLE
 * parseInt('101', 2)  => 5
 * 
 * (5).toString(2)  => '101'
 */
