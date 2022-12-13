function solution(my_string) {
    let check = ['a', 'e', 'i', 'o', 'u'];
    return my_string.split('').map((el) => (check.includes(el) ? el.replace(el, '') : el)).join('');
}

//Try Again !
function solution(my_string) {
    return my_string.replace(/[aeiou]/g, '');
}

function solution(my_string) {
    return Array.from(my_string).filter(t => !['a', 'e', 'i', 'o', 'u'].includes(t)).join('');
}

/** TIL
 * 🥲 반성
 * filter, replace 사용으로 간단하게
 */