function solution(babbling) {
  let answer = 0;
  let word = ['aya', 'ye', 'woo', 'ma'];
  let filtered = [];

  for (let i = 0; i < word.length; i++) {
    babbling = babbling.map((el) => el.replace(word[i], word[i].toUpperCase()));
  }

  filtered = babbling.filter((el) => /^[A-Z]+$/.test(el));
  answer = filtered.length;

  return answer;
}

/** TIL 
 * Array.prototype.map((el, idx, arr) => {})  => array
 * Array.prototype.filter((el, idx, arr) => {}) => array
 * Array.prototype.length  => number
 * 
 * String.prototype.replace(regexp|substr, newSubstr|function)  => string   ! replaces only one + special replacement patterns
 * String.prototype.toUpperCase()  => string  ! shallow copy
 * String.length
 * 
 * Contructor : RegExp(/ab+c/, 'i')  => object
 * RegExp.prototype.test(str)  => boolean
 *
 *
 ** EXAMPLE
 * [1,2,3].map(el => el * 2)  => [2,4,6]
 * [1,2,3].filter(el => el === 2)  => [2]
 * 
 * Array.length
 * Shortening : if ([1,2,3,4,5].length>3){[1,2,3,4,5].length=3}  => [1,2,3]
 * Create empty array : const numbers = []; numbers.length =3  => [empty x 3]
 * 
 * String.replace
 * 
 * Basic : 'ABC'.replace('A','a')  => 'aBC'
 * 
 * Switching order : 
 * const str = "Maria Cruz"; 
 * const re = /(\w+)\s(\w+)/;
 * const newstr = str.replace(re, "$2 $1");  => "Cruz Maria"
 * 
 * Splitting 1 : 
 * function replacer(match, p1, p2, p3, offset, string) {
 * // p1 is non-digits, p2 digits, and p3 non-alphanumerics
 * return [p1, p2, p3].join(" - ");
 * }
 * const newString = "abc12345#$*%".replace(/([^\d]*)(\d*)([^\w]*)/, replacer);  => 'abc - 12345 - #$*%'
 * 
 * Splitting 2 : 
 * function styleHyphenFormat(propertyName) {
 * function upperToHyphenLower(match, offset, string) {
 * return (offset > 0 ? "-" : "") + match.toLowerCase();
 * }
 * return propertyName.replace(/[A-Z]/g, upperToHyphenLower)}  => styleHyphenFormat('borderTop') -> 'border-top'
 * 
 * 
 * 'abc'.toUpperCase()  => 'ABC'
 * 
 * String.length
 * '😄'.length  => 2
 * 
 * 
 * new RegExp(/^[a-z]+$/, 'i')  => /^[a-z]+$/i
 * /^[a-z]+$/.test('aA')  => false
 */
