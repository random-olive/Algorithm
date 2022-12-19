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

//Try Again !
function solution(array) {
    let m = new Map();
    for (let el of array) m.set(el, (m.get(el) || 0) + 1);
    // array.forEach((el) => m.set(el, m.get(el) + 1 || 1));
    m = [...m].sort((a, b) => b[1] - a[1]);
    return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
    // or after sorting
    // let max = m[0][1];
    // m = m.filter((e) => e[1] === max).map((e) => e[0]);
    // return m.length > 1 ? -1 : m[0];
}

//
function solution(array) {
    const counts = array.reduce((a, c) => (a[c] ? { ...a, [c]: a[c] + 1 } : { ...a, [c]: 1 }), {});
    const max = Math.max(...Object.values(counts));
    const modes = Object.keys(counts).filter((key) => counts[key] === max);
    return modes.length === 1 ? +modes[0] : -1;
}

//
function solution(array) {
    const freq = {};
  
    for (const el of array) {
      freq[el] = (freq[el] || 0) + 1;
    }
  
    const keys = Object.keys(freq);
    keys.sort((a, b) => freq[b] - freq[a]);
  
    const max = keys[0];
    return freq[keys[0]] === freq[keys[1]] ? -1 : +max;
}

//
function solution(array) {
    const m = new Map();
    array.forEach((num) => { m.has(num) ? m.set(num, m.get(num, 1) + 1) : m.set(num, 1)});
    const max = Math.max(...m.values());
    const answer = Array.from(m).filter((el) => el[1] === max);
    return answer.length > 1 ? -1 : answer[0][0];
}

//
var m, n, solution = (array) => {
    return (([m, n] = 
        Object.entries( array.reduce((a, c) => { return (a[c] = (a[c] ?? 0) + 1), a; }, {})).sort(([, x], [, y]) => y - x)), 
        !n || m[1] != n[1] ? +m[0] : -1
        )
};

//
function solution(array) {
    const arr = new Array(2001).fill(0);
    array.forEach((el) => (arr[el + 1000] += 1));
    const max = Math.max(...arr);
    const startIndex = arr.indexOf(max);
    const lastIndex = arr.lastIndexOf(max);
    return startIndex === lastIndex ? startIndex - 1000 : -1;
}

/** TIL
 * Object.keys(obj||arr||str)  => key or idx in ordered string // obj 단계에서 이미 key sort 됨 
 * Object.values(obj||arr||str)
 * 
 * Object.entries(obj||arr||str)  => [[key, value],...] 
 * 1) ::: when Converting an Obj -> Map
 * const map = new Map(Object.entries({ foo: "bar", baz: 42 })) // Map(2) {"foo" => "bar", "baz" => 42}
 * 
 * Object.entries(obj).forEach(([key, value]) => { console.log(`${key} ${value}`); // "foo bar", "baz 42"});
 * 
 * 🥲 반성
 * 입력 제한사항 제대로 읽기 : input : 0
 * map, index, 삼항연산자 활용도
 */
