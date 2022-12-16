function solution(my_string, letter) {
  return my_string.replaceAll(letter, '');
}

//Try Again !
function solution(my_string, letter) {
  return my_string.split(letter).join('');
}

function solution(my_string, letter) {
  let reg = new RegExp(letter, 'g');
  return my_string.replace(reg, '');
}

function solution(my_string, letter) {
  return Array.from(my_string).filter((el) => el !== letter).join('');
}

/** TIL
 * 🥲 반성
 * 제거 : replace, replaceAll, split, filter
 * str -> arr 변환 : spread, split, Array.from
 */