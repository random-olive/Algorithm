function solution(n) {
  return new Array(n).fill(1).map((_, i) => i + 1).filter((el) => n % el === 0);
}

//Try Again !
function solution(n) {
  return Array.from({ length: n }, (_, i) => i + 1).filter((el) => n % el === 0);
}

/** TIL
 * Array.from(arrayLike, (element(, index)))  => new shallow array
 * Array.from(arrayLike, mapFn(, thisArg))  => new shallow array + map
 * 
 * 
 ** EXAMPLE
 * Array.from({ length: 5 }, (_,i)= > i)  => [0, 1, 2, 3, 4]
 * Array.from('foo')  => ["f", "o", "o"]
 * Array.from([1, 2, 3], el => 2 * el)  => [2, 4, 6] 
 * 
 * Array from a Map
 * const map = new Map([ [1, 2], [2, 4], [4, 8],]);
 * Array.from(map)  => [[1, 2], [2, 4], [4, 8]]
 * 
 * const mapper = new Map([ ["1", "a"], ["2", "b"],]);
 * Array.from(mapper.values())  =>['a', 'b'];
 * Array.from(mapper.keys()) ==> ['1', '2'];
 * 
 * Array from a NodeList
 * const sources = Array.from(images, (image) => image.src);
 */


