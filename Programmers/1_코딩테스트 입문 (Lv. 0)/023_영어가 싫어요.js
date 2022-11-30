function solution(numbers) {
    const regex = /zero|one|two|three|four|five|six|seven|eight|nine/g;
    answer = numbers.match(regex);
  
    return +answer.map((el) => el === 'zero'? (el = 0) : el === 'one'? (el = 1) : el === 'two'? (el = 2) : el === 'three'? (el = 3) : 
          el === 'four'? (el = 4) : el === 'five'? (el = 5) : el === 'six'? (el = 6) : el === 'seven'? (el = 7) : el === 'eight'? (el = 8)  : 
          el === 'nine'? (el = 9) : null).join('');
  }
  
  
//Try Again !
function solution(numbers) {
      const obj = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9 };
      const answer = numbers.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, (key) => { return obj[key] });
      return +answer;
}

const solution = (numbers) => +['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'].reduce((acc, cur, idx) => acc.replaceAll(cur, idx), numbers);

function solution(numbers) {
  let strings = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  for (let i in strings) {
    numbers = numbers.replace(new RegExp(strings[i], 'g'), +i)
  }
  return + numbers;
}

function solution(numbers) {
  let strings = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  for (let i = 0; i < strings.length; i++) {
    numbers = numbers.split(strings[i]).join(i);
  }
  return + numbers;
}


/** TIL
 * String.prototype.replaceAll(pattern, replacement)
 * 
 * for ... in  => only accessible to "key" not value like : prop, index, ...
 * 
 * 
 ** EXAMPLE
 * "aabbcc".replaceAll("b", ".")  => "aa..cc"
 * 
 * 
 * 🥲 반성
 *  Array - idx pair
 *  
 *  String.replace(regex , function);
 * 
 *  String, Array, Repeat  => reduce !!!
 * 
 *  split, join
 * 
 *  me = me
 */


