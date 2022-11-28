function solution(n) {
  let result = 0;
  return [...`${n}`].map((el) => (result += +el)).slice(-1)[0];
}

//Try Again !
function solution(n) {
  return [...`${n}`].reduce((acc, cur) => acc + +cur, 0);
}


/** TIL
 * Array.prototype.reduce((accumulator, currentValue, (currentIndex(, array))))  => value
 * Array.prototype.reduce(callbackFn, initialValue)  => value
 *
 * Nullish coalescing operator : leftExpr ?? rightExpr  => return  leftExpr === null || undefined ? rightExpr : leftExpr
 *
 * 
 ** EXAMPLE
 * const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
 * const countedNames = names.reduce((allNames, name) => {
 * const currCount = allNames[name] ?? 0;
 * return { ...allNames, [name]: currCount + 1, }}, {}); 
 *  => countedNames = { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
 *
 * const people = [ { name: "Alice", age: 21 }, { name: "Max", age: 20 }, { name: "Jane", age: 20 }, ];
 * const groupedPeople = people.reduce((acc, obj) => {
 * const key = obj["age"];
 * const curGroup = acc[key] ?? []; 
 * return { ...acc, [key]: [...curGroup, obj] }}, {});
 *  => groupedPeople = { 20: [ { name: 'Max', age: 20 }, { name: 'Jane', age: 20 } ], 21: [{ name: 'Alice', age: 21 }] }
 * 
 *
 *😄 적응 : split -> spread... / Number() -> +
 */

 