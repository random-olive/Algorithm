function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}

/** TIL
 * Array.prototype.includes(searchElement(, fromIndex))  => boolean
 * String.prototype.includes(searchString, position)  => boolean
 *
 *
 ** EXAMPLE
 * ['a', 'b', 'c'].includes('a', -100)  -> true   ! If fromIndex negative & out of array length, search all
 */
