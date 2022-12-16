function solution(array) {
    let count = Array.from({ length: Math.max(...array) + 1 }, (_, i) => array.filter((el) => el === i).length);
    let max = Math.max(...count);
    return count.filter((el) => el === max).length >= 2 ? -1 : +count.map((el, i) => (el === max ? i : '')).join('');
}

// Another !
function solution(array) {
    let count = Array.from({ length: Math.max(...array) + 1 }, (el) => 0);
    array.map((el) => count[el]++);
    let max = Math.max(...count);
    return count.filter((el) => el === max).length >= 2 ? -1 : +count.map((el, i) => (el === max ? i : '')).join('');
}

/** TIL
 * 🥲 반성
 * 입력 제한사항 제대로 읽기 : input : 0
 * map, index 활용도
 */
