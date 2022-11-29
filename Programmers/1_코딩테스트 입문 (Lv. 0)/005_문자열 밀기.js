function solution(A, B) {
  let arr = A.split('');

  if (A === B) return 0;

  for (let i = 1; i <= A.length; i++) {
    if ( B === arr.slice(-i).concat(arr.slice(0, arr.length - i)).join('')) return i; 
  }

  return -1;
}


//Try Again !
let solution = (a, b) => (b + b).indexOf(a);


/** TIL
 * Array.prototype.concat((any value))  => array
 * Array.prototype.join((separator))  => string  ! default separator: ,
 * 
 * String.prototype.split((seperator, (limit)))  => array(limit)  ! seperator can be regex or object  ! **KEEP : Symbol.split()**  ! ...Spread
 * String.prototype.indexOf(searchValue(, fromIndex))  => first idx  ! fromIdex default: 0
 * String.prototype.lastIndexOf(searchValue(, fromIndex))  => last idx  ! fromIdx default: +Infinity, fromIdex<0 -> 0
 * 반대로 + 포함 / 뒤부터 체크
 * 
 ** EXAMPLE
 * ['a','b','c'].concat([1,[2,3]])  => ['a','b','c',1,2,3] !
 * 
 * [1, undefined, 3].join()  => '1,,3'
 * 
 * '777777'.split('7')  => ['', '2', '3', '']
 * 
 * 'Blue Whale'.indexOf('Whale', 5)  => 5
 * 'Blue Whale'.indexOf('', 7)  => 7
 * 
 * 'canal'.lastIndexOf('a')  => 3
 * 'canal'.lastIndexOf('a', 0);  => -1
 * 'canal'.lastIndexOf('c', 0);  =>  0
 * 'canal'.lastIndexOf('');      =>  5
 * 'canal'.lastIndexOf('', 2);   =>  2
 *
 * 
 * Q) indexOf() : count of 'e's
 * 
 * let str = 'To be, or not to be, that is the qustion'
 * let count = 0;
 * let idx = str.indexOf('e')
 * 
 * while (pos !== -1){
 * count++
 * idx = str.indexOf('e',idx+1)
 * }
 *
 *🥲 반성 : 자유로운 사고..
 */
