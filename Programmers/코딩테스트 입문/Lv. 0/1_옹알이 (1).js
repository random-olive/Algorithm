function solution(babbling) {
  let answer = 0;
  let word = ["aya", "ye", "woo", "ma"];
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
 *
 * String.prototype.replace(regexp|substr, newSubstr|function)  => string
 * String.prototype.toUpperCase()  => string
 *
 * Contructor : RegExp(/ab+c/, 'i')  => object
 * RegExp.prototype.test(str)  => boolean
 */

/** EXAMPLE
 * [1,2,3].map(el => el * 2)  => [2,4,6]
 * [1,2,3].filter(el => el === 2)  => [2]
 *
 * 'ABC'.replace('A','a')  => 'aBC'
 * 'abc'.toUpperCase()  => 'ABC'
 *
 * new RegExp(/^[a-z]+$/, 'i')  => /^[a-z]+$/i
 * /^[a-z]+$/.test('aA')  => false
 */
