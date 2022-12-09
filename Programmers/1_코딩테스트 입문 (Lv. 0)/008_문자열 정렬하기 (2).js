function solution(my_string) {
  return my_string.toLowerCase().split('').sort().join('');
}

//Try Again !
function solution(my_string) {
  return [...my_string.toLowerCase()].sort().join('');
}

/** TIL
 * Array.prototype.sort((compare function))  => sorted in 'str' order  !! MUTABLE !!
 *
 * Spread syntax : ...
 *
 *
 ** EXAMPLE
 * ['a,'c','b'].sort()  => ['a','b','c']
 * (a-b) < 0  => a, b
 * (a-b) = 0  => keep original order
 * compare function with accented characters (e, é, è, a, ä, etc.)  => item.sort((a,b)=> a.localeCompare(b))
 * shallow copy : [...arr].sort()
 * deep copy: arr.sort()
 *
 * [...arr1, ...arr2]
 * {...obj1, ...obj2}
 *
 * const array = [1, 2, 3];
 * const obj = { ...array };  => { 0: 1, 1: 2, 2: 3 }
 *
 *
 *🥲 반성 : str -> arr : spread!
 */
