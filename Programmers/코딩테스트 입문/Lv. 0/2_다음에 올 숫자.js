function solution(common) {
  return common[2] - common[1] === common[1] - common[0]
    ? Number(common.slice(-1)) + common[1] - common[0]
    : (common.slice(-1) * common[1]) / common[0];
}

/** TIL
 * Array.prototype.slice(startIdx, endIdx)  => array
 * [1]+1 = '11'
 */

/** EXAMPLE
 * const alphabet = ['a', 'b', 'c', 'd', 'e']
 *
 * slice 에서 -1 idx는 마지막 요소를 뜻함
 * alphabet.slice(-2) => ['d', 'e']
 * alphabet.slice(2,-1) => ['c', 'd']
 */
